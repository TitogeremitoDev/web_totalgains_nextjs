import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a Dudapp para Entrenadores",
  description:
    "Compara TotalGains con Dudapp. Servidores globales sin caídas, sistema financiero automático, app marca blanca con tu branding y IA integrada. Migra gratis.",
  keywords: [
    "alternativa a Dudapp",
    "Dudapp alternativa",
    "Dudapp vs TotalGains",
    "software entrenadores mejor que Dudapp",
    "app entrenador personal Dudapp",
  ],
  alternates: {
    canonical: "https://totalgains.es/alternativas/dudapp/",
  },
  openGraph: {
    title: "TotalGains vs Dudapp — ¿Cuál es mejor para entrenadores?",
    description:
      "Tabla comparativa: rendimiento, pagos automáticos, app marca blanca. Migra gratis.",
    url: "https://totalgains.es/alternativas/dudapp/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlternativaDudapp() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿TotalGains es una alternativa a Dudapp con IA integrada?", acceptedAnswer: { "@type": "Answer", text: "Sí. Genera rutinas y dietas con IA usando tu propia biblioteca de ejercicios y alimentos sin inventar contenido. Dudapp no tiene IA propia." } },
          { "@type": "Question", name: "¿Puedo cobrar automáticamente a mis clientes con TotalGains, a diferencia de Dudapp?", acceptedAnswer: { "@type": "Answer", text: "Sí. Suscripciones recurrentes con Stripe, bloqueo por impago y registro de cobros. Sin perseguir pagos por WhatsApp." } },
          { "@type": "Question", name: "¿Por qué TotalGains es mejor alternativa a Dudapp para escalar mi negocio?", acceptedAnswer: { "@type": "Answer", text: "Dudapp es una herramienta básica. TotalGains es SaaS B2B completo: gestión de clientes, IA, cobros automáticos, app de marca blanca y sistema anti-abandono." } },
          { "@type": "Question", name: "¿Mis clientes tendrán una app con mi marca en TotalGains?", acceptedAnswer: { "@type": "Answer", text: "Sí. App con tu nombre, logo y colores en iOS y Android. Con Dudapp, tus clientes usan la app de Dudapp, no la tuya." } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Alternativas", item: "https://totalgains.es/alternativas/" },
          { "@type": "ListItem", position: 3, name: "Alternativa a Dudapp", item: "https://totalgains.es/alternativas/dudapp/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaCompetidoresContent defaultCompetitor="dudapp" />
    </>
  );
}
