import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a Harbiz para Entrenadores Personales",
  description:
    "Compara TotalGains con Harbiz. Sin tarifas ocultas por volumen de clientes, IA integrada, app marca blanca y soporte español VIP. Migra gratis en 5 minutos.",
  keywords: [
    "alternativa a Harbiz",
    "Harbiz alternativa",
    "Harbiz vs TotalGains",
    "software entrenadores mejor que Harbiz",
    "app entrenador personal Harbiz",
  ],
  alternates: {
    canonical: "https://totalgains.es/alternativas/harbiz/",
  },
  openGraph: {
    title: "TotalGains vs Harbiz — ¿Cuál es mejor para entrenadores?",
    description:
      "Tabla comparativa: precios sin penalización, IA, marca blanca y más. Migra gratis.",
    url: "https://totalgains.es/alternativas/harbiz/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlternativaHarbiz() {
  return <AlternativaCompetidoresContent defaultCompetitor="harbiz" />;
}
