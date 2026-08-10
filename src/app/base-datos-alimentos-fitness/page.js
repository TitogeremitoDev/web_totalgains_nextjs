import LandingPageTemplate from "@/components/LandingPageTemplate";
import LandingExtrasBlock from "@/components/LandingExtrasBlock";
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
    a: "Sí. Incluye productos de las principales cadenas españolas (Mercadona, Lidl, Carrefour, Alcampo, Eroski) con los macros reales del etiquetado, no estimaciones genéricas. Reconoce marcas como Hacendado, Deliplus, Bio, Selección, Milbona, Sondey, Freeway, Producto Alcampo, Consumer y Basic. La búsqueda inteligente reconoce nombres coloquiales, marcas comerciales y variantes (por ejemplo escribir 'griego' devuelve yogur griego y skyr).",
  },
  {
    q: "¿Puedo añadir alimentos personalizados que no estén en la base?",
    a: "Sí. Puedes crear alimentos personalizados introduciendo los macros manualmente desde el envase o desde una tabla nutricional profesional. Quedan guardados en tu biblioteca y en la del cliente para usarlos en futuros planes. Cuando el cliente registra un alimento nuevo, tú lo revisas y decides si lo incorporas a tu biblioteca compartida.",
  },
  {
    q: "¿Funciona también para dietas específicas como cetogénica, vegana o sin gluten?",
    a: "Sí. Puedes filtrar por tipo de alimento y las etiquetas de cada producto incluyen información suficiente para adaptar los planes a cualquier restricción dietética. La IA genera dietas respetando restricciones marcadas en el perfil del cliente (alérgenos, intolerancias, preferencias religiosas o éticas). Cero alucinaciones: si un alimento no está en tu base o no cumple la restricción, la IA no lo elige.",
  },
  {
    q: "¿La IA genera la dieta completa o solo busca alimentos?",
    a: "La IA genera el plan nutricional completo: distribución de comidas, cantidades y macros por toma, ajustados al objetivo calórico y de macronutrientes del cliente. Tiempo por plan: menos de 3 minutos de generación + 5-10 minutos que el coach dedica a revisar y ajustar. La comparación con diseñar el plan manualmente en Excel (45-90 min) supone entre 40 y 75 minutos ahorrados por cliente y mes.",
  },
  {
    q: "¿Cuánto cuesta acceder a la base de +240.000 alimentos?",
    a: "Está incluida en todos los planes desde el Starter (29,90 €/mes con IVA hasta 25 clientes). Sin add-ons, sin cuota extra, sin límite de consultas ni de creación de planes nutricionales. La base evoluciona por importaciones mensuales del origen OpenFoodFacts filtrado a España y por contribuciones curadas de la comunidad de coaches y nutricionistas.",
  },
  {
    q: "¿Se compara mejor la base de TotalGains con MyFitnessPal, USDA o FatSecret?",
    a: "MyFitnessPal tiene una base amplia (~14 millones de alimentos) pero con datos crowdsourced sin validación, muchos en inglés y con calorías incorrectas frecuentes. USDA es referencia científica pero solo en inglés y sin marcas de supermercado. FatSecret es intermedio pero anglosajón. TotalGains prioriza la base española validada (+240.000 alimentos), con marcas de supermercado reales y macros del envase — cubre el 90% de lo que compra el cliente español real sin necesidad de traducciones ni ediciones manuales.",
  },
  {
    q: "¿La base también sirve para nutricionistas que no son coaches de entrenamiento?",
    a: "Sí. TotalGains tiene una landing específica para nutricionistas online que usa la misma base de +240.000 alimentos con enfoque en gestión de pacientes, revisiones periódicas, agenda de citas y facturación integrada. El caso de éxito de Lorena Eses documenta el flujo real de una nutricionista con más de 28K seguidores que ahorra +10 h semanales gestionando su cartera con esta base.",
  },
];

const pricingPlans = [
  { name: "Starter", price: "29,90 €/mes", incl: "Hasta 25 clientes activos", extras: ["App marca blanca incluida", "Base de +240.000 alimentos", "IA generativa incluida", "Migración asistida"] },
  { name: "Pro", price: "89,90 €/mes", incl: "Hasta 100 clientes activos", extras: ["Todo lo del Starter", "App marca blanca incluida", "Coach Insights + retención IA"], highlight: true },
  { name: "Unlimited", price: "149,90 €/mes", incl: "Clientes ilimitados", extras: ["Todo lo del Pro", "Multi-coach", "Prioridad soporte"] },
];

const testimonials = [
  { name: "Lorena Eses", handle: "@lorena.eses", role: "Nutricionista Online", quote: "Los planes nutricionales generados con IA a partir de mi propia base de alimentos han cambiado mi día a día. Ahorro más de 10 horas semanales en gestión.", result: "10+ h/sem ahorradas, 28K seguidores", href: "/casos-de-exito/lorena-eses/" },
  { name: "Nacho Pulido", handle: "@puli.trainer", role: "Entrenador de Fuerza & Resistencia", quote: "La base de alimentos con marcas de supermercado español es lo que más me ahorra tiempo. El cliente registra lo que come y yo lo veo sin transcribir nada.", result: "15 → 40+ clientes, 8-10h/sem ahorradas", href: "/casos-de-exito/nacho-pulido/" },
];

const competencia = [
  { tool: "TotalGains (+240.000 alim.)", precio: "29,90 €/mes", ia: true, marca: true, esp: true },
  { tool: "Trainerize (~5.000 alim.)", precio: "≈250 €/mes", ia: false, marca: false, esp: false },
  { tool: "Harbiz (base moderada)", precio: "≈240 €/mes", ia: false, marca: false, esp: true },
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
        offers: { "@type": "AggregateOffer", lowPrice: 29.90, highPrice: 149.90, priceCurrency: "EUR", offerCount: 3, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg", offers: [{ "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" }] },
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
    <LandingExtrasBlock plans={pricingPlans} testimonials={testimonials} competencia={competencia} pageContext="Base de alimentos" />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/ia-entrenador-personal/", label: "IA para entrenadores" },
          { href: "/software-nutricionista-online/", label: "Software para nutricionistas" },
          { href: "/software-entrenador-personal/", label: "Software para entrenadores" },
          { href: "/blog/top-10-alimentos-proteina-por-euro-2026/", label: "Top 10 alimentos proteicos por euro" },
          { href: "/blog/crear-planes-nutricionales-clientes-entrenador-personal/", label: "Crear planes nutricionales" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
