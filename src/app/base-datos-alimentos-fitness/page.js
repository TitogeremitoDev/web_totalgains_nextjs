import LandingPageTemplate from "@/components/LandingPageTemplate";
import Link from "next/link";
import { Apple, Search, Zap, Globe, Shield, BarChart3 } from "lucide-react";

export const metadata = {
  title: "+240.000 Alimentos para Entrenadores Personales",
  description:
    "La base más completa para coaches: +240.000 alimentos validados en español. Dietas precisas con macros y calorías al instante.",
  alternates: { canonical: "https://totalgains.es/base-datos-alimentos-fitness/" },
  openGraph: {
    title: "+240.000 Alimentos para Entrenadores | TotalGains",
    description: "Base de datos nutricional con más de 240.000 alimentos validados en español. Dietas precisas en segundos.",
    url: "https://totalgains.es/base-datos-alimentos-fitness/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  {
    icon: <Apple size={22} />,
    title: "+240.000 alimentos validados en español",
    desc: "La base de datos nutricional más completa del mercado hispanohablante. Alimentos locales, marcas españolas, productos de supermercado y comida preparada — todo etiquetado con macros precisos.",
  },
  {
    icon: <Zap size={22} />,
    title: "Planes nutricionales completos en segundos",
    desc: "Selecciona alimentos, indica el objetivo calórico del cliente y la IA distribuye macros y comidas automáticamente. Lo que antes tardaba 1 hora, ahora son 30 segundos.",
  },
  {
    icon: <Search size={22} />,
    title: "Búsqueda inteligente por nombre, marca o categoría",
    desc: "Encuentra cualquier alimento al instante. El motor de búsqueda reconoce variantes, marcas comerciales y nombres coloquiales en español.",
  },
  {
    icon: <Globe size={22} />,
    title: "Alimentos locales del mercado español",
    desc: "A diferencia de bases de datos anglosajones como USDA, nuestra librería incluye productos habituales del supermercado español, marcas locales y preparaciones típicas de la dieta mediterránea.",
  },
  {
    icon: <Shield size={22} />,
    title: "Datos validados y actualizados",
    desc: "Cada alimento pasa por un proceso de validación nutricional. No hay valores inventados ni macros incorrectos — la precisión importa cuando diseñas planes reales para clientes reales.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Macros, calorías, micronutrientes y más",
    desc: "Cada alimento incluye calorías, proteínas, carbohidratos, grasas, fibra y micronutrientes clave. Información suficiente para cualquier tipo de pauta nutricional.",
  },
];

const useCases = [
  "Entrenadores personales que diseñan pautas de alimentación para sus clientes",
  "Coaches de nutrición que necesitan precisión en macros sin perder tiempo buscando datos",
  "Preparadores físicos que trabajan con atletas y necesitan alimentos locales bien etiquetados",
  "Profesionales que usan otras herramientas con bases de datos en inglés o incompletas",
  "Entrenadores que quieren ofrecer dietas personalizadas sin depender de apps externas como MyFitnessPal",
];

const faqs = [
  {
    q: "¿La base de datos incluye productos de supermercados españoles?",
    a: "Sí. Incluye productos de las principales cadenas españolas (Mercadona, Lidl, Carrefour, Alcampo) con los macros reales del etiquetado, no estimaciones genéricas.",
  },
  {
    q: "¿Puedo añadir alimentos personalizados que no estén en la base?",
    a: "Sí. Puedes crear alimentos personalizados introduciendo los macros manualmente. Quedan guardados en tu biblioteca para usarlos en futuros planes.",
  },
  {
    q: "¿Funciona también para dietas específicas como cetogénica, vegana o sin gluten?",
    a: "Sí. Puedes filtrar por tipo de alimento y las etiquetas de cada producto incluyen información suficiente para adaptar los planes a cualquier restricción dietética.",
  },
  {
    q: "¿La IA genera la dieta completa o solo busca alimentos?",
    a: "La IA genera el plan nutricional completo: distribución de comidas, cantidades y macros por toma, ajustados al objetivo calórico y de macronutrientes del cliente.",
  },
];

export default function BaseDatosAlimentos() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "+240.000 alimentos validados en español con macros y calorías precisos. Base de datos nutricional para entrenadores personales y nutricionistas.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/base-datos-alimentos-fitness/",
        offers: { "@type": "AggregateOffer", lowPrice: 29.90, highPrice: 149.90, priceCurrency: "EUR", offerCount: 3, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", bestRating: "5", worstRating: "1", ratingCount: "3", reviewCount: "3" },
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "+240.000 Alimentos Fitness", item: "https://totalgains.es/base-datos-alimentos-fitness/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPageTemplate
      badge="+240.000 Alimentos"
      h1="+240.000 Alimentos Validados para Crear Dietas de Precisión"
      subtitle="La base de datos nutricional más completa del mercado español. Crea planes de alimentación personalizados con macros exactos en segundos — sin buscar en Google, sin errores, sin perder tiempo."
      features={features}
      useCases={useCases}
      ctaText="Prueba gratis 14 días"
      ctaLocation="lp_alimentos"
      faqs={faqs}
    />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/ia-entrenador-personal/", label: "IA para entrenadores" },
          { href: "/software-nutricionista-online/", label: "Software para nutricionistas" },
          { href: "/software-entrenador-personal/", label: "Software para entrenadores" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
