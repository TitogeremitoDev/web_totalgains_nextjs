import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";
import { getAlternativaFaqs } from "@/data/alternativasFaqs";
import { softwareApplicationNode , organizationNode } from "@/data/productSchema";

export const metadata = {
  title: "Alternativa a Dudyfit para Entrenadores",
  description:
    "Alternativa a Dudyfit en español: TotalGains con IA de rutinas, app marca blanca y +240.000 alimentos. Plan Gratuito 5 atletas o prueba 14 días sin tarjeta.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/dudyfit/",
  },
  openGraph: {
    title: "TotalGains vs Dudyfit — La Mejor Alternativa para Entrenadores",
    description:
      "Tabla comparativa completa: IA integrada, precios, soporte y funcionalidades. Migra desde Dudyfit gratis.",
    url: "https://totalgains.es/alternativas/dudyfit/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

export default function AlternativaDudyfit() {
  const faqs = getAlternativaFaqs("dudyfit", "Dudyfit");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Valoración real de Trustpilot (la misma que muestra el badge de
      // la página): hace la página elegible para estrellas en la SERP.
      softwareApplicationNode({ description: "TotalGains, alternativa en español a Dudyfit para entrenadores personales: IA de rutinas y dietas, app marca blanca incluida en todos los planes y soporte en español." }),
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
          { "@type": "ListItem", position: 3, name: "Alternativa a Dudyfit", item: "https://totalgains.es/alternativas/dudyfit/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaCompetidoresContent defaultCompetitor="dudyfit" />
    </>
  );
}
