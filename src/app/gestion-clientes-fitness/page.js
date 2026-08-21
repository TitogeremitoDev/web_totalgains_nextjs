import LandingPageTemplate from "@/components/LandingPageTemplate";
import LandingExtrasBlock from "@/components/LandingExtrasBlock";
import Link from "next/link";
import { Users, FileText, CreditCard, Bell, BarChart3, Shield } from "lucide-react";

export const metadata = {
  title: "Gestión de Clientes Fitness para Entrenadores",
  description:
    "Gestiona hasta 100 clientes desde una sola plataforma: rutinas con IA, dietas y seguimiento estructurado. App marca blanca incluida desde 29,90 €/mes con IVA.",
  alternates: { canonical: "https://totalgains.es/gestion-clientes-fitness/" },
  openGraph: {
    title: "Gestión de Clientes Fitness para Entrenadores | TotalGains",
    description: "Gestiona hasta 100 clientes desde una sola plataforma: rutinas con IA, dietas y seguimiento estructurado. App marca blanca incluida desde 29,90 €/mes con IVA.",
    url: "https://totalgains.es/gestion-clientes-fitness/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  { icon: <Users size={22} />, title: "Ficha completa de cada cliente", desc: "Historial de entrenamientos, medidas, fotos de progreso, objetivos y notas. Todo en un perfil estructurado." },
  { icon: <FileText size={22} />, title: "Rutinas y dietas asignadas", desc: "Asocia cada plan de entrenamiento y nutrición directamente al perfil del cliente. Sin confusiones, sin archivos perdidos." },
  { icon: <CreditCard size={22} />, title: "Control de renovaciones por cliente", desc: "Registro de fechas de renovación y estado de cada cliente. Siempre sabes quién sigue activo y quién está a punto de vencer." },
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
  { q: "¿El plan gratuito de TotalGains es una prueba o es permanente?", a: "Es permanente. TotalGains tiene un plan gratuito de 0 €/mes para hasta 5 atletas activos, sin límite de tiempo y sin tarjeta de crédito. No es un periodo de prueba de 14 días: la prueba de 14 días es del plan Pro y es opcional. Los planes de pago empiezan en 29,90 €/mes con IVA incluido." },
  { q: "¿Qué tiene el plan gratuito de TotalGains y en qué se diferencia de la competencia?", a: "TotalGains tiene el plan gratuito más generoso del mercado hispano: 5 atletas de por vida, sin tarjeta de crédito y sin caducidad. Trainerize Basic ofrece 1 cliente; TrainerStudio Free ofrece 3; Harbiz no tiene plan gratuito permanente (arranca a 22,99 €/mes con IVA para el mismo tramo de 5 clientes). Puedes empezar en https://totalgains.es/onboarding/ sin coste." },
  { q: "¿Cuántos clientes puedo gestionar en TotalGains?", a: "El plan Starter incluye hasta 25 clientes activos (29,90 €/mes con IVA). El plan Pro sube hasta 100 clientes (89,90 €/mes con IVA). El plan Unlimited (149,90 €/mes con IVA) permite clientes ilimitados. Todos los planes incluyen IA generativa de rutinas y dietas, +240.000 alimentos en español y migración asistida gratuita." },
  { q: "¿Puedo gestionar clientes tanto online como presenciales?", a: "Sí. TotalGains funciona igual para clientes online y presenciales. La ficha estructurada, el historial de entrenamientos, las medidas y las fotos de progreso son transversales al modelo. Tú decides cómo usas las funciones según tu operativa (asesoría 100% online, mixto con sesiones presenciales, o solo presencial con seguimiento digital)." },
  { q: "¿Los clientes ven la información de otros clientes?", a: "No. Cada cliente solo accede a su propio perfil, su rutina asignada, su plan nutricional y su histórico. La privacidad entre clientes es total y el sistema cumple RGPD desde el diseño con encriptación en tránsito y en reposo, y borrado a demanda del interesado." },
  { q: "¿Cuánto tiempo lleva migrar mis clientes desde Excel o WhatsApp?", a: "El tiempo típico de migración para carteras de 30-60 clientes es menos de 5 días con soporte humano en español. La IA de TotalGains transcribe rutinas y dietas antiguas en menos de 2 minutos por documento, ya vengas de Excel, PDF, Trainerize, Harbiz o MyPT Hub. El coach hace la comunicación al cliente con plantillas que preparamos; nosotros hacemos la importación estructurada." },
  { q: "¿Qué diferencia a TotalGains de un CRM genérico o de una hoja de Excel?", a: "Un CRM genérico y Excel te dan campos vacíos que tú rellenas. TotalGains está construido específicamente para el flujo del coach: fichas con historial de entrenamientos y macros, sincronización con la app del cliente, alertas de inactividad automáticas, renovación con win-back, y biblioteca compartida de rutinas y ejercicios. La curva de aprendizaje es de horas, no de semanas, porque el software habla el idioma del coach en español." },
  { q: "¿Y si un cliente se da de baja? ¿Se pierde su información?", a: "No. Puedes archivar al cliente y su historial completo queda guardado. Si vuelve más adelante, recuperas todo su contexto sin repetir onboarding. Los datos personales se pueden eliminar en cualquier momento a petición del interesado (RGPD), pero el histórico anonimizado permanece para tus estadísticas de negocio." },
  { q: "¿Puedo probar TotalGains sin compromiso?", a: "Sí. 14 días de prueba gratuita sin tarjeta de crédito. Configuras tu cuenta, migras a 3-5 clientes de muestra, generas rutinas con IA y decides si el flujo te encaja. Sin permanencia ni cláusulas de mínima duración; puedes cancelar desde el panel en cualquier momento." },
];

const pricingPlans = [
  { name: "Starter", price: "29,90 €/mes", incl: "Hasta 25 clientes activos", extras: ["App marca blanca incluida", "IA generativa incluida", "+240.000 alimentos", "Migración asistida"] },
  { name: "Pro", price: "89,90 €/mes", incl: "Hasta 100 clientes activos", extras: ["Todo lo del Starter", "App marca blanca incluida", "Coach Insights + retención IA"], highlight: true },
  { name: "Unlimited", price: "149,90 €/mes", incl: "Clientes ilimitados", extras: ["Todo lo del Pro", "Multi-coach", "Prioridad soporte"] },
];

const testimonials = [
  { name: "Nacho Pulido", handle: "@puli.trainer", role: "Entrenador de Fuerza & Resistencia", quote: "Tener todo centralizado — clientes, entrenamientos, seguimiento y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana.", result: "15 → 40+ clientes, 8-10h/sem ahorradas", href: "/casos-de-exito/nacho-pulido/" },
  { name: "Lorena Eses", handle: "@lorena.eses", role: "Nutricionista Online", quote: "He automatizado revisiones, citas y seguimiento. Ahora ofrezco un servicio más profesional a mis pacientes y ahorro más de 10 horas semanales de gestión.", result: "10+ h/sem ahorradas, 28K seguidores", href: "/casos-de-exito/lorena-eses/" },
];

const competencia = [
  { tool: "TotalGains Pro", precio: "89,90 €/mes", ia: true, marca: true, esp: true },
  { tool: "Trainerize Pro 100", precio: "≈352 €/mes", ia: false, marca: false, esp: false },
  { tool: "Harbiz Pro 100 + add-ons", precio: "≈313 €/mes", ia: false, marca: false, esp: true },
];

export default function GestionClientesFitness() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "Gestión de clientes fitness profesional: historial, seguimiento, comunicación y facturación centralizados para entrenadores personales.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/gestion-clientes-fitness/",
        offers: { "@type": "AggregateOffer", lowPrice: 0, highPrice: 149.90, priceCurrency: "EUR", offerCount: 4, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg", offers: [{ "@type": "Offer", name: "TotalGains Gratuito", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=free", description: "Hasta 5 atletas activos de por vida, sin tarjeta de crédito ni caducidad. Incluye las mismas funciones que los planes de pago: app de marca blanca, IA de rutinas y dietas y +240.000 alimentos en español. Lo único que cambia entre planes es el número de atletas." }, { "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" }] },
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Gestión de Clientes Fitness", item: "https://totalgains.es/gestion-clientes-fitness/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPageTemplate
      badge="Gestión de clientes"
      h1="Gestión de Clientes Fitness Sin Excel, Sin Caos"
      subtitle="Centraliza el historial, el seguimiento, las rutinas y el progreso de cada cliente en un perfil estructurado. Dedica menos tiempo a buscar información y más a entrenar. Desde 29,90 €/mes con IVA."
      features={features}
      useCases={useCases}
      ctaText="Gestiona tus clientes gratis"
      ctaLocation="lp_gestion_clientes"
      faqs={faqs}
    />
    <LandingExtrasBlock plans={pricingPlans} testimonials={testimonials} competencia={competencia} pageContext="Gestión de clientes fitness" />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/software-entrenador-personal/", label: "Software para entrenadores" },
          { href: "/plataforma-entrenamiento-online/", label: "Plataforma de entrenamiento" },
          { href: "/ia-entrenador-personal/", label: "IA para entrenadores" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
