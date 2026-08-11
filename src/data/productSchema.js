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

/** Planes de coach autónomo. Precios con IVA incluido. */
export const PLANES_COACH = [
    { id: "starter", name: "TotalGains Starter", price: "29.90", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" },
    { id: "pro", name: "TotalGains Pro", price: "89.90", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" },
    { id: "unlimited", name: "TotalGains Unlimited", price: "149.90", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" },
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
