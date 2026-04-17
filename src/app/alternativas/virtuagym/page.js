import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a Virtuagym para Entrenadores Personales Online",
  description:
    "Virtuagym es para gimnasios, TotalGains es para ti. Más simple, más barato y 100% diseñado para entrenadores personales online. Prueba gratis sin tarjeta.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/virtuagym/",
  },
  openGraph: {
    title: "TotalGains vs Virtuagym — Diseñado para Entrenadores, no para Gimnasios",
    description:
      "Deja de pagar por funciones de gimnasio que no usas. TotalGains es la alternativa a Virtuagym pensada para el entrenador personal online.",
    url: "https://totalgains.es/alternativas/virtuagym/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

export default function AlternativaVirtuagym() {
  return <AlternativaCompetidoresContent defaultCompetitor="virtuagym" />;
}
