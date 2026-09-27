"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { getConsent, getServerConsent, subscribeConsent } from "@/lib/consent";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

/* Tráfico interno: abrir cualquier página con ?interno=1 marca ESTE navegador
   (localStorage). Desde entonces GA4 recibe traffic_type=internal, que descarta
   el filtro «Internal Traffic» de GA4 cuando está en Activo, y Clarity lo
   etiqueta interno=si. ?interno=0 lo desmarca. A diferencia de la regla por IP
   de GA4, sigue valiendo cuando cambia la IP (casa, móvil…). */
const INTERNAL_JS = `var __tgInterno=(function(){try{var q=new URLSearchParams(location.search).get("interno");if(q==="1")localStorage.setItem("tg_interno","1");if(q==="0")localStorage.removeItem("tg_interno");return localStorage.getItem("tg_interno")==="1";}catch(e){return false;}})();`;

export default function Analytics() {
    // Ningún script de analítica se inyecta hasta que el usuario acepta en el
    // banner (LSSI art. 22.2 + RGPD). El HTML estático sale siempre sin ellos.
    const consent = useSyncExternalStore(subscribeConsent, getConsent, getServerConsent);
    const granted = consent === "accepted";

    if (!granted) return null;
    if (!GA4_ID && !GTM_ID && !CLARITY_ID) return null;

    return (
        <>
            {GTM_ID && (
                <Script
                    id="gtm"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
                    }}
                />
            )}

            {GA4_ID && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
                        strategy="afterInteractive"
                    />
                    {/* ⚠️ Sin page_path y sin repetir el config en cada cambio de
                        ruta, que es lo que se hacía hasta el 27-sep: page_path se
                        quedaba fijo en la página de entrada y las vistas de la
                        navegación interna se apuntaban a ella (Precios salía con
                        la mitad de sus vistas). Esas vistas las envía la medición
                        mejorada de GA4 («cambios de página basados en el
                        historial»); si alguien la apaga, dejan de contarse.
                        El consent default solo declara lo que ya ha pasado, porque
                        este script no existe hasta que se acepta: analítica sí,
                        publicidad no (el banner no la pide). Quita el aviso de GA4
                        «Falta el consentimiento de los usuarios del EEE».
                        Al final se envían los eventos que llegaron antes que GA4
                        (ver trackEvent). */}
                    <Script
                        id="ga4"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("consent","default",{analytics_storage:"granted",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});gtag("js",new Date());${INTERNAL_JS}gtag("config","${GA4_ID}",__tgInterno?{traffic_type:"internal"}:{});(window.__tgq||[]).forEach(function(e){gtag("event",e[0],e[1]);});window.__tgq=[];`,
                        }}
                    />
                </>
            )}

            {CLARITY_ID && (
                /* ⚠️ El id NO puede ser "clarity". Todo elemento con id queda
                   colgado de window con ese nombre, así que window.clarity era
                   ESTE <script> y no la función de Clarity: el tag fallaba en
                   cada página («a[c] is not a function») y Clarity estuvo meses
                   con 0 sesiones. consentv2: desde el 31-oct-2025 Microsoft
                   exige esa señal en el EEE, y sin ella cuenta cada página como
                   una sesión nueva. Mismo reparto que en GA4: analítica sí,
                   publicidad no. */
                <Script
                    id="ms-clarity-init"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");window.clarity("consentv2",{ad_Storage:"denied",analytics_Storage:"granted"});${INTERNAL_JS}if(__tgInterno)window.clarity("set","interno","si");`,
                    }}
                />
            )}
        </>
    );
}

export function trackEvent(eventName, params = {}) {
    if (typeof window === "undefined" || getConsent() !== "accepted") return;
    if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
    } else {
        // GA4 todavía no ha arrancado. Pasa con lo que se lanza al montar la
        // página: funnel_view no llegó nunca a GA4 por esto. Se guarda y lo
        // envía el propio script de GA4 justo después de su config.
        (window.__tgq = window.__tgq || []).push([eventName, params]);
    }
    if (window.dataLayer) {
        window.dataLayer.push({ event: eventName, ...params });
    }
}
