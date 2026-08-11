"use client";

/* ──────────────────────────────────────────────
   META CLICK ID — puente entre el clic en el anuncio y el registro

   EL PROBLEMA QUE RESUELVE
   Meta añade ?fbclid=... a la URL cuando alguien pincha tu anuncio. Ese
   parámetro vive un instante: en cuanto la persona navega a otra página o se
   va a registrarse, desaparece. Si no lo guardamos, el backend manda a la
   Conversions API "se ha registrado alguien" sin poder decir de qué anuncio
   venía, y Meta no aprende nada.

   POR QUÉ FUNCIONA AQUÍ
   Los CTA de la landing apuntan a totalgains.es/app/login — MISMO DOMINIO que
   esta web. Las cookies son del dominio, no de la ruta, así que la que se
   escribe aquí la lee la pantalla de registro de la app exportada y viaja al
   backend en el body del signup. No hay salto que perder.

   NO CARGA EL PÍXEL DE META
   No hace falta: `_fbp` es un identificador de navegador con formato fijo
   (fb.1.<creación>.<aleatorio>) que el píxel se inventa igual. Generándolo
   nosotros conseguimos la misma señal sin meter el script de Meta en la
   página — menos peso, menos terceros.

   CONSENTIMIENTO
   Nada se escribe hasta que el usuario acepta en el banner. Si llega con
   fbclid y todavía no ha decidido, el valor se queda EN MEMORIA (no es
   almacenamiento) y solo baja a cookie si acepta. Si rechaza, se descarta.
   ────────────────────────────────────────────── */

import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { getConsent, getServerConsent, subscribeConsent } from "@/lib/consent";

const COOKIE_DAYS = 90; // ventana de atribución de Meta
const ROOT_DOMAIN = "totalgains.es";

/* fbclid capturado antes de que hubiera decisión de cookies. Módulo, no
   estado: sobrevive a los re-render del banner sin volver a leer la URL. */
let pendingClickId = null;

function readCookie(name) {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name, value) {
    const expires = new Date(Date.now() + COOKIE_DAYS * 864e5).toUTCString();
    // El dominio solo se fija en producción: en localhost o en un preview de
    // Vercel un domain= ajeno hace que el navegador tire la cookie en silencio.
    const host = window.location.hostname;
    const domain = host === ROOT_DOMAIN || host.endsWith(`.${ROOT_DOMAIN}`)
        ? `; domain=.${ROOT_DOMAIN}`
        : "";
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/${domain}; SameSite=Lax`;
}

/* Formato exacto que exige Meta: fb.<índice de subdominio>.<ms>.<valor>.
   El índice es 1 para totalgains.es (sería 2 si sirviéramos en www.). */
function buildFbc(clickId) {
    return `fb.1.${Date.now()}.${clickId}`;
}

function buildFbp() {
    const random = Math.floor(Math.random() * 1e10);
    return `fb.1.${Date.now()}.${random}`;
}

export default function MetaClickId() {
    const consent = useSyncExternalStore(subscribeConsent, getConsent, getServerConsent);

    // Lee el fbclid de la URL de entrada cuanto antes, decida lo que decida
    // luego el usuario. Leer un parámetro de la propia URL no es almacenar.
    useEffect(() => {
        try {
            const fromUrl = new URLSearchParams(window.location.search).get("fbclid");
            if (fromUrl) pendingClickId = fromUrl;
        } catch {
            /* URL rara: sin click id, el email hasheado sigue funcionando */
        }
    }, []);

    useEffect(() => {
        if (consent !== "accepted") {
            if (consent === "rejected") pendingClickId = null;
            return;
        }
        try {
            // _fbc: solo si venimos de un clic en anuncio. Un fbclid nuevo pisa
            // al viejo a propósito — el último anuncio es el que trajo la visita.
            if (pendingClickId) {
                writeCookie("_fbc", buildFbc(pendingClickId));
                pendingClickId = null;
            }
            // _fbp: identificador de navegador. Se crea UNA vez y no se toca
            // más; regenerarlo en cada visita rompería el hilo entre sesiones.
            if (!readCookie("_fbp")) {
                writeCookie("_fbp", buildFbp());
            }
        } catch {
            /* cookies bloqueadas: seguimos sin ellas, no es un error */
        }
    }, [consent]);

    return null;
}
