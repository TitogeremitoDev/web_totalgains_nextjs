"use client";

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import {
    getConsent,
    getServerConsent,
    setConsent,
    subscribeConsent,
} from '@/lib/consent';
import './CookieConsent.css';

/* ──────────────────────────────────────────────
   BANNER DE COOKIES — LSSI art. 22.2 + RGPD
   Hasta que el usuario decide, Analytics NO inyecta
   ni GA4 ni Clarity. Rechazar es tan fácil como aceptar
   (requisito de la AEPD).
   ────────────────────────────────────────────── */
export default function CookieConsent() {
    // useSyncExternalStore evita el parpadeo y el mismatch de hidratación:
    // en el HTML estático el snapshot de servidor es null y no se pinta nada.
    const consent = useSyncExternalStore(subscribeConsent, getConsent, getServerConsent);

    if (consent) return null;

    return (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Consentimiento de cookies">
            <div className="cookie-banner-inner">
                <div className="cookie-banner-text">
                    <Cookie size={20} className="cookie-banner-icon" aria-hidden="true" />
                    <p>
                        Usamos cookies propias necesarias para que la web funcione y, solo si lo
                        autorizas, cookies de analítica (Google Analytics y Microsoft Clarity) para
                        entender cómo se usa el sitio y mejorarlo. Puedes cambiar de opinión cuando
                        quieras desde la{' '}
                        <Link href="/privacy/">Política de Privacidad</Link>.
                    </p>
                </div>
                <div className="cookie-banner-actions">
                    <button
                        type="button"
                        className="cookie-btn cookie-btn--ghost"
                        onClick={() => setConsent('rejected')}
                    >
                        Rechazar
                    </button>
                    <button
                        type="button"
                        className="cookie-btn cookie-btn--primary"
                        onClick={() => setConsent('accepted')}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
}
