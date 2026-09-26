/* ──────────────────────────────────────────────
   CONSENTIMIENTO DE COOKIES — store mínimo compartido
   entre el banner (CookieConsent) y los scripts de
   analítica (Analytics). Sin dependencias externas.

   Valores posibles en localStorage:
     'accepted'  → aceptó analítica (GA4 + Clarity) y medición de campañas
                   (tg_acq, _fbc, _fbp)
     'rejected'  → la rechazó (no se carga ni se escribe nada)
     null        → todavía no ha decidido → mostrar banner

   ⚠️ LA CLAVE LLEVA VERSIÓN A PROPÓSITO. El consentimiento vale para los fines
   que decía el banner CUANDO se dio. El 26-sep-2026 el banner pasó a incluir
   «medición de campañas» (la cookie tg_acq, y _fbc/_fbp, que se escribían
   desde el 11-ago sin nombrarse), así que se pasó a `_v2`: quien aceptó con el
   texto viejo vuelve a ver el banner una vez. Si se añade otro FIN, se sube la
   versión; si solo cambia la redacción sin fines nuevos, no.
   Coste asumido: GA4 pierde de vista a los que ya habían aceptado hasta que
   vuelvan a aceptar. Solo lee esta clave este fichero (comprobado en la app).
   ────────────────────────────────────────────── */

export const CONSENT_KEY = 'tg_cookie_consent_v2';
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
