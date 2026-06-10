import LandingPageTemplate from "@/components/LandingPageTemplate";
import Link from "next/link";
import { Users, FileText, CreditCard, Bell, BarChart3, Shield } from "lucide-react";

export const metadata = {
  title: "Gestión de Clientes Fitness para Entrenadores",
  description:
    "Gestiona hasta 100 clientes desde una sola plataforma: rutinas, dietas, cobros recurrentes. App marca blanca incluida desde 89,90 €/mes.",
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
        offers: { "@type": "AggregateOffer", lowPrice: 29.90, highPrice: 149.90, priceCurrency: "EUR", offerCount: 3, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", bestRating: "5", worstRating: "1", ratingCount: "3", reviewCount: "3" },
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
      subtitle="Centraliza el historial, los pagos, las rutinas y el progreso de cada cliente en un perfil estructurado. Dedica menos tiempo a buscar información y más a entrenar."
      features={features}
      useCases={useCases}
      ctaText="Gestiona tus clientes gratis"
      ctaLocation="lp_gestion_clientes"
      faqs={faqs}
    />
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
