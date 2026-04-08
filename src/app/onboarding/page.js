import OnboardingContent from "@/components/OnboardingContent";

/* ──────────────────────────────────────────────
   /onboarding — SERVER COMPONENT
   SEO Metadata para conversión de leads
   ────────────────────────────────────────────── */
export const metadata = {
  title: "Empieza Gratis 14 Días — Configura tu Entorno",
  description:
    "Crea tu cuenta de TotalGains en menos de 2 minutos. Sin tarjeta de crédito. Configura tu panel de control profesional para gestionar atletas, rutinas con IA y cobros.",
  alternates: {
    canonical: "https://totalgains.es/onboarding/",
  },
  openGraph: {
    title: "Empieza Gratis con TotalGains — Tu Software Fitness B2B",
    description:
      "Configura tu entorno profesional en 3 pasos. Sin tarjeta de crédito, sin compromiso.",
    url: "https://totalgains.es/onboarding/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Onboarding() {
  return <OnboardingContent />;
}
