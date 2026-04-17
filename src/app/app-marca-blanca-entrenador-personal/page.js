import LandingPageTemplate from "@/components/LandingPageTemplate";
import { Palette, Smartphone, Zap, Star, Shield, Users } from "lucide-react";

export const metadata = {
  title: "App Marca Blanca para Entrenadores Personales con IA",
  description:
    "Ofrece a tus clientes una app de fitness con tu nombre, colores y logo. Branding generado por IA en un clic. Sin programar, sin costes extra. Prueba gratis 14 días.",
  alternates: { canonical: "https://totalgains.es/app-marca-blanca-entrenador-personal/" },
  openGraph: {
    title: "App Marca Blanca para Entrenadores Personales | TotalGains",
    description: "Tu propia app de fitness con tu branding. Colores, logo y temas visuales generados por IA en un clic.",
    url: "https://totalgains.es/app-marca-blanca-entrenador-personal/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  {
    icon: <Palette size={22} />,
    title: "Branding completo en un clic",
    desc: "Inyecta tu logo, colores corporativos y nombre en toda la app. La IA genera los temas visuales automáticamente — no necesitas diseñador ni programador.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "App nativa iOS y Android con tu marca",
    desc: "Tus clientes descargan una app con tu identidad en App Store y Google Play. Experiencia 100% profesional desde el primer día.",
  },
  {
    icon: <Star size={22} />,
    title: "Diferenciación real frente a la competencia",
    desc: "Mientras otros entrenadores mandan a sus clientes a apps genéricas, tú ofreces tu propia plataforma. Eso se percibe y se cobra más caro.",
  },
  {
    icon: <Zap size={22} />,
    title: "Configuración en menos de 1 hora",
    desc: "Sin reuniones con agencias, sin meses de desarrollo, sin presupuestos de 5 cifras. Subes tu logo, eliges tus colores y la app está lista.",
  },
  {
    icon: <Shield size={22} />,
    title: "Todos los módulos bajo tu marca",
    desc: "Rutinas, dietas, seguimiento, pagos y chat — todo bajo tu nombre. Tus clientes interactúan con tu marca en cada pantalla, nunca con TotalGains.",
  },
  {
    icon: <Users size={22} />,
    title: "Fidelización automática por percepción de valor",
    desc: "Una app de marca propia aumenta la retención. El cliente siente que usa un producto exclusivo de su entrenador, no una herramienta genérica.",
  },
];

const useCases = [
  "Entrenadores personales que quieren profesionalizar su imagen sin invertir en desarrollo",
  "Coaches con marca personal consolidada que necesitan coherencia visual en todos los canales",
  "Preparadores físicos que compiten con grandes plataformas y quieren diferenciarse",
  "Entrenadores que quieren justificar precios premium con una experiencia de cliente superior",
  "Profesionales que usan apps de terceros y quieren que sus clientes usen SU app, no la de otro",
];

const faqs = [
  {
    q: "¿Mi app aparece en App Store y Google Play con mi nombre?",
    a: "Sí. La app que descargan tus clientes lleva tu marca. No aparece el nombre de TotalGains en ningún lugar visible para el cliente.",
  },
  {
    q: "¿Necesito contratar a un diseñador para configurar el branding?",
    a: "No. El sistema de branding con IA genera los temas visuales a partir de tu logo y color principal. En la mayoría de los casos, el resultado está listo sin tocar nada más.",
  },
  {
    q: "¿Puedo cambiar los colores o el logo después de configurarlo?",
    a: "Sí, en cualquier momento. Los cambios de branding se aplican en tiempo real en toda la app sin necesidad de actualización en las tiendas.",
  },
  {
    q: "¿Tiene coste adicional la funcionalidad de marca blanca?",
    a: "No. El branding está incluido en todos los planes de TotalGains sin coste extra. No hay módulos separados ni tarifas de configuración.",
  },
];

export default function AppMarcaBlanca() {
  return (
    <LandingPageTemplate
      badge="App Marca Blanca"
      h1="Tu Propia App de Fitness con tu Marca y Branding IA"
      subtitle="Ofrece a tus clientes una experiencia 100% tuya: tu nombre, tus colores, tu logo. La IA genera el branding completo en un clic — sin programar, sin diseñador, sin coste extra."
      features={features}
      useCases={useCases}
      ctaText="Prueba gratis 14 días"
      ctaLocation="lp_marca_blanca"
      faqs={faqs}
    />
  );
}
