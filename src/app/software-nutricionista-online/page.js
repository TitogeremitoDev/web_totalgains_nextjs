import LandingPageTemplate from "@/components/LandingPageTemplate";
import { Utensils, Calendar, Bell, FileText, BarChart3, Shield } from "lucide-react";

export const metadata = {
  title: "Software Nutricionista Online — Gestión de Pacientes",
  description:
    "Software para nutricionistas online: gestiona pacientes, crea planes de dieta con +240.000 alimentos, automatiza revisiones y agenda citas. Prueba gratis 14 días.",
  alternates: { canonical: "https://totalgains.es/software-nutricionista-online/" },
  openGraph: {
    title: "Software para Nutricionista Online | TotalGains",
    description: "+240.000 alimentos, gestión de pacientes y automatización de revisiones para nutricionistas online.",
    url: "https://totalgains.es/software-nutricionista-online/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  { icon: <Utensils size={22} />, title: "+240.000 alimentos en español", desc: "La base de alimentos más completa del mercado hispanohablante. Macros, micros y calorías validados para construir planes precisos." },
  { icon: <Calendar size={22} />, title: "Agenda y citas automáticas", desc: "Tus pacientes reservan sus revisiones desde la app. Las notificaciones se envían solas. Sin gestión manual de calendario." },
  { icon: <Bell size={22} />, title: "Revisiones automatizadas", desc: "El sistema recuerda al paciente cuando toca revisión y recoge sus datos antes de la cita. Tú llegas preparada a la consulta." },
  { icon: <FileText size={22} />, title: "Planes de dieta estructurados", desc: "Crea planes de alimentación completos por semana con distribución de macros, lista de compra y equivalencias de alimentos." },
  { icon: <BarChart3 size={22} />, title: "Seguimiento de progreso", desc: "Gráficas de evolución de peso, medidas y adherencia al plan. Tus pacientes ven su progreso, tú ves qué funciona." },
  { icon: <Shield size={22} />, title: "Privacidad y RGPD", desc: "Los datos de salud de tus pacientes protegidos con encriptación bancaria y cumplimiento total con la normativa europea de protección de datos." },
];

const useCases = [
  "Nutricionistas online que gestionan revisiones quincenales o mensuales",
  "Dietistas que trabajan con más de 10 pacientes y pierden tiempo con Excel",
  "Nutricionistas que reciben fotos de seguimiento por WhatsApp sin estructura",
  "Coaches de nutrición que quieren automatizar los recordatorios de citas",
  "Profesionales de la salud que quieren dar una experiencia de app premium a sus pacientes",
];

const faqs = [
  { q: "¿Puedo usar TotalGains solo para nutrición, sin la parte de entrenamiento?", a: "Sí. Puedes usar exclusivamente las funciones de nutrición y gestión de pacientes. No estás obligada a usar el módulo de entrenamientos." },
  { q: "¿Los planes de dieta se adaptan a restricciones alimentarias?", a: "Sí. Puedes filtrar y personalizar los planes según alergias, intolerancias, preferencias o tipo de dieta (vegetariana, cetogénica, etc.)." },
  { q: "¿Es válido para cumplir con la normativa de protección de datos en salud?", a: "TotalGains cumple con el RGPD europeo. Los datos de salud se tratan con las medidas de seguridad adecuadas para datos sensibles." },
];

export default function SoftwareNutricionistaOnline() {
  return (
    <LandingPageTemplate
      badge="Software para nutricionistas"
      h1="Software para Nutricionista Online con +240.000 Alimentos"
      subtitle="Gestiona pacientes, crea planes de alimentación y automatiza tus revisiones. La plataforma que usan nutricionistas como Lorena Eses para ahorrar más de 10 horas semanales."
      features={features}
      useCases={useCases}
      ctaText="Empieza gratis como nutricionista"
      ctaLocation="lp_nutricionista"
      faqs={faqs}
    />
  );
}
