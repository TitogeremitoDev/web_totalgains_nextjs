import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a TrueCoach en España",
  description:
    "¿Buscas una alternativa a TrueCoach en español? TotalGains ofrece app marca blanca, +240.000 alimentos, soporte en español y precios sin sorpresas. Prueba gratis 14 días.",
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
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿TotalGains tiene soporte en español a diferencia de TrueCoach?", acceptedAnswer: { "@type": "Answer", text: "Sí. Soporte nativo en español con respuesta en menos de 24 horas. TrueCoach solo en inglés." } },
          { "@type": "Question", name: "¿La base de alimentos de TotalGains es mejor que la de TrueCoach?", acceptedAnswer: { "@type": "Answer", text: "+240.000 alimentos validados en español. TrueCoach usa la base USDA en inglés, sin adaptar al mercado hispanohablante." } },
          { "@type": "Question", name: "¿Por qué TotalGains es mejor alternativa a TrueCoach para entrenadores en España?", acceptedAnswer: { "@type": "Answer", text: "TotalGains está diseñado para España: soporte en español, precios en euros con IVA incluido, base de alimentos local y app de marca blanca. TrueCoach no se adapta al entrenador personal en España." } },
          { "@type": "Question", name: "¿TotalGains incluye app de marca blanca a diferencia de TrueCoach?", acceptedAnswer: { "@type": "Answer", text: "Sí. Desde el primer plan de pago, tu app tiene tu logo y colores en un clic. TrueCoach no tiene app de marca blanca." } },
        ],
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
