import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";
import { getAlternativaFaqs } from "@/data/alternativasFaqs";
import { softwareApplicationNode } from "@/data/productSchema";

export const metadata = {
  title: "Alternativa a TrueCoach en España",
  description:
    "Alternativa a TrueCoach en español: TotalGains con app marca blanca, +240.000 alimentos y soporte nativo. Plan Gratuito 5 atletas o prueba 14 días sin tarjeta.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/truecoach/",
  },
  openGraph: {
    title: "TotalGains vs TrueCoach — La Alternativa en Español para Entrenadores",
    description:
      "Compara TrueCoach con TotalGains. Soporte nativo en español, base de alimentos en español y app de marca blanca incluida.",
    url: "https://totalgains.es/alternativas/truecoach/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

export default function AlternativaTrueCoach() {
  const faqs = getAlternativaFaqs("truecoach", "TrueCoach");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Valoración real de Trustpilot (la misma que muestra el badge de
      // la página): hace la página elegible para estrellas en la SERP.
      softwareApplicationNode({ description: "TotalGains, alternativa en español a TrueCoach para entrenadores personales: IA de rutinas y dietas, app marca blanca incluida en todos los planes y soporte en español." }),
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
          { "@type": "ListItem", position: 3, name: "Alternativa a TrueCoach", item: "https://totalgains.es/alternativas/truecoach/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaCompetidoresContent defaultCompetitor="truecoach" />
    </>
  );
}
