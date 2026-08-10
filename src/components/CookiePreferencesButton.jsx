"use client";

import { clearConsent } from '@/lib/consent';

/* Botón para retirar/cambiar el consentimiento desde la Política de Privacidad:
   borra la decisión guardada y vuelve a mostrar el banner. */
export default function CookiePreferencesButton() {
    return (
        <button
            type="button"
            onClick={clearConsent}
            style={{
                font: 'inherit',
                color: 'inherit',
                background: 'none',
                border: 'none',
                padding: 0,
                textDecoration: 'underline',
                textUnderlineOffset: 3,
                cursor: 'pointer',
            }}
        >
            cambiar tus preferencias de cookies
        </button>
    );
}
