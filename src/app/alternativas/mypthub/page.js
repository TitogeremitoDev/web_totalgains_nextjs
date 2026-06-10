import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

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
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Es difícil migrar desde MyPT Hub a TotalGains?", acceptedAnswer: { "@type": "Answer", text: "No. El equipo gestiona la migración sin fricción. El 95% de los atletas se adaptan en menos de 48 horas." } },
          { "@type": "Question", name: "¿TotalGains tiene la curva de aprendizaje de MyPT Hub?", acceptedAnswer: { "@type": "Answer", text: "No. Está diseñado para que un entrenador lo use desde el primer día sin manual. La mayoría operativos en menos de 1 hora." } },
          { "@type": "Question", name: "¿Por qué TotalGains es mejor alternativa a MyPT Hub para entrenadores en España?", acceptedAnswer: { "@type": "Answer", text: "TotalGains tiene IA nativa para rutinas y dietas, soporte en español 24h, app de marca blanca sin coste extra y sistema anti-abandono que MyPT Hub no tiene." } },
          { "@type": "Question", name: "¿Necesito integraciones externas para nutrición como con MyPT Hub?", acceptedAnswer: { "@type": "Answer", text: "+240.000 alimentos en español y generador IA incluidos. Sin MyFitnessPal, sin plugins, sin coste adicional." } },
        ],
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
