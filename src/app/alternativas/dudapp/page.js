import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a Dudapp para Entrenadores Personales",
  description:
    "Compara TotalGains con Dudapp. Servidores globales sin caídas, sistema financiero automático, app marca blanca con tu branding y IA integrada. Migra gratis.",
  keywords: [
    "alternativa a Dudapp",
    "Dudapp alternativa",
    "Dudapp vs TotalGains",
    "software entrenadores mejor que Dudapp",
    "app entrenador personal Dudapp",
  ],
  alternates: {
    canonical: "https://totalgains.es/alternativas/dudapp/",
  },
  openGraph: {
    title: "TotalGains vs Dudapp — ¿Cuál es mejor para entrenadores?",
    description:
      "Tabla comparativa: rendimiento, pagos automáticos, app marca blanca. Migra gratis.",
    url: "https://totalgains.es/alternativas/dudapp/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlternativaDudapp() {
  return <AlternativaCompetidoresContent defaultCompetitor="dudapp" />;
}
