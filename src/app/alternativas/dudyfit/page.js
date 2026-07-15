import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a Dudyfit para Entrenadores",
  description:
    "Alternativa a Dudyfit en español: TotalGains con IA de rutinas, app marca blanca y +240.000 alimentos. Prueba gratis 14 días sin tarjeta.",
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
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿TotalGains tiene app de marca blanca a diferencia de Dudyfit?", acceptedAnswer: { "@type": "Answer", text: "Sí. Tus clientes descargan una app con tu nombre, logo y colores. Con Dudyfit todos usan la app genérica sin personalización." } },
          { "@type": "Question", name: "¿TotalGains tiene recordatorios automáticos de cobro a diferencia de Dudyfit?", acceptedAnswer: { "@type": "Answer", text: "Sí. El sistema avisa al cliente en su app cuando toca renovar, con segunda vuelta de win-back si no responde en 48h. El cobro efectivo lo mantienes por tu canal habitual (transferencia, Bizum, TPV). En Dudyfit el seguimiento es manual o muy limitado." } },
          { "@type": "Question", name: "¿Por qué TotalGains es mejor alternativa a Dudyfit para escalar?", acceptedAnswer: { "@type": "Answer", text: "TotalGains tiene IA para rutinas y dietas, app de marca blanca, recordatorios automáticos al cliente y sistema anti-abandono. Dudyfit es básico sin IA ni automatización real." } },
          { "@type": "Question", name: "¿La base de alimentos de TotalGains es mejor que la de Dudyfit?", acceptedAnswer: { "@type": "Answer", text: "+240.000 alimentos validados en español con generador IA. Sin comparación posible con Dudyfit." } },
        ],
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
