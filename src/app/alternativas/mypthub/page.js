import AlternativaCompetidoresContent from "@/components/AlternativaCompetidoresContent";

export const metadata = {
  title: "Alternativa a MyPT Hub para Entrenadores Personales",
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
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlternativaMyPTHub() {
  return <AlternativaCompetidoresContent defaultCompetitor="mypthub" />;
}
