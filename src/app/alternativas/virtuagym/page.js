import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a Virtuagym para Entrenadores",
  description:
    "Virtuagym es para gimnasios, TotalGains es para ti. Más simple, más barato y 100% diseñado para entrenadores personales online. Prueba gratis sin tarjeta.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/virtuagym/",
  },
  openGraph: {
    title: "TotalGains vs Virtuagym — Diseñado para Entrenadores, no para Gimnasios",
    description:
      "Deja de pagar por funciones de gimnasio que no usas. TotalGains es la alternativa a Virtuagym pensada para el entrenador personal online.",
    url: "https://totalgains.es/alternativas/virtuagym/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

export default function AlternativaVirtuagym() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿TotalGains está diseñado para entrenadores personales a diferencia de Virtuagym?", acceptedAnswer: { "@type": "Answer", text: "Sí. 100% para entrenadores personales autónomos. Virtuagym está pensado para gimnasios y clubs — pagas por funciones que nunca usarás." } },
          { "@type": "Question", name: "¿TotalGains es más barato que Virtuagym para entrenadores?", acceptedAnswer: { "@type": "Answer", text: "Sí. Desde 29,90€/mes con IVA incluido, sin sorpresas. Virtuagym tiene precios empresariales diseñados para instalaciones, no para autónomos." } },
          { "@type": "Question", name: "¿Por qué TotalGains es mejor alternativa a Virtuagym para entrenadores personales online?", acceptedAnswer: { "@type": "Answer", text: "Intuitivo desde el primer día, IA nativa para rutinas y dietas, app de marca blanca y soporte en español. Virtuagym tiene alta complejidad y siempre muestra su propio logo a tus clientes." } },
          { "@type": "Question", name: "¿Con TotalGains mis clientes verán mi marca y no la de Virtuagym?", acceptedAnswer: { "@type": "Answer", text: "Sí. La app que descargan lleva tu nombre, logo y colores. Con Virtuagym el logo de Virtuagym aparece siempre." } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Alternativas", item: "https://totalgains.es/alternativas/" },
          { "@type": "ListItem", position: 3, name: "Alternativa a Virtuagym", item: "https://totalgains.es/alternativas/virtuagym/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaCompetidoresContent defaultCompetitor="virtuagym" />
    </>
  );
}
