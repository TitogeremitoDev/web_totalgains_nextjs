import LandingPageTemplate from "@/components/LandingPageTemplate";
import Link from "next/link";
import { Sparkles, Dumbbell, Apple, Clock, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "IA para Entrenadores: Rutinas en <2 Min por Cliente",
  description:
    "Genera rutinas en menos de 2 minutos y planes nutricionales con +240.000 alimentos en español. Tu biblioteca, cero contenido genérico.",
  alternates: { canonical: "https://totalgains.es/ia-entrenador-personal/" },
  openGraph: {
    title: "IA para Entrenadores: Rutinas en <2 Min por Cliente",
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
  {
    q: "¿La IA inventa ejercicios que no existen en mi biblioteca?",
    a: "No. TotalGains solo usa los ejercicios que tú has añadido a tu biblioteca. Si un ejercicio no está en tu base de datos, la IA no lo incluirá en la rutina generada.",
  },
  {
    q: "¿Puedo revisar y modificar la rutina antes de asignarla?",
    a: "Sí, siempre. La IA genera una propuesta que puedes editar libremente antes de enviarla al cliente. Tú tienes el control final en todo momento.",
  },
  {
    q: "¿Funciona igual para dietas que para rutinas?",
    a: "Sí. El sistema de generación por IA aplica tanto a rutinas de entrenamiento como a planes nutricionales, en ambos casos usando exclusivamente tu base de datos propia.",
  },
  {
    q: "¿Necesito saber de IA o programación para usarlo?",
    a: "En absoluto. El flujo está integrado dentro del creador de rutinas y dietas habitual. Simplemente indicas el objetivo y el perfil del cliente, y la IA genera la propuesta.",
  },
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
        offers: { "@type": "AggregateOffer", lowPrice: 29.90, highPrice: 149.90, priceCurrency: "EUR", offerCount: 3, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", bestRating: "5", worstRating: "1", ratingCount: "3", reviewCount: "3" },
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
      ctaText="Prueba gratis 14 días"
      ctaLocation="lp_ia_entrenador"
      faqs={faqs}
    />
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
