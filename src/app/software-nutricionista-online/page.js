import LandingPageTemplate from "@/components/LandingPageTemplate";
import LandingExtrasBlock from "@/components/LandingExtrasBlock";
import Link from "next/link";
import { Utensils, Calendar, Bell, FileText, BarChart3, Shield } from "lucide-react";

export const metadata = {
  title: "Software Nutricionista Online",
  description:
    "Software para nutricionistas online: gestiona pacientes, crea planes de dieta con +240.000 alimentos y agenda citas. Prueba gratis 14 días.",
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
  { q: "¿Puedo usar TotalGains solo para nutrición, sin la parte de entrenamiento?", a: "Sí. Puedes usar exclusivamente las funciones de nutrición y gestión de pacientes. No estás obligada a usar el módulo de entrenamientos. La base de +240.000 alimentos, la generación IA de dietas, las revisiones automatizadas y la agenda de citas están disponibles como funciones independientes." },
  { q: "¿Los planes de dieta se adaptan a restricciones alimentarias?", a: "Sí. Puedes filtrar y personalizar los planes según alergias, intolerancias, preferencias o tipo de dieta (vegetariana, vegana, cetogénica, sin gluten, sin lactosa, halal, kosher, etc.). La IA respeta las restricciones marcadas en la ficha del paciente: si un alimento está bloqueado por restricción, no lo elige en la generación. Cero riesgo de que un paciente reciba un plan con un alérgeno declarado." },
  { q: "¿Es válido para cumplir con la normativa de protección de datos en salud?", a: "TotalGains cumple con el RGPD europeo. Los datos de salud se tratan con las medidas de seguridad adecuadas para datos sensibles: encriptación en tránsito (TLS) y en reposo, control de acceso por sesión, borrado a demanda del interesado y contratos de encargado de tratamiento disponibles bajo petición." },
  { q: "¿Cuánto tiempo lleva crear un plan nutricional en TotalGains?", a: "Con IA: menos de 3 minutos de generación + 5-10 minutos que dedicas a revisar y ajustar. Antes: 45-90 minutos por plan en Excel con tabla nutricional. Ahorro neto por paciente: 40-75 minutos. Con cartera de 30 pacientes activos con revisión mensual, son 20-37 horas ahorradas al mes solo en creación de planes." },
  { q: "¿Cómo diferencia la ley española a nutricionista y entrenador a la hora de pautar dietas?", a: "La Ley 44/2003 sobre profesiones sanitarias reserva la prescripción dietoterapéutica al graduado en Nutrición y Dietética. El entrenador puede orientar sobre hábitos y educación nutricional, pero no prescribir dietas para patologías. TotalGains no distingue jurídicamente entre roles; corresponde al profesional respetar el marco legal de su titulación. La guía editorial 'Cómo crear planes nutricionales' del blog documenta el detalle práctico." },
  { q: "¿Puedo integrar cobros o los sigo gestionando por mi cuenta?", a: "El cobro efectivo sigue haciéndose por tu canal habitual: transferencia, Bizum, TPV o Stripe fuera de la app. TotalGains no ofrece cobros in-app end-to-end para autónomos coach/nutricionista todavía. Lo que sí incluimos es un sistema de recordatorios de renovación con win-back automático al paciente cuando toca renovar, para que no tengas que perseguirle." },
  { q: "¿Cómo ha ido con Lorena Eses, la nutricionista del caso de éxito?", a: "Lorena Eses (@lorena.eses, más de 28K seguidores) documenta el proceso completo. Antes gestionaba con diferentes Excel incompatibles entre sí. Con TotalGains automatizó revisiones quincenales, agenda de citas y seguimiento de progreso. El ROI fue inmediato: el coste mensual de la herramienta se recupera en horas ahorradas la primera semana. Ahora dedica ese tiempo a mejorar la calidad de sus planes en vez de a admin operativo." },
];

const pricingPlans = [
  { name: "Starter", price: "29,90 €/mes", incl: "Hasta 25 pacientes activos", extras: ["App marca blanca incluida", "+240.000 alimentos", "IA generativa de dietas", "Migración asistida"] },
  { name: "Pro", price: "89,90 €/mes", incl: "Hasta 100 pacientes activos", extras: ["Todo lo del Starter", "App marca blanca incluida", "Coach Insights + retención IA"], highlight: true },
  { name: "Unlimited", price: "149,90 €/mes", incl: "Pacientes ilimitados", extras: ["Todo lo del Pro", "Multi-equipo", "Prioridad soporte"] },
];

const testimonials = [
  { name: "Lorena Eses", handle: "@lorena.eses", role: "Nutricionista Online", quote: "Los planes generados con IA a partir de mi propia base de alimentos, más las revisiones quincenales automáticas, me han devuelto más de 10 horas semanales. Ahora las invierto en mejorar la calidad de mis asesorías.", result: "10+ h/sem ahorradas, 28K seguidores", href: "/casos-de-exito/lorena-eses/" },
  { name: "Nacho Pulido", handle: "@puli.trainer", role: "Entrenador de Fuerza & Resistencia", quote: "Aunque yo soy entrenador y no nutricionista, la base de +240.000 alimentos con marcas de supermercado real me ahorra un tiempo brutal cuando doy pautas nutricionales básicas a mis clientes.", result: "15 → 40+ clientes, 8-10h/sem ahorradas", href: "/casos-de-exito/nacho-pulido/" },
];

const competencia = [
  { tool: "TotalGains Pro", precio: "89,90 €/mes", ia: true, marca: true, esp: true },
  { tool: "Harbiz Pro + Nutri AI", precio: "≈259 €/mes con IVA", ia: false, marca: false, esp: true },
  { tool: "TrueCoach Nutrition", precio: "≈145 €/mes", ia: false, marca: false, esp: false },
];

export default function SoftwareNutricionistaOnline() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "Software para nutricionistas online con +240.000 alimentos, generación IA de dietas, seguimiento de pacientes y automatización de revisiones.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/software-nutricionista-online/",
        offers: { "@type": "AggregateOffer", lowPrice: 29.90, highPrice: 149.90, priceCurrency: "EUR", offerCount: 3, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg", offers: [{ "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" }] },
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Software para Nutricionista Online", item: "https://totalgains.es/software-nutricionista-online/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
    <LandingExtrasBlock plans={pricingPlans} testimonials={testimonials} competencia={competencia} pageContext="Software nutricionista" />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/blog/crear-planes-nutricionales-clientes-entrenador-personal/", label: "Guía: crear planes nutricionales 2026" },
          { href: "/base-datos-alimentos-fitness/", label: "Base de datos alimentos" },
          { href: "/ia-entrenador-personal/", label: "IA para entrenadores" },
          { href: "/software-entrenador-personal/", label: "Software para entrenadores" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
