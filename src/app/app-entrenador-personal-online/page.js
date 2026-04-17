import LandingPageTemplate from "@/components/LandingPageTemplate";
import { Smartphone, Apple, Globe, Bell, MessageSquare, TrendingUp } from "lucide-react";

export const metadata = {
  title: "App para Entrenador Personal Online — iOS, Android y Web",
  description:
    "La app para entrenadores personales online disponible en iOS, Android y web. Tus clientes entrenan con tu propia app de marca blanca. Prueba gratis 14 días.",
  alternates: { canonical: "https://totalgains.es/app-entrenador-personal-online/" },
  openGraph: {
    title: "App para Entrenador Personal Online | TotalGains",
    description: "iOS, Android y web app. Tus clientes tienen su app con tu marca. Empieza gratis hoy.",
    url: "https://totalgains.es/app-entrenador-personal-online/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  { icon: <Smartphone size={22} />, title: "App nativa Android e iOS", desc: "Tus clientes descargan la app desde Google Play y App Store. Experiencia nativa, no un sitio web disfrazado." },
  { icon: <Apple size={22} />, title: "Marca blanca completa", desc: "Tu logo, tus colores y tu nombre en la app. Cuando tu cliente abre la aplicación, ve tu marca, no la nuestra." },
  { icon: <Globe size={22} />, title: "Panel web para el entrenador", desc: "Tú gestionas todo desde el navegador: creas rutinas, revisas progreso y gestionas pagos desde cualquier dispositivo." },
  { icon: <Bell size={22} />, title: "Notificaciones push automáticas", desc: "Tus clientes reciben avisos de entrenos, revisiones y mensajes directamente en su móvil." },
  { icon: <MessageSquare size={22} />, title: "Comunicación integrada", desc: "Feedback de vídeo, notas de progreso y mensajes directo dentro de la app. Sin salir al WhatsApp." },
  { icon: <TrendingUp size={22} />, title: "Progreso visible para el cliente", desc: "Gráficas de peso, medidas y cargas que motivan a tu cliente a seguir. Reducción drástica del abandono." },
];

const useCases = [
  "Entrenadores que trabajan 100% online con clientes en toda España o Latinoamérica",
  "Coaches que quieren dar una experiencia de app profesional a sus clientes",
  "Entrenadores que usan WhatsApp para enviar rutinas y quieren una solución mejor",
  "Profesionales que quieren diferenciarse de la competencia con su propia app",
];

const faqs = [
  { q: "¿Mis clientes tienen que pagar por la app?", a: "No. Tus clientes acceden gratis a la app con tu marca. Tú pagas el plan mensual de TotalGains y ellos usan la plataforma sin coste adicional." },
  { q: "¿Cuánto tarda en estar lista mi app personalizada?", a: "Tu entorno con marca blanca está activo en minutos. Solo necesitas subir tu logo y elegir tus colores — el resto es automático." },
  { q: "¿Funciona sin conexión?", a: "Las rutinas del día se pueden consultar sin conexión desde la app móvil. Los datos se sincronizan al recuperar la conexión." },
];

export default function AppEntrenadorPersonalOnline() {
  return (
    <LandingPageTemplate
      badge="App para entrenadores online"
      h1="La App para Entrenador Personal Online con tu Propia Marca"
      subtitle="iOS, Android y web en una sola plataforma. Tus clientes entrenan con una app que lleva tu nombre. Tú gestionas todo desde el panel web."
      features={features}
      useCases={useCases}
      ctaText="Crea tu app gratis"
      ctaLocation="lp_app_entrenador"
      faqs={faqs}
    />
  );
}
