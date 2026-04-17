import LandingPageTemplate from "@/components/LandingPageTemplate";
import { Apple, Search, Zap, Globe, Shield, BarChart3 } from "lucide-react";

export const metadata = {
  title: "+240.000 Alimentos para Entrenadores Personales — Base de Datos Fitness",
  description:
    "La base de datos de alimentos más completa para entrenadores personales: más de 240.000 alimentos validados en español. Crea dietas precisas con macros y calorías automáticos.",
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
  return (
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
  );
}
