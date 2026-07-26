import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

/* ──────────────────────────────────────────────
   /alternativas/trainerize — SERVER COMPONENT
   SEO Metadata para posicionar vs competencia
   ────────────────────────────────────────────── */
export const metadata = {
  title: "Alternativa a Trainerize 2026 en Español",
  description:
    "TotalGains 89,90€/mes con marca blanca incluida vs Trainerize Pro 50 (≈250 €/mes con IVA) o Pro 100 (≈352 €/mes). Soporte y migración en español.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/trainerize/",
  },
  openGraph: {
    title: "TotalGains vs Trainerize — ¿Cuál es mejor para entrenadores?",
    description:
      "Tabla comparativa completa: soporte, velocidad, IA, precios y más. Migra gratis en 5 minutos.",
    url: "https://totalgains.es/alternativas/trainerize/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

export default function AlternativaCompetidores() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "Alternativa a Trainerize en español para entrenadores personales: IA de rutinas y dietas con biblioteca propia, app marca blanca incluida en Pro, migración asistida y precios sin penalización por volumen.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/alternativas/trainerize/",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: 29.90,
          highPrice: 149.90,
          priceCurrency: "EUR",
          offerCount: 3,
          availability: "https://schema.org/InStock",
          url: "https://totalgains.es/onboarding/",
          image: "https://totalgains.es/og-image.jpg",
          offers: [
            { "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos con IA generativa incluida" },
            { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos con app marca blanca incluida" },
            { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados" },
          ],
        },
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Perderé los datos de mis clientes al migrar desde Trainerize?",
            acceptedAnswer: { "@type": "Answer", text: "En absoluto. Nuestro equipo (y nuestras herramientas de importación) se encargan de subir a tus atletas actuales sin que ellos sientan fricción." },
          },
          {
            "@type": "Question",
            name: "¿Cobráis comisiones extra por mis ventas?",
            acceptedAnswer: { "@type": "Answer", text: "Cero comisiones ocultas. Tú usas tu propia cuenta de Stripe o cobras por tu cuenta; nosotros solo somos tu tecnología SaaS B2B." },
          },
          {
            "@type": "Question",
            name: "Mis clientes están acostumbrados a Trainerize, ¿será difícil el cambio?",
            acceptedAnswer: { "@type": "Answer", text: "El 95% de los atletas prefieren nuestra interfaz más moderna, rápida y gamificada. El periodo de adaptación suele ser de menos de 48 horas." },
          },
          {
            "@type": "Question",
            name: "¿Por qué TotalGains es mejor alternativa a Trainerize para entrenadores en España?",
            acceptedAnswer: { "@type": "Answer", text: "TotalGains ofrece soporte nativo en español, IA que genera rutinas y dietas con tu propia base de datos, app de marca blanca, y precios sin penalización por volumen de atletas. A diferencia de Trainerize, está diseñado específicamente para el mercado hispanohablante." },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Alternativas", item: "https://totalgains.es/alternativas/" },
          { "@type": "ListItem", position: 3, name: "Alternativa a Trainerize", item: "https://totalgains.es/alternativas/trainerize/" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaCompetidoresContent />
    </>
  );
}
