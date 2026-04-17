import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a PTminder para Entrenadores Personales",
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
  return <AlternativaCompetidoresContent defaultCompetitor="ptminder" />;
}
