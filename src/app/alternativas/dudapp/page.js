import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";
import { getAlternativaFaqs } from "@/data/alternativasFaqs";
import { softwareApplicationNode , organizationNode } from "@/data/productSchema";

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
  const faqs = getAlternativaFaqs("dudapp", "Dudapp");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Valoración real de Trustpilot (la misma que muestra el badge de
      // la página): hace la página elegible para estrellas en la SERP.
      softwareApplicationNode({ description: "TotalGains, alternativa en español a Dudapp para entrenadores personales: IA de rutinas y dietas, app marca blanca incluida en todos los planes y soporte en español." }),
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
