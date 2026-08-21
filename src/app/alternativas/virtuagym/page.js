import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";
import { getAlternativaFaqs } from "@/data/alternativasFaqs";
import { softwareApplicationNode , organizationNode } from "@/data/productSchema";

export const metadata = {
  title: { absolute: "Alternativa a Virtuagym: TotalGains desde 29,90 €/mes" },
  description:
    "Virtuagym está diseñado para gimnasios y cobra por atleta. TotalGains es la alternativa para el coach autónomo desde 29,90 €/mes con IVA. Migración en español.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/virtuagym/",
  },
  openGraph: {
    title: "Alternativa a Virtuagym: TotalGains desde 29,90 €/mes",
    description:
      "Virtuagym cobra por atleta y está pensado para gimnasios. TotalGains es la alternativa para el coach autónomo desde 29,90 €/mes con IVA.",
    url: "https://totalgains.es/alternativas/virtuagym/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

export default function AlternativaVirtuagym() {
  const faqs = getAlternativaFaqs("virtuagym", "Virtuagym");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Valoración real de Trustpilot (la misma que muestra el badge de
      // la página): hace la página elegible para estrellas en la SERP.
      softwareApplicationNode({ description: "TotalGains, alternativa en español a Virtuagym para entrenadores personales: IA de rutinas y dietas, app marca blanca incluida en todos los planes y soporte en español." }),
      organizationNode(),
      {
        "@type": "FAQPage",
        // Generado desde la MISMA fuente que renderiza la página:
        // el schema no puede declarar preguntas que el usuario no ve.
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
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
