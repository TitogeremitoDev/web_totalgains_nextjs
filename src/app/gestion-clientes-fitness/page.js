import LandingPageTemplate from "@/components/LandingPageTemplate";
import { Users, FileText, CreditCard, Bell, BarChart3, Shield } from "lucide-react";

export const metadata = {
  title: "Gestión de Clientes Fitness para Entrenadores",
  description:
    "Centraliza la gestión de tus clientes fitness: historial de entrenamientos, pagos, seguimiento y comunicación. Todo en una plataforma. Prueba gratis 14 días.",
  alternates: { canonical: "https://totalgains.es/gestion-clientes-fitness/" },
  openGraph: {
    title: "Gestión de Clientes Fitness | TotalGains",
    description: "Software de gestión de clientes para entrenadores personales y profesionales del fitness. Sin Excel, sin caos.",
    url: "https://totalgains.es/gestion-clientes-fitness/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  { icon: <Users size={22} />, title: "Ficha completa de cada cliente", desc: "Historial de entrenamientos, medidas, fotos de progreso, objetivos y notas. Todo en un perfil estructurado." },
  { icon: <FileText size={22} />, title: "Rutinas y dietas asignadas", desc: "Asocia cada plan de entrenamiento y nutrición directamente al perfil del cliente. Sin confusiones, sin archivos perdidos." },
  { icon: <CreditCard size={22} />, title: "Control de pagos por cliente", desc: "Registro de cobros, fechas de renovación y estado de cada cliente. Siempre sabes quién está al día." },
  { icon: <Bell size={22} />, title: "Alertas de inactividad", desc: "El sistema detecta cuando un cliente lleva días sin entrenar y te avisa para que actúes antes de que abandone." },
  { icon: <BarChart3 size={22} />, title: "Progresión visual por cliente", desc: "Gráficas de evolución que puedes compartir con el cliente para motivarle y demostrar resultados." },
  { icon: <Shield size={22} />, title: "Datos seguros y cumple RGPD", desc: "Tus datos y los de tus clientes protegidos con encriptación de nivel bancario. Cumplimiento total con la normativa europea." },
];

const useCases = [
  "Entrenadores con más de 10 clientes activos que pierden tiempo buscando información",
  "Profesionales que llevan el control de pagos en una agenda o libreta",
  "Coaches que reciben fotos de progreso por WhatsApp y las tienen desorganizadas",
  "Entrenadores que quieren detectar y prevenir el abandono de clientes",
];

const faqs = [
  { q: "¿Cuántos clientes puedo gestionar?", a: "El plan Starter incluye hasta 15 clientes. Pro y Unlimited no tienen límite. Puedes empezar con el plan gratuito para hasta 3 clientes sin tarjeta." },
  { q: "¿Puedo gestionar clientes tanto online como presenciales?", a: "Sí. TotalGains funciona igual para clientes online y presenciales. Tú decides cómo usas las funciones según tu modelo de negocio." },
  { q: "¿Los clientes ven la información de otros clientes?", a: "No. Cada cliente solo accede a su perfil y su contenido. La privacidad entre clientes es total." },
];

export default function GestionClientesFitness() {
  return (
    <LandingPageTemplate
      badge="Gestión de clientes"
      h1="Gestión de Clientes Fitness Sin Excel, Sin Caos"
      subtitle="Centraliza el historial, los pagos, las rutinas y el progreso de cada cliente en un perfil estructurado. Dedica menos tiempo a buscar información y más a entrenar."
      features={features}
      useCases={useCases}
      ctaText="Gestiona tus clientes gratis"
      ctaLocation="lp_gestion_clientes"
      faqs={faqs}
    />
  );
}
