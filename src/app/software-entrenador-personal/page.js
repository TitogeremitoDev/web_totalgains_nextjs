import LandingPageTemplate from "@/components/LandingPageTemplate";
import { Users, LayoutDashboard, Bell, CreditCard, Palette, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Software para Entrenadores Personales — Gestión Integral",
  description:
    "El software para entrenadores personales que centraliza atletas, rutinas, dietas y seguimiento. Diseñado en España, en español. Prueba gratis 14 días sin tarjeta.",
  alternates: { canonical: "https://totalgains.es/software-entrenador-personal/" },
  openGraph: {
    title: "Software para Entrenadores Personales | TotalGains",
    description: "Gestiona todos tus clientes desde una sola plataforma. Rutinas, dietas, pagos y seguimiento automatizados.",
    url: "https://totalgains.es/software-entrenador-personal/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  { icon: <Users size={22} />, title: "Gestión de clientes centralizada", desc: "Todos tus atletas, su historial, objetivos y progreso en un solo lugar. Sin Excel, sin WhatsApp." },
  { icon: <LayoutDashboard size={22} />, title: "Panel de control profesional", desc: "Dashboard con métricas clave: adherencia, progresión de cargas, renovaciones próximas y alertas de abandono." },
  { icon: <Bell size={22} />, title: "Seguimiento automatizado", desc: "Recordatorios automáticos, revisiones periódicas y feedback de progreso sin que tengas que recordarlo manualmente." },
  { icon: <CreditCard size={22} />, title: "Control de pagos", desc: "Registra cobros, vencimientos y estado de cada cliente. Sin perseguir pagos por WhatsApp." },
  { icon: <Palette size={22} />, title: "App marca blanca", desc: "Tus clientes usan una app con tu nombre y colores. Profesionalidad total desde el primer día." },
  { icon: <BarChart3 size={22} />, title: "Análisis de progreso", desc: "Gráficas de evolución de peso, fuerza y medidas. Tus clientes ven su progreso, tú ves qué funciona." },
];

const useCases = [
  "Entrenadores personales con 5 a 100+ clientes activos",
  "Preparadores físicos que quieren escalar sin contratar administración",
  "Coaches online que trabajan desde casa o compaginan con sala",
  "Entrenadores que usan Excel y quieren profesionalizarse",
  "Profesionales que quieren su propia app sin programar nada",
];

const faqs = [
  { q: "¿Cuánto tiempo lleva aprender a usar el software?", a: "La mayoría de entrenadores están trabajando desde el primer día. La curva de aprendizaje es mínima — está diseñado para que un entrenador, no un técnico, lo use sin manual." },
  { q: "¿Puedo importar mis clientes actuales desde Excel?", a: "Sí. Nuestro equipo te ayuda en la migración inicial para que no pierdas ningún dato. Es parte del proceso de bienvenida." },
  { q: "¿Funciona en móvil?", a: "Completamente. Tienes app nativa en iOS y Android, y tus clientes también acceden desde su propia app personalizada con tu marca." },
];

export default function SoftwareEntrenadorPersonal() {
  return (
    <LandingPageTemplate
      badge="Software para entrenadores"
      h1="El Software para Entrenadores Personales que Centraliza Todo"
      subtitle="Gestiona atletas, rutinas, dietas y seguimiento desde una sola plataforma. Diseñada para entrenadores que quieren trabajar con más clientes sin más horas de administración."
      features={features}
      useCases={useCases}
      ctaText="Prueba gratis 14 días"
      ctaLocation="lp_software_entrenador"
      faqs={faqs}
    />
  );
}
