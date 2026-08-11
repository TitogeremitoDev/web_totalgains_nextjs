/* ──────────────────────────────────────────────────────────────
   Nodo SoftwareApplication reutilizable para el schema de páginas.

   ⚠️ La valoración marcada aquí DEBE ser la misma que ve el usuario
   en la página (badge de TrustpilotBadge). Google exige que el
   aggregateRating marcado sea visible; si dejan de coincidir, se
   pierde el rich result. Por eso ambos leen de TRUSTPILOT.
   ────────────────────────────────────────────────────────────── */

/** TrustScore público en https://es.trustpilot.com/review/totalgains.es */
export const TRUSTPILOT = {
    score: 4.4,
    reviews: 12,
    url: "https://es.trustpilot.com/review/totalgains.es",
    verificado: "2026-08-11",
};

/** Planes de coach autónomo. Precios con IVA incluido. Escalan por ATLETAS. */
export const PLANES_COACH = [
    { id: "starter", name: "TotalGains Starter", price: "29.90", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" },
    { id: "pro", name: "TotalGains Pro", price: "89.90", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" },
    { id: "unlimited", name: "TotalGains Unlimited", price: "149.90", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" },
];

/* ⚠️ 149,90 € (coach Unlimited) y 149 € (Gym Starter) se parecen pero NO son lo
   mismo: el de coach escala por ATLETAS de un entrenador, el de gimnasio por
   SOCIOS ACTIVOS del centro con coaches ilimitados. Siempre que se enseñe un
   precio hay que enseñar su unidad al lado, o el visitante lee mal la tabla. */

/** Planes de gimnasio. Precios con IVA incluido. Escalan por SOCIOS ACTIVOS.
 *  `price` es la mensualidad; la tarifa anual son 10 mensualidades (2 meses
 *  gratis, misma regla que los planes de coach) y Pricing.jsx la calcula sola:
 *  149 → 1.490 · 199 → 1.990 · 249 → 2.490. */
export const PLANES_GYM = [
    { id: "gym-starter", name: "TotalGains Gym Starter", price: "149", description: "Hasta 100 socios activos, coaches ilimitados, clases con reserva y app marca blanca del centro" },
    { id: "gym-pro", name: "TotalGains Gym Pro", price: "199", description: "De 100 a 200 socios activos, coaches ilimitados y onboarding asistido prioritario" },
    { id: "gym-elite", name: "TotalGains Gym Elite", price: "249", description: "Más de 200 socios activos, coaches ilimitados y soporte VIP en español" },
];

/**
 * Nodo SoftwareApplication con oferta y valoración.
 * @param {{description?: string, id?: string}} opts
 */
export function softwareApplicationNode({ description, id = "https://totalgains.es/#software" } = {}) {
    return {
        "@type": "SoftwareApplication",
        "@id": id,
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "HealthApplication",
        operatingSystem: "Web, iOS, Android",
        inLanguage: "es",
        url: "https://totalgains.es",
        image: "https://totalgains.es/og-image.jpg",
        description:
            description ||
            "Software para entrenadores personales en español: gestión de atletas, rutinas y dietas con IA, app marca blanca incluida en todos los planes y base de +240.000 alimentos.",
        offers: {
            "@type": "AggregateOffer",
            lowPrice: 29.9,
            highPrice: 149.9,
            priceCurrency: "EUR",
            offerCount: PLANES_COACH.length,
            availability: "https://schema.org/InStock",
            url: "https://totalgains.es/onboarding/",
            offers: PLANES_COACH.map((p) => ({
                "@type": "Offer",
                name: p.name,
                price: p.price,
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                url: `https://totalgains.es/onboarding/?plan=${p.id}`,
                description: p.description,
            })),
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(TRUSTPILOT.score),
            bestRating: "5",
            worstRating: "1",
            reviewCount: String(TRUSTPILOT.reviews),
        },
    };
}
