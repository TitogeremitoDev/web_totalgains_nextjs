"use client";

import { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/components/Analytics";

/**
 * Dispara UNA vez `lead_confirmed` con el origen del lead (?de=contacto,
 * demo-entrenador, demo-gimnasio, demo-nutricionista...). El origen viaja por
 * query para no depender de estado en memoria; el email NUNCA va en la URL.
 *
 * El page_view de /gracias/ lo emite Analytics solo (gtag config por pathname):
 * ese es el objetivo de destino limpio para GA4. Este evento añade el desglose.
 */
function Tracker() {
    const params = useSearchParams();
    const fired = useRef(false);

    useEffect(() => {
        if (fired.current) return;
        fired.current = true;
        trackEvent("lead_confirmed", { origen: params.get("de") || "directo" });
    }, [params]);

    return null;
}

// useSearchParams exige Suspense en el export estático: el HTML prerenderizado
// sale con el fallback (nada) y el cliente hidrata y lee la query.
export default function GraciasTracker() {
    return (
        <Suspense fallback={null}>
            <Tracker />
        </Suspense>
    );
}
