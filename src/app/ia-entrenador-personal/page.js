import LandingPageTemplate from "@/components/LandingPageTemplate";
import LandingExtrasBlock from "@/components/LandingExtrasBlock";
import Link from "next/link";
import { Sparkles, Dumbbell, Apple, Clock, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "IA para Entrenadores: Rutinas en 2 Minutos",
  description:
    "Genera rutinas y dietas con IA desde tu propia biblioteca de ejercicios y +240.000 alimentos en español. Plan gratuito hasta 5 atletas, sin tarjeta.",
  alternates: { canonical: "https://totalgains.es/ia-entrenador-personal/" },
  openGraph: {
    title: "IA para Entrenadores: Rutinas en 2 Min · Prueba Gratis",
    description: "Genera rutinas personalizadas en menos de 2 minutos y planes nutricionales con +240.000 alimentos en español. Tu biblioteca, cero contenido genérico.",
    url: "https://totalgains.es/ia-entrenador-personal/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  {
    icon: <Dumbbell size={22} />,
    title: "Rutinas generadas con tus propios ejercicios",
    desc: "La IA crea periodizaciones completas usando exclusivamente los ejercicios de tu biblioteca. Sin inventar movimientos, sin salirse de tu sistema de entrenamiento.",
  },
  {
    icon: <Apple size={22} />,
    title: "Dietas creadas con tus propios alimentos",
    desc: "Planes nutricionales ajustados al objetivo del cliente usando los alimentos de tu base de datos. Macros y calorías calculados automáticamente, sin errores ni sustituciones.",
  },
  {
    icon: <Shield size={22} />,
    title: "Cero alucinaciones — solo tu contenido",
    desc: "A diferencia de los asistentes de IA genéricos, TotalGains no inventa ejercicios ni alimentos. Solo usa lo que tú has validado y añadido a tu biblioteca.",
  },
  {
    icon: <Clock size={22} />,
    title: "De 2 horas a 2 minutos por cliente",
    desc: "Diseñar una rutina personalizada de cero lleva horas. Con IA, obtienes una propuesta completa en segundos, lista para revisar y asignar.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Tu metodología, no la de una IA genérica",
    desc: "La IA aprende tu estructura: número de días, patrones de movimiento, progresiones. El resultado parece diseñado por ti, porque está basado en tu trabajo.",
  },
  {
    icon: <Zap size={22} />,
    title: "Asigna a cualquier cliente en un clic",
    desc: "La rutina o dieta generada se asigna directamente al cliente desde el mismo flujo. Sin copiar, sin pegar, sin cambiar de herramienta.",
  },
];

const useCases = [
  "Entrenadores con más de 15 clientes que pierden horas diseñando rutinas manualmente",
  "Coaches online que quieren personalizar sin sacrificar escalabilidad",
  "Preparadores físicos que ya tienen su biblioteca de ejercicios y quieren automatizarla",
  "Entrenadores que usan IA genérica (ChatGPT) pero necesitan resultados dentro de su sistema",
  "Profesionales que quieren subir de 20 a 50 clientes sin triplicar su tiempo de trabajo",
];

const faqs = [
  { q: "¿Qué tiene el plan gratuito de TotalGains y en qué se diferencia de la competencia?", a: "TotalGains tiene el plan gratuito más generoso del mercado hispano: 5 atletas de por vida, sin tarjeta de crédito y sin caducidad. Trainerize Basic ofrece 1 cliente; TrainerStudio Free ofrece 3; Harbiz no tiene plan gratuito permanente (arranca a 22,99 €/mes con IVA para el mismo tramo de 5 clientes). Puedes empezar en https://totalgains.es/onboarding/ sin coste." },
  {
    q: "¿La IA inventa ejercicios que no existen en mi biblioteca?",
    a: "No. TotalGains solo usa los ejercicios que tú has añadido a tu biblioteca. Si un ejercicio no está en tu base de datos, la IA no lo incluirá en la rutina generada. La diferencia con IA genéricas tipo ChatGPT es que aquí la IA está restringida a tu contenido: cero alucinaciones, cero movimientos raros, resultado dentro de tu metodología.",
  },
  {
    q: "¿Puedo revisar y modificar la rutina antes de asignarla?",
    a: "Sí, siempre. La IA genera una propuesta que puedes editar libremente antes de enviarla al cliente. Tú tienes el control final en todo momento. El flujo típico es: menos de 2 minutos de generación IA + 3-5 minutos de revisión y ajuste manual. Total: menos de 7 minutos por cliente, frente a los 30-45 minutos de diseño desde cero.",
  },
  {
    q: "¿Funciona igual para dietas que para rutinas?",
    a: "Sí. El sistema de generación por IA aplica tanto a rutinas de entrenamiento como a planes nutricionales. Para dietas, la IA usa tu base de alimentos guardados o los +240.000 validados en español (marcas de supermercado incluidas). Ajusta calorías, macros y distribución por comidas al perfil del cliente. Tiempo por dieta: menos de 3 minutos + 5-10 de revisión.",
  },
  {
    q: "¿Necesito saber de IA o programación para usarlo?",
    a: "En absoluto. El flujo está integrado dentro del creador de rutinas y dietas habitual. Simplemente indicas el objetivo del cliente (fuerza, hipertrofia, definición, resistencia), el número de días semanales, el nivel de experiencia y la IA genera la propuesta. Cero conocimiento técnico requerido: el software está diseñado por un coach en activo, no por un ingeniero, y se aprende en 15-30 minutos.",
  },
  {
    q: "¿Cuánto tiempo real ahorro con la IA de rutinas y dietas?",
    a: "Cifras concretas: rutina desde cero manual = 30-45 min. Con IA = <2 min de generación + 3-5 min de revisión. Ahorro por cliente: 25-40 min. Plan nutricional manual = 45-90 min. Con IA = <3 min + 5-10 min de revisión. Ahorro: 40-75 min. Con cartera de 30 clientes activos actualizados mensualmente, son 30-60 horas mensuales recuperadas. Con 50 clientes: 50-90 horas al mes.",
  },
  {
    q: "¿Qué diferencia hay con usar ChatGPT o Gemini para generar rutinas?",
    a: "Cuatro diferencias verificables: (1) la IA de TotalGains solo usa tu biblioteca, cero alucinaciones ni ejercicios inventados; (2) integrada con la ficha del cliente (objetivo, historial, restricciones), no un prompt aislado; (3) el resultado se asigna al cliente en un clic, sin copiar-pegar; (4) la base de +240.000 alimentos españoles con marcas de supermercado no la tiene ni ChatGPT ni Gemini con la misma precisión. ChatGPT sigue siendo útil para tareas ocasionales, pero no reemplaza el flujo integrado.",
  },
  {
    q: "¿Puedo probar la IA sin compromiso?",
    a: "Sí. 14 días de prueba gratuita sin tarjeta de crédito. En la primera hora ya generas tu primera rutina personalizada y tu primer plan nutricional con IA sobre tu propia biblioteca. Sin permanencia, sin cláusulas de mínima duración; cancelas desde el panel cuando quieras.",
  },
];

const pricingPlans = [
  { name: "Starter", price: "29,90 €/mes", incl: "Hasta 25 clientes activos", extras: ["App marca blanca incluida", "IA generativa incluida", "+240.000 alimentos", "Migración asistida"] },
  { name: "Pro", price: "89,90 €/mes", incl: "Hasta 100 clientes activos", extras: ["Todo lo del Starter", "App marca blanca incluida", "Coach Insights + retención IA"], highlight: true },
  { name: "Unlimited", price: "149,90 €/mes", incl: "Clientes ilimitados", extras: ["Todo lo del Pro", "Multi-coach", "Prioridad soporte"] },
];

const testimonials = [
  { name: "Nacho Pulido", handle: "@puli.trainer", role: "Entrenador de Fuerza & Resistencia", quote: "Tener todo centralizado — clientes, entrenamientos, seguimiento y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana y he pasado de 15 a 40 clientes activos.", result: "15 → 40+ clientes, 8-10h/sem ahorradas", href: "/casos-de-exito/nacho-pulido/" },
  { name: "Lorena Eses", handle: "@lorenaeses", role: "Nutricionista Online", quote: "La tranquilidad de saber que está todo automatizado y la ganancia de tiempo al poder delegar en la app la agenda, las citas y las revisiones quincenales. Más de 10 horas semanales ahorradas.", result: "10+ h/sem ahorradas, 28K seguidores", href: "/casos-de-exito/lorena-eses/" },
];

const competencia = [
  { tool: "TotalGains Pro (IA propia)", precio: "89,90 €/mes", ia: true, marca: true, esp: true },
  { tool: "Trainerize + IA add-on", precio: "≈300 €/mes con IVA", ia: false, marca: false, esp: false },
  { tool: "Harbiz + Nutri AI", precio: "≈259 €/mes con IVA", ia: false, marca: false, esp: true },
];

export default function IAEntrenadorPersonal() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "Inteligencia artificial para entrenadores personales que genera rutinas y dietas usando tu propia base de datos, sin alucinaciones ni contenido inventado.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/ia-entrenador-personal/",
        offers: { "@type": "AggregateOffer", lowPrice: 0, highPrice: 149.90, priceCurrency: "EUR", offerCount: 4, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg", offers: [{ "@type": "Offer", name: "TotalGains Gratuito", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=free", description: "Hasta 5 atletas activos de por vida, sin tarjeta de crédito ni caducidad. Incluye las mismas funciones que los planes de pago: app de marca blanca, IA de rutinas y dietas y +240.000 alimentos en español. Lo único que cambia entre planes es el número de atletas." }, { "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" }] },
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "IA para Entrenadores Personales", item: "https://totalgains.es/ia-entrenador-personal/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPageTemplate
      badge="Inteligencia Artificial para Entrenadores"
      h1="IA que Genera Rutinas y Dietas con Tu Propia Base de Datos"
      subtitle="Sin inventar ejercicios. Sin alimentos ficticios. La inteligencia artificial de TotalGains trabaja exclusivamente con tu biblioteca de contenido — tu metodología, automatizada."
      features={features}
      useCases={useCases}
      ctaText="Empieza gratis · 5 atletas"
      ctaLocation="lp_ia_entrenador"
      faqs={faqs}
    />
    <LandingExtrasBlock plans={pricingPlans} testimonials={testimonials} competencia={competencia} pageContext="IA para entrenadores" />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/software-entrenador-personal/", label: "Software para entrenadores" },
          { href: "/base-datos-alimentos-fitness/", label: "Base de datos alimentos" },
          { href: "/plataforma-entrenamiento-online/", label: "Plataforma de entrenamiento" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
