/* ──────────────────────────────────────────────
   CONSENTIMIENTO DE COOKIES — store mínimo compartido
   entre el banner (CookieConsent) y los scripts de
   analítica (Analytics). Sin dependencias externas.

   Valores posibles en localStorage:
     'accepted'  → el usuario aceptó analítica (GA4 + Clarity)
     'rejected'  → el usuario la rechazó (no se carga nada)
     null        → todavía no ha decidido → mostrar banner
   ────────────────────────────────────────────── */

export const CONSENT_KEY = 'tg_cookie_consent';
const CONSENT_EVENT = 'tg-consent-change';

/** Lectura defensiva: Safari en modo privado puede lanzar al tocar localStorage. */
export function getConsent() {
    if (typeof window === 'undefined') return null;
    try {
        return window.localStorage.getItem(CONSENT_KEY);
    } catch {
        return null;
    }
}

export function setConsent(value) {
    try {
        window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
        /* sin persistencia (modo privado): la decisión vale solo para esta sesión */
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** Permite volver a mostrar el banner (enlace "cambiar preferencias"). */
export function clearConsent() {
    try {
        window.localStorage.removeItem(CONSENT_KEY);
    } catch {
        /* noop */
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function subscribeConsent(callback) {
    window.addEventListener(CONSENT_EVENT, callback);
    window.addEventListener('storage', callback);
    return () => {
        window.removeEventListener(CONSENT_EVENT, callback);
        window.removeEventListener('storage', callback);
    };
}

/** Durante el prerender no hay decisión: nunca se cargan scripts en el HTML estático. */
export function getServerConsent() {
    return null;
}
