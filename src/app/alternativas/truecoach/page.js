import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a TrueCoach para Entrenadores en España",
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
  return <AlternativaCompetidoresContent defaultCompetitor="truecoach" />;
}
