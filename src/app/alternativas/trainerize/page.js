import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

/* ──────────────────────────────────────────────
   /alternativas/trainerize — SERVER COMPONENT
   SEO Metadata para posicionar vs competencia
   ────────────────────────────────────────────── */
export const metadata = {
  title: "Alternativa a Trainerize, Harbiz, MyPT Hub y Dudapp",
  description:
    "Compara TotalGains con Trainerize, Harbiz, MyPT Hub y Dudapp. Descubre por qué los entrenadores personales en España eligen TotalGains: soporte en español, IA integrada, precios sin sorpresas y app marca blanca.",
  alternates: {
    canonical: "https://totalgains.es/alternativas/trainerize/",
  },
  openGraph: {
    title: "TotalGains vs Trainerize — ¿Cuál es mejor para entrenadores?",
    description:
      "Tabla comparativa completa: soporte, velocidad, IA, precios y más. Migra gratis en 5 minutos.",
    url: "https://totalgains.es/alternativas/trainerize/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

export default function AlternativaCompetidores() {
  return <AlternativaCompetidoresContent />;
}
