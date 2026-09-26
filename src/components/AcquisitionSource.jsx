"use client";
/* ──────────────────────────────────────────────
   ORIGEN DE LA VISITA — de qué canal viene cada alta

   EL PROBLEMA QUE RESUELVE
   GA4 ve lo que pasa en esta web, pero la cuenta se crea en la app (/app/).
   El backend no sabía de dónde venía cada alta, así que nadie podía decir
   qué canal trae coaches que pagan: Google, un anuncio, ChatGPT, un QR…

   CÓMO VIAJA (mismo camino que MetaClickId, que ya funciona en producción)
   Esta página escribe la cookie `tg_acq` en el dominio. La pantalla de
   registro de /app/ —mismo dominio— la lee con document.cookie y la manda
   en el body del alta (TotalGains_App/src/lib/acquisition.ts). El backend
   la guarda en `User.acquisition`. No hace falta que la API lea cookies:
   va en el cuerpo, igual que _fbc/_fbp.

   QUÉ SE GUARDA
   Primera fuente NO directa: si alguien llega primero escribiendo la URL y
   días después por Google, cuenta Google. Una vez hay una fuente real, no se
   pisa. Solo el HOST del referrer y la RUTA de entrada, nunca la URL entera:
   una query puede llevar un email.

   CONSENTIMIENTO
   Idéntico a MetaClickId: nada se escribe hasta aceptar. Antes, el origen se
   queda en memoria del módulo; si rechaza, se descarta.
   ────────────────────────────────────────────── */

import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { getConsent, getServerConsent, subscribeConsent } from "@/lib/consent";

const COOKIE = "tg_acq";
const COOKIE_DAYS = 90;
const ROOT_DOMAIN = "totalgains.es";
const MAX = 80;

/* Hosts de asistentes de IA. GA4 los agrupa como «AI Assistant»; aquí igual,
   para que lo que ve el backend cuadre con lo que ve Analytics. */
const AI_HOSTS = [
    "chatgpt.com", "chat.openai.com", "perplexity.ai", "gemini.google.com",
    "copilot.microsoft.com", "claude.ai", "you.com", "chat.mistral.ai",
];
const SEARCH = [
    ["google.", "google"], ["bing.com", "bing"], ["duckduckgo.com", "duckduckgo"],
    ["yahoo.", "yahoo"], ["ecosia.org", "ecosia"], ["search.brave.com", "brave"],
];
const SOCIAL = [
    "facebook.com", "instagram.com", "t.co", "x.com", "twitter.com",
    "linkedin.com", "tiktok.com", "youtube.com", "whatsapp.com", "wa.me",
];

let pendingTouch = null;

const cut = (v) => (v == null ? "" : String(v).slice(0, MAX));
const endsWithHost = (host, h) => host === h || host.endsWith(`.${h}`);

function readCookie(name) {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name, value) {
    const expires = new Date(Date.now() + COOKIE_DAYS * 864e5).toUTCString();
    const host = window.location.hostname;
    const domain = host === ROOT_DOMAIN || host.endsWith(`.${ROOT_DOMAIN}`)
        ? `; domain=.${ROOT_DOMAIN}`
        : "";
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/${domain}; SameSite=Lax`;
}

/* Clasifica la visita de entrada. Orden: UTM explícito > id de clic de
   anuncio > referrer > directo. Devuelve siempre las mismas claves. */
function classify() {
    const p = new URLSearchParams(window.location.search);
    const landing = cut(window.location.pathname);
    let refHost = "";
    try {
        if (document.referrer) refHost = new URL(document.referrer).hostname.replace(/^www\./, "");
    } catch { /* referrer ilegible: se trata como directo */ }
    const own = refHost && (refHost === ROOT_DOMAIN || refHost.endsWith(`.${ROOT_DOMAIN}`));
    const base = { r: own ? "" : cut(refHost), l: landing, t: Date.now() };

    if (p.get("utm_source")) {
        return { ...base, s: cut(p.get("utm_source")), m: cut(p.get("utm_medium") || "(none)"), c: cut(p.get("utm_campaign")) };
    }
    if (p.get("fbclid")) return { ...base, s: "facebook", m: "paid", c: "" };
    if (p.get("gclid")) return { ...base, s: "google", m: "cpc", c: "" };
    if (refHost && !own) {
        if (AI_HOSTS.some((h) => endsWithHost(refHost, h))) return { ...base, s: cut(refHost), m: "ai-assistant", c: "" };
        const engine = SEARCH.find(([h]) => refHost.includes(h));
        if (engine) return { ...base, s: engine[1], m: "organic", c: "" };
        if (SOCIAL.some((h) => endsWithHost(refHost, h))) return { ...base, s: cut(refHost), m: "social", c: "" };
        return { ...base, s: cut(refHost), m: "referral", c: "" };
    }
    return { ...base, s: "(direct)", m: "(none)", c: "" };
}

const isDirect = (t) => !t || t.s === "(direct)";

export default function AcquisitionSource() {
    const consent = useSyncExternalStore(subscribeConsent, getConsent, getServerConsent);

    // Leer la URL y el referrer de entrada no es almacenar: se hace ya, antes
    // de que el usuario decida, porque al navegar se pierden.
    useEffect(() => {
        try { pendingTouch = classify(); } catch { pendingTouch = null; }
    }, []);

    useEffect(() => {
        if (consent !== "accepted") {
            if (consent === "rejected") pendingTouch = null;
            return;
        }
        try {
            if (!pendingTouch) return;
            let stored = null;
            try { stored = JSON.parse(readCookie(COOKIE) || "null"); } catch { stored = null; }
            // Primera fuente real: solo se escribe si no había nada, o si lo que
            // había era «directo» y ahora llega una fuente de verdad.
            if (!stored || (isDirect(stored) && !isDirect(pendingTouch))) {
                writeCookie(COOKIE, JSON.stringify(pendingTouch));
            }
            pendingTouch = null;
        } catch {
            /* cookies bloqueadas: el alta sale sin origen, no es un error */
        }
    }, [consent]);

    return null;
}
