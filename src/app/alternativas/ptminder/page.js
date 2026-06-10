import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

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
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿TotalGains tiene IA integrada a diferencia de PTminder?", acceptedAnswer: { "@type": "Answer", text: "Sí. Genera rutinas y dietas con IA usando tu propia base de datos. PTminder no tiene generación de IA propia." } },
          { "@type": "Question", name: "¿TotalGains incluye nutrición sin integraciones como PTminder?", acceptedAnswer: { "@type": "Answer", text: "+240.000 alimentos en español y generador IA incluidos en todos los planes. Sin integraciones de terceros ni coste adicional." } },
          { "@type": "Question", name: "¿Por qué TotalGains es mejor alternativa a PTminder?", acceptedAnswer: { "@type": "Answer", text: "IA nativa, app de marca blanca, automatización y soporte en español. PTminder tiene interfaz anticuada, soporte lento en inglés y módulos separados que encarecen el precio." } },
          { "@type": "Question", name: "¿Los módulos de TotalGains están incluidos sin coste extra?", acceptedAnswer: { "@type": "Answer", text: "Sí. Gestión de clientes, rutinas, nutrición, pagos, app de marca blanca y seguimiento — todo incluido en el plan. Sin módulos separados." } },
        ],
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
