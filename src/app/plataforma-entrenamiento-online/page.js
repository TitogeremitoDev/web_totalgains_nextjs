import LandingPageTemplate from "@/components/LandingPageTemplate";
import LandingExtrasBlock from "@/components/LandingExtrasBlock";
import Link from "next/link";
import { Globe, Video, LayoutDashboard, Zap, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Plataforma de Entrenamiento Online 2026",
  description:
    "Plataforma de entrenamiento online todo-en-uno: gestiona atletas, diseña rutinas con IA y haz seguimiento profesional. España y Latinoamérica.",
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
  { q: "¿Necesito conocimientos técnicos para usar la plataforma?", a: "No. TotalGains está diseñado para que un entrenador, no un programador, lo configure y use desde el primer día. El equipo de soporte te acompaña en la configuración inicial. En 15-30 minutos de exploración ya puedes crear tu primer cliente, generar una rutina con IA en menos de 2 minutos y programar el primer check-in semanal estructurado." },
  { q: "¿Puedo usar TotalGains si también doy clases presenciales?", a: "Perfectamente. TotalGains funciona igual para entrenamiento online y presencial. Muchos entrenadores lo usan simultáneamente: clientes online con seguimiento estructurado en la app y clientes presenciales con la misma ficha de progreso, revisiones semanales y comunicación centralizada. La plataforma transversal facilita el paso de un modelo al otro sin cambiar de herramienta." },
  { q: "¿Está disponible en Latinoamérica?", a: "Sí. TotalGains funciona en España y en todos los países de Latinoamérica. La plataforma está en español, los precios están en euros y el soporte responde en horario español y algo de horario latinoamericano según demanda. Muchos entrenadores hispanos usan la plataforma con carteras mixtas entre España, México, Argentina, Colombia y Chile." },
  { q: "¿Qué diferencia a TotalGains de plataformas anglosajonas como Trainerize o TrueCoach?", a: "Cuatro diferencias verificables: (1) soporte nativo en español, no traducción automática; (2) base de +240.000 alimentos españoles con marcas de supermercado real, no USDA en inglés; (3) IA generativa de rutinas y dietas que trabaja con tu biblioteca propia (cero alucinaciones), no ChatGPT genérico; (4) precios con funcionalidad completa Pro a 89,90 €/mes con IVA, incluidos app marca blanca y coach insights (Trainerize Pro 50 completo ≈250 €/mes con IVA)." },
  { q: "¿Cuánto tiempo lleva la migración desde otra plataforma?", a: "Menos de 5 días para carteras de 30-60 clientes. La IA de TotalGains transcribe rutinas y dietas antiguas en menos de 2 minutos por documento, ya vengas de Trainerize, Harbiz, MyPT Hub, Excel, PDFs o WhatsApp. El equipo hace la importación estructurada, el coach hace la comunicación al cliente con plantillas preparadas. Sin coste extra y sin cláusulas de mínima duración: puedes cancelar en cualquier momento." },
  { q: "¿La plataforma escala si paso de 20 a 100 clientes?", a: "Sí. El plan Pro (89,90 €/mes con IVA) da soporte hasta 100 clientes activos. La app marca blanca va incluida en todos los planes, también en el Starter. Por encima de 100, el plan Unlimited (149,90 €/mes con IVA) elimina el tope y añade multi-coach para equipos. Coaches como Nacho Pulido documentan el paso de 15 a 40+ clientes con la misma plataforma y sin cambiar de plan hasta cruzar los umbrales." },
  { q: "¿Puedo probar TotalGains sin compromiso?", a: "Sí. 14 días de prueba gratuita sin tarjeta de crédito. Configuras tu plataforma, migras 3-5 clientes de muestra, generas rutinas con IA y decides si el flujo te encaja. Sin permanencia ni cláusulas de mínima duración; puedes cancelar desde el panel en cualquier momento." },
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
  { tool: "TrueCoach Pro", precio: "≈145 €/mes", ia: false, marca: false, esp: false },
];

export default function PlataformaEntrenamientoOnline() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "Plataforma de entrenamiento online para entrenadores personales con app cliente, creador de rutinas con IA y seguimiento de adherencia.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/plataforma-entrenamiento-online/",
        offers: { "@type": "AggregateOffer", lowPrice: 29.90, highPrice: 149.90, priceCurrency: "EUR", offerCount: 3, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg", offers: [{ "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" }] },
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Plataforma de Entrenamiento Online", item: "https://totalgains.es/plataforma-entrenamiento-online/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
    <LandingExtrasBlock plans={pricingPlans} testimonials={testimonials} competencia={competencia} pageContext="Plataforma entrenamiento online" />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/software-entrenador-personal/", label: "Software para entrenadores" },
          { href: "/gestion-clientes-fitness/", label: "Gestión de clientes" },
          { href: "/app-entrenador-personal-online/", label: "App entrenador online" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
