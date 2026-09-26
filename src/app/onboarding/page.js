import OnboardingContent from "@/components/OnboardingContent";

/* ──────────────────────────────────────────────
   /onboarding — SERVER COMPONENT
   SEO Metadata para conversión de leads
   ────────────────────────────────────────────── */
/* ⚠️ El título decía «Empieza Gratis 14 Días» hasta el 26-sep-2026: se escapó
   del cambio de jerarquía de agosto (plan gratuito primero, prueba Pro después)
   que sí se hizo en la navbar, el hero, el CTA fijo y la plantilla. Es la
   página a la que llevan TODOS esos botones, y GA4 la registraba con ese
   título. */
export const metadata = {
  title: "Empieza gratis · 5 atletas sin tarjeta",
  description:
    "Crea tu cuenta de TotalGains en menos de 2 minutos. Plan gratuito permanente hasta 5 atletas, sin tarjeta y sin caducidad. Panel profesional para gestionar atletas, rutinas con IA y seguimiento.",
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
