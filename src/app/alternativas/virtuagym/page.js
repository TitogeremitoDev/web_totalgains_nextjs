import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a Virtuagym: TotalGains desde 29,90 €/mes (2026)",
  description:
    "Virtuagym está diseñado para gimnasios y cobra por atleta. TotalGains es la alternativa para el entrenador personal online desde 29,90 €/mes con IVA. Migración en español.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/virtuagym/",
  },
  openGraph: {
    title: "Alternativa a Virtuagym: TotalGains desde 29,90 €/mes (2026)",
    description:
      "Virtuagym cobra por atleta y está pensado para gimnasios. TotalGains es la alternativa para el coach autónomo desde 29,90 €/mes con IVA.",
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
