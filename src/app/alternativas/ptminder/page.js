import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";
import { getAlternativaFaqs } from "@/data/alternativasFaqs";
import { softwareApplicationNode } from "@/data/productSchema";

export const metadata = {
  title: "Alternativa a PTminder para Entrenadores",
  description:
    "¿PTminder se queda corto? TotalGains es la alternativa con app nativa iOS y Android, +240.000 alimentos, soporte en español y app marca blanca. 14 días gratis.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/ptminder/",
  },
  openGraph: {
    title: "TotalGains vs PTminder — Alternativa con App Nativa y Soporte en Español",
    description:
      "Migra de PTminder a TotalGains. App nativa, base de alimentos completa y gestión integral de clientes desde 29,90€/mes.",
    url: "https://totalgains.es/alternativas/ptminder/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

export default function AlternativaPTminder() {
  const faqs = getAlternativaFaqs("ptminder", "PTminder");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Valoración real de Trustpilot (la misma que muestra el badge de
      // la página): hace la página elegible para estrellas en la SERP.
      softwareApplicationNode({ description: "TotalGains, alternativa en español a PTminder para entrenadores personales: IA de rutinas y dietas, app marca blanca incluida en todos los planes y soporte en español." }),
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
          { "@type": "ListItem", position: 3, name: "Alternativa a PTminder", item: "https://totalgains.es/alternativas/ptminder/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaCompetidoresContent defaultCompetitor="ptminder" />
    </>
  );
}
