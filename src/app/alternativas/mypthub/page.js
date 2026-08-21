import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";
import { getAlternativaFaqs } from "@/data/alternativasFaqs";
import { softwareApplicationNode , organizationNode } from "@/data/productSchema";

export const metadata = {
  title: "Alternativa a MyPT Hub para Entrenadores",
  description:
    "Compara TotalGains con MyPT Hub. Interfaz intuitiva sin curva de aprendizaje, IA para rutinas y dietas, app marca blanca nativa. Migra gratis en 5 minutos.",
  keywords: [
    "alternativa a MyPT Hub",
    "MyPT Hub alternativa",
    "MyPT Hub vs TotalGains",
    "software entrenadores mejor que MyPT Hub",
    "app entrenador personal MyPTHub",
  ],
  alternates: {
    canonical: "https://totalgains.es/alternativas/mypthub/",
  },
  openGraph: {
    title: "TotalGains vs MyPT Hub — ¿Cuál es mejor para entrenadores?",
    description:
      "Tabla comparativa: UX intuitiva, IA integrada, soporte español. Migra gratis.",
    url: "https://totalgains.es/alternativas/mypthub/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlternativaMyPTHub() {
  const faqs = getAlternativaFaqs("mypthub", "MyPT Hub");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Valoración real de Trustpilot (la misma que muestra el badge de
      // la página): hace la página elegible para estrellas en la SERP.
      softwareApplicationNode({ description: "TotalGains, alternativa en español a MyPT Hub para entrenadores personales: IA de rutinas y dietas, app marca blanca incluida en todos los planes y soporte en español." }),
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
          { "@type": "ListItem", position: 3, name: "Alternativa a MyPT Hub", item: "https://totalgains.es/alternativas/mypthub/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaCompetidoresContent defaultCompetitor="mypthub" />
    </>
  );
}
