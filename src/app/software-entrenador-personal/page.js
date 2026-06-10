import LandingPageTemplate from "@/components/LandingPageTemplate";
import Link from "next/link";
import { Users, LayoutDashboard, Bell, CreditCard, Palette, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Software para Entrenadores Personales 2026",
  description:
    "Software para entrenadores personales en español: rutinas con IA, dietas, app marca blanca y pagos Stripe. Desde 29,90 €/mes. Prueba gratis 14 días.",
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
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "Software de gestión integral para entrenadores personales: clientes, rutinas, dietas y pagos en una sola plataforma en español.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/software-entrenador-personal/",
        offers: { "@type": "AggregateOffer", lowPrice: 29.90, highPrice: 149.90, priceCurrency: "EUR", offerCount: 3, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", bestRating: "5", worstRating: "1", ratingCount: "3", reviewCount: "3" },
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
      h1="El Software para Entrenadores Personales que Centraliza Todo"
      subtitle="Gestiona atletas, rutinas, dietas y seguimiento desde una sola plataforma. Diseñada para entrenadores que quieren trabajar con más clientes sin más horas de administración."
      features={features}
      useCases={useCases}
      ctaText="Prueba gratis 14 días"
      ctaLocation="lp_software_entrenador"
      faqs={faqs}
    />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/ia-entrenador-personal/", label: "IA para entrenadores" },
          { href: "/app-marca-blanca-entrenador-personal/", label: "App marca blanca" },
          { href: "/gestion-clientes-fitness/", label: "Gestión de clientes" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
