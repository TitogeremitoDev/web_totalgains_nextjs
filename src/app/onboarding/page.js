import OnboardingContent from "@/components/OnboardingContent";

/* ──────────────────────────────────────────────
   /onboarding — SERVER COMPONENT
   SEO Metadata para conversión de leads
   ────────────────────────────────────────────── */
export const metadata = {
  title: "Empieza Gratis 14 Días",
  description:
    "Crea tu cuenta de TotalGains en menos de 2 minutos. Sin tarjeta. Panel profesional para gestionar atletas, rutinas con IA y seguimiento.",
  alternates: {
    canonical: "https://totalgains.es/onboarding/",
  },
  openGraph: {
    title: "Empieza Gratis con TotalGains — Tu Software Fitness B2B",
    description:
      "Configura tu entorno profesional en 3 pasos. Sin tarjeta de crédito, sin compromiso.",
    url: "https://totalgains.es/onboarding/",
    /* ⚠️ `images` va repetido AQUÍ a propósito. Next NO fusiona este openGraph
       con el del layout raíz: lo sustituye entero, así que omitir la clave no
       hereda la imagen, la borra. Sin esto, la página de registro —justo la que
       se pega en WhatsApp e Instagram— se compartía sin vista previa. */
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains — Software para Entrenadores Personales" }],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Onboarding() {
  return <OnboardingContent />;
}
