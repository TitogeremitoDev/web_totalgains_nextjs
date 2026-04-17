import LandingPageTemplate from "@/components/LandingPageTemplate";
import { Globe, Video, LayoutDashboard, Zap, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Plataforma de Entrenamiento Online para Entrenadores",
  description:
    "La plataforma de entrenamiento online todo-en-uno. Gestiona atletas, diseña rutinas, haz seguimiento y cobra desde cualquier lugar. Disponible en España y Latinoamérica.",
  alternates: { canonical: "https://totalgains.es/plataforma-entrenamiento-online/" },
  openGraph: {
    title: "Plataforma de Entrenamiento Online | TotalGains",
    description: "Todo lo que necesitas para ofrecer entrenamiento online profesional desde una sola plataforma.",
    url: "https://totalgains.es/plataforma-entrenamiento-online/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  { icon: <Globe size={22} />, title: "Trabaja desde cualquier lugar", desc: "Tu panel de control accesible desde cualquier navegador. Gestiona tus clientes desde casa, el gimnasio o de viaje." },
  { icon: <Video size={22} />, title: "Feedback en vídeo", desc: "Envía y recibe vídeos de análisis técnico directamente en la plataforma. Sin Wetransfer ni Dropbox." },
  { icon: <LayoutDashboard size={22} />, title: "Panel de control completo", desc: "Una vista global de todos tus clientes: quién entrena, quién no, quién renueva pronto y quién necesita atención." },
  { icon: <Zap size={22} />, title: "Creación rápida de rutinas", desc: "Diseña periodizaciones completas en minutos con el constructor de rutinas. Semanas, días y ejercicios con progresión automática." },
  { icon: <Users size={22} />, title: "Onboarding de clientes", desc: "Incorpora nuevos clientes con un formulario inicial que recoge toda su información antes de la primera sesión." },
  { icon: <TrendingUp size={22} />, title: "Escalable sin límites", desc: "Pasa de 5 a 50 clientes sin necesidad de contratar ayuda administrativa. La plataforma crece contigo." },
];

const useCases = [
  "Entrenadores que quieren ofrecer servicios de entrenamiento online profesional",
  "Coaches de fitness que trabajan con clientes en diferentes ciudades o países",
  "Profesionales que quieren escalar su negocio sin contratar personal de apoyo",
  "Entrenadores que hacen seguimiento por WhatsApp y quieren una herramienta profesional",
];

const faqs = [
  { q: "¿Necesito conocimientos técnicos para usar la plataforma?", a: "No. TotalGains está diseñado para que un entrenador, no un programador, lo configure y use desde el primer día. El equipo de soporte te acompaña en la configuración inicial." },
  { q: "¿Puedo usar TotalGains si también doy clases presenciales?", a: "Perfectamente. TotalGains funciona igual para entrenamiento online y presencial. Muchos entrenadores lo usan para los dos modelos simultáneamente." },
  { q: "¿Está disponible en Latinoamérica?", a: "Sí. TotalGains funciona en España y en todos los países de Latinoamérica. La plataforma está en español y los precios están en euros." },
];

export default function PlataformaEntrenamientoOnline() {
  return (
    <LandingPageTemplate
      badge="Plataforma de entrenamiento online"
      h1="La Plataforma de Entrenamiento Online para Coaches Profesionales"
      subtitle="Todo lo que necesitas para ofrecer entrenamiento online de alto nivel: gestión de atletas, rutinas, seguimiento y comunicación desde una sola plataforma accesible en todo el mundo."
      features={features}
      useCases={useCases}
      ctaText="Empieza tu plataforma gratis"
      ctaLocation="lp_plataforma_entrenamiento"
      faqs={faqs}
    />
  );
}
