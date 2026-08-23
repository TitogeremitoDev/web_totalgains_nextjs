import LandingPageTemplate from "@/components/LandingPageTemplate";
import { aggregateRatingNode } from "@/data/productSchema";
import Link from "next/link";
import { Users, LayoutDashboard, Bell, CreditCard, Palette, BarChart3, Check, X, Star } from "lucide-react";

export const metadata = {
  title: "Software Entrenadores Personales · 29,90 €/mes",
  description:
    "Rutinas con IA en menos de 2 min, +240.000 alimentos y app marca blanca en todos los planes. Gratis hasta 5 atletas; de pago desde 29,90 €/mes con IVA.",
  alternates: { canonical: "https://totalgains.es/software-entrenador-personal/" },
  openGraph: {
    title: "Software Entrenadores Personales · Desde 29,90 €/mes | TotalGains",
    description: "Rutinas con IA en <2 min, +240.000 alimentos y app marca blanca en todos los planes. Plan Gratuito de por vida para 5 atletas, sin tarjeta. De pago desde 29,90 €/mes con IVA.",
    url: "https://totalgains.es/software-entrenador-personal/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  { icon: <Users size={22} />, title: "Gestión de clientes centralizada", desc: "Todos tus atletas, su historial, objetivos y progreso en un solo lugar. Sin Excel, sin WhatsApp, sin PDFs sueltos por Google Drive." },
  { icon: <LayoutDashboard size={22} />, title: "Panel Coach Insights", desc: "Dashboard con métricas clave: adherencia semanal, progresión de cargas, renovaciones próximas y alertas tempranas de riesgo de baja." },
  { icon: <Bell size={22} />, title: "Seguimiento automatizado", desc: "El cliente registra entreno en 30 segundos, hace check-in semanal estructurado y el sistema te avisa cuando algo se desvía. Cero persecución por WhatsApp." },
  { icon: <CreditCard size={22} />, title: "Recordatorios de renovación", desc: "El sistema avisa al cliente en su app cuando toca renovar, con win-back automático si no responde en 48h. El cobro efectivo sigue por tu canal habitual." },
  { icon: <Palette size={22} />, title: "App marca blanca incluida en todos los planes", desc: "Tus clientes descargan una app con tu logo, tus colores y tu nombre. Incluida en todos los planes desde 29,90 €/mes con IVA, sin add-on ni pago único." },
  { icon: <BarChart3 size={22} />, title: "IA generativa de rutinas y dietas", desc: "Menos de 2 minutos por cliente. La IA usa tu propia biblioteca de ejercicios y +240.000 alimentos validados en español. Cero alucinaciones." },
];

const useCases = [
  "Entrenadores personales autónomos con 5 a 100+ clientes activos que quieren escalar sin doblar horas",
  "Preparadores físicos que ya cruzaron los 30 clientes y notan que la operativa manual les frena",
  "Coaches online que trabajan desde casa o compaginan con sala y necesitan operativa profesionalizable",
  "Entrenadores que aún usan Excel + WhatsApp y quieren migrar sin perder clientes ni datos",
  "Profesionales que quieren su propia app marca blanca sin programar ni pagar $169 pago único",
];

const faqs = [
  { q: "¿El plan gratuito de TotalGains es una prueba o es permanente?", a: "Es permanente. TotalGains tiene un plan gratuito de 0 €/mes para hasta 5 atletas activos, sin límite de tiempo y sin tarjeta de crédito. No es un periodo de prueba de 14 días: la prueba de 14 días es del plan Pro y es opcional. Los planes de pago empiezan en 29,90 €/mes con IVA incluido." },
  { q: "¿Qué tiene el plan gratuito de TotalGains y en qué se diferencia de la competencia?", a: "TotalGains tiene el plan gratuito más generoso del mercado hispano: 5 atletas de por vida, sin tarjeta de crédito y sin caducidad. Trainerize Basic ofrece 1 cliente; TrainerStudio Free ofrece 3; Harbiz no tiene plan gratuito permanente (arranca a 22,99 €/mes con IVA para el mismo tramo de 5 clientes). Puedes empezar en https://totalgains.es/onboarding/ sin coste." },
  { q: "¿Cuánto cuesta TotalGains y qué incluye cada plan?", a: "El Plan Gratuito de por vida cubre hasta 5 atletas sin tarjeta. Los planes de pago: Starter 29,90 €/mes con IVA (hasta 25 clientes, IA generativa incluida), Pro 89,90 €/mes con IVA (hasta 100 clientes), Unlimited 149,90 €/mes con IVA (clientes ilimitados). Todos los planes de pago incluyen IA de rutinas y dietas, base de +240.000 alimentos, seguimiento de adherencia, recordatorios de renovación y migración asistida gratuita en español. Sin permanencia, sin tarjeta para la prueba de 14 días." },
  { q: "¿Cuánto tiempo lleva aprender a usar el software?", a: "La mayoría de entrenadores están trabajando desde el primer día. La curva de aprendizaje es mínima porque el software está diseñado por un coach en activo, no por un ingeniero. En 15-30 minutos de exploración ya puedes crear tu primer cliente, generar una rutina con IA y programar el primer check-in semanal." },
  { q: "¿Puedo importar mis clientes actuales desde Excel, PDF u otras plataformas?", a: "Sí. Nuestro equipo hace la migración inicial gratis y en español. La IA de TotalGains transcribe rutinas y dietas antiguas en menos de 2 minutos por documento, ya vengas de Excel, Trainerize, Harbiz o MyPT Hub. El tiempo típico de migración para 30-60 clientes es menos de 5 días." },
  { q: "¿Cómo funciona la IA generativa de rutinas y dietas?", a: "La IA genera rutinas personalizadas usando exclusivamente tu propia biblioteca de ejercicios. No inventa movimientos ni contenido genérico. Para dietas usa tu base de alimentos guardados o los +240.000 validados en español (marcas de supermercado incluidas). Tiempo por cliente: menos de 2 minutos de generación + 3-5 minutos de revisión y ajuste. Ahorro neto: 25-40 minutos por cliente frente a diseñar manual." },
  { q: "¿La app marca blanca es realmente incluida o hay letra pequeña?", a: "Está incluida en todos los planes, desde el Starter de 29,90 €/mes con IVA, sin add-ons ni pago único de publicación. Tus clientes descargan una app en iOS y Android donde ven tu logo, tus colores y tu nombre en lugar de TotalGains. Comparativa honesta: Trainerize la ofrece como Custom Branded App con pago único de $169 en Pro; Harbiz la cobra como add-on de 30,24 €/mes con IVA; MyPT Hub la incluye solo en planes de gama alta (~145 €/mes). En TotalGains, incluida en todos los planes desde 29,90 €/mes." },
  { q: "¿Funciona en móvil o solo en ordenador?", a: "Completamente. Tienes app nativa iOS y Android para el coach (gestión de cartera, edición de rutinas, revisión de check-ins) y tus clientes usan su propia app personalizada con tu marca. Panel web disponible para el coach que prefiera trabajar desde ordenador." },
  { q: "¿Qué diferencia a TotalGains de Trainerize, Harbiz o MyPT Hub?", a: "Cuatro diferencias verificables: (1) soporte nativo en español y migración asistida gratis, no traducción de plataforma anglosajona; (2) IA que trabaja con tu biblioteca sin inventar contenido, no un ChatGPT genérico embebido; (3) base de +240.000 alimentos españoles frente a bases USDA en inglés o catálogos pequeños; (4) precios con funcionalidad completa: Pro 89,90 €/mes con IVA incluye lo que en la competencia son add-ons que suman 150-300 €/mes." },
  { q: "¿Puedo cancelar cuando quiera?", a: "Sí. Sin permanencia, sin cláusulas de mínima duración. Puedes cancelar tu suscripción desde tu panel en cualquier momento y mantienes acceso hasta el final del periodo pagado. La prueba de 14 días es gratuita y no requiere tarjeta." },
];

const testimonials = [
  {
    name: "Nacho Pulido",
    handle: "@puli.trainer",
    role: "Entrenador de Fuerza & Resistencia",
    quote: "Tener todo centralizado — clientes, entrenamientos, seguimiento y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana y he pasado de 15 a 40 clientes activos.",
    result: "15 → 40+ clientes, 8-10h/sem ahorradas",
    href: "/casos-de-exito/nacho-pulido/",
  },
  {
    name: "Lorena Eses",
    handle: "@lorenaeses",
    role: "Nutricionista Online",
    quote: "La tranquilidad de saber que está todo automatizado y la ganancia de tiempo al poder delegar en la app la agenda, las citas y las revisiones quincenales. Más de 10 horas semanales ahorradas.",
    result: "10+ h/sem ahorradas, 28K seguidores",
    href: "/casos-de-exito/lorena-eses/",
  },
];

const competencia = [
  { tool: "TotalGains Pro", precio: "89,90 €/mes", ia: true, marca: true, esp: true },
  { tool: "Trainerize Pro 100", precio: "≈352 €/mes", ia: false, marca: false, esp: false },
  { tool: "Harbiz Pro 100 + add-ons", precio: "≈313 €/mes", ia: false, marca: false, esp: true },
  { tool: "MyPT Hub Elite", precio: "≈145 €/mes", ia: false, marca: false, esp: false },
];

export default function SoftwareEntrenadorPersonal() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "Software de gestión integral para entrenadores personales en español: IA generativa de rutinas y dietas, base de +240.000 alimentos, seguimiento de adherencia, recordatorios de renovación y app marca blanca incluida en todos los planes. Migración asistida gratuita.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/software-entrenador-personal/",
        offers: { "@type": "AggregateOffer", lowPrice: 0, highPrice: 149.90, priceCurrency: "EUR", offerCount: 4, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg", offers: [{ "@type": "Offer", name: "TotalGains Gratuito", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=free", description: "Hasta 5 atletas activos de por vida, sin tarjeta de crédito ni caducidad. Incluye las mismas funciones que los planes de pago: app de marca blanca, IA de rutinas y dietas y +240.000 alimentos en español. Lo único que cambia entre planes es el número de atletas." }, { "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" }] },
        aggregateRating: aggregateRatingNode(),
        review: [
          { "@type": "Review", author: { "@type": "Person", name: "Nacho Pulido" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" }, reviewBody: "Tener todo centralizado — clientes, entrenamientos, seguimiento y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana y he pasado de 15 a 40 clientes activos.", datePublished: "2025-03-01", itemReviewed: { "@id": "https://totalgains.es/#software" } },
          { "@type": "Review", author: { "@type": "Person", name: "Lorena Eses" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" }, reviewBody: "He automatizado revisiones, citas y seguimiento. Ahorro más de 10 horas semanales de gestión.", datePublished: "2025-01-01", itemReviewed: { "@id": "https://totalgains.es/#software" } },
        ],
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Software para Entrenadores Personales", item: "https://totalgains.es/software-entrenador-personal/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPageTemplate
        badge="Software para entrenadores"
        h1="Centraliza Clientes, Rutinas y Renovaciones en un Solo Sitio"
        subtitle="Deja de perder horas entre Excel, WhatsApp y Drive. Gestiona atletas, IA de rutinas y dietas, seguimiento estructurado y renovaciones desde una sola plataforma. Software para entrenadores personales en español, desde 29,90 €/mes con IVA."
        features={features}
        useCases={useCases}
        ctaText="Empieza gratis · 5 atletas"
        ctaLocation="lp_software_entrenador"
        faqs={faqs}
      />

      <section id="precios" style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Precios verificados con IVA · sin permanencia</h2>
        <p style={{ textAlign: "center", color: "var(--text-secondary,#aaa)", marginBottom: 32, lineHeight: 1.6 }}>
          Plan Gratuito 5 atletas · o 14 días de prueba Pro sin tarjeta. Cancela cuando quieras.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { name: "Starter", price: "29,90 €/mes", incl: "Hasta 25 clientes activos", extras: ["App marca blanca incluida", "IA generativa incluida", "+240.000 alimentos", "Migración asistida gratis"] },
            { name: "Pro", price: "89,90 €/mes", incl: "Hasta 100 clientes activos", extras: ["Todo lo del Starter", "App marca blanca incluida", "Coach Insights + retención IA"], highlight: true },
            { name: "Unlimited", price: "149,90 €/mes", incl: "Clientes ilimitados", extras: ["Todo lo del Pro", "Multi-coach", "Prioridad soporte"] },
          ].map((plan) => (
            <div key={plan.name} style={{ padding: "24px", border: plan.highlight ? "2px solid var(--primary,#667eea)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 16, background: plan.highlight ? "rgba(102,126,234,0.06)" : "rgba(255,255,255,0.02)" }}>
              {plan.highlight && (
                <span style={{ display: "inline-block", padding: "3px 10px", fontSize: "0.72rem", fontWeight: 700, background: "var(--primary,#667eea)", color: "#fff", borderRadius: 100, marginBottom: 8 }}>MÁS ELEGIDO</span>
              )}
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: "6px 0 8px" }}>{plan.name}</h3>
              <p style={{ fontSize: "1.6rem", fontWeight: 800, margin: "0 0 6px" }}>{plan.price}</p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary,#aaa)", marginBottom: 14 }}>{plan.incl}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                {plan.extras.map((x) => (
                  <li key={x} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "5px 0", fontSize: "0.86rem", color: "var(--text-primary,#ddd)" }}>
                    <Check size={16} style={{ flexShrink: 0, marginTop: 3, color: "#22c55e" }} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <Link href="/onboarding/" style={{ display: "block", padding: "10px 16px", textAlign: "center", background: plan.highlight ? "var(--primary,#667eea)" : "rgba(255,255,255,0.06)", color: plan.highlight ? "#fff" : "var(--text-primary,#ddd)", borderRadius: 100, textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>
                Empieza gratis · 5 atletas
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 32, textAlign: "center" }}>Coaches reales usando TotalGains</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {testimonials.map((t) => (
            <Link key={t.name} href={t.href} style={{ display: "block", padding: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, textDecoration: "none" }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
                {[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="#eab308" color="#eab308" />)}
              </div>
              <blockquote style={{ margin: "0 0 14px", fontSize: "0.95rem", lineHeight: 1.55, color: "var(--text-primary,#ddd)", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary,#ddd)" }}>{t.name}</p>
              <p style={{ margin: "0 0 4px", fontSize: "0.78rem", color: "var(--text-secondary,#aaa)" }}>{t.role} · {t.handle}</p>
              <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--primary-light,#8fa4f5)", fontWeight: 600 }}>{t.result}</p>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8, textAlign: "center" }}>TotalGains vs competencia (100 clientes + marca blanca)</h2>
        <p style={{ textAlign: "center", color: "var(--text-secondary,#aaa)", marginBottom: 24, lineHeight: 1.6 }}>
          Precios reales con marca blanca activa y funcionalidad completa, verificados mayo 2026.
        </p>
        <div style={{ overflowX: "auto", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
            <thead style={{ background: "rgba(255,255,255,0.04)" }}>
              <tr>
                <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Software</th>
                <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Precio 100 cl</th>
                <th style={{ padding: 12, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>IA incluida</th>
                <th style={{ padding: 12, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Marca blanca</th>
                <th style={{ padding: 12, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Español</th>
              </tr>
            </thead>
            <tbody>
              {competencia.map((row, i) => (
                <tr key={row.tool} style={{ background: i === 0 ? "rgba(34,197,94,0.06)" : undefined }}>
                  <td style={{ padding: 12, fontWeight: i === 0 ? 700 : 400 }}>{row.tool}</td>
                  <td style={{ padding: 12 }}>{row.precio}</td>
                  <td style={{ padding: 12, textAlign: "center" }}>{row.ia ? <Check size={16} color="#22c55e" style={{ display: "inline" }} /> : <X size={16} color="#ef4444" style={{ display: "inline" }} />}</td>
                  <td style={{ padding: 12, textAlign: "center" }}>{row.marca ? <Check size={16} color="#22c55e" style={{ display: "inline" }} /> : <X size={16} color="#ef4444" style={{ display: "inline" }} />}</td>
                  <td style={{ padding: 12, textAlign: "center" }}>{row.esp ? <Check size={16} color="#22c55e" style={{ display: "inline" }} /> : <X size={16} color="#ef4444" style={{ display: "inline" }} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ textAlign: "center", marginTop: 20, fontSize: "0.86rem", color: "var(--text-secondary,#aaa)" }}>
          Ver comparativa completa:{" "}
          <Link href="/blog/mejores-software-entrenadores-personales-2026/" style={{ color: "var(--primary-light,#8fa4f5)" }}>Los 5 mejores software para coaches en España 2026</Link>
        </p>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[
            { href: "/ia-entrenador-personal/", label: "IA para entrenadores" },
            { href: "/app-marca-blanca-entrenador-personal/", label: "App marca blanca" },
            { href: "/gestion-clientes-fitness/", label: "Gestión de clientes" },
            { href: "/base-datos-alimentos-fitness/", label: "+240.000 alimentos" },
            { href: "/blog/techo-clientes-entrenador-personal-escalar-2026/", label: "Has tocado techo de clientes" },
            { href: "/blog/top-5-automatizaciones-coach-50-clientes-2026/", label: "Top 5 automatizaciones coach de +50" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
          ))}
        </div>
      </section>
    </>
  );
}
