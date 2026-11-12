import LandingPageTemplate from "@/components/LandingPageTemplate";
import LandingExtrasBlock from "@/components/LandingExtrasBlock";
import Link from "next/link";
import { Palette, Smartphone, Zap, Star, Shield, Users } from "lucide-react";

import { ofertasCoach, aggregateRatingNode } from "@/data/productSchema";
import { planesResumen } from "@/data/planesCoach";
export const metadata = {
  title: "App Marca Blanca para Entrenadores con IA",
  description:
    "Tu app fitness con tu nombre, colores y logo, generada por IA en un clic. Incluida en todos los planes. Plan Gratuito 5 atletas, sin tarjeta.",
  alternates: { canonical: "https://totalgains.es/app-marca-blanca-entrenador-personal/" },
  openGraph: {
    type: "website",
    title: "App Marca Blanca para Entrenadores Personales | TotalGains",
    description: "Tu marca en la app de tus clientes: colores, logo y temas visuales generados por IA en un clic. Incluida en todos los planes.",
    url: "https://totalgains.es/app-marca-blanca-entrenador-personal/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  {
    icon: <Palette size={22} />,
    title: "Branding completo en un clic",
    desc: "Inyecta tu logo, colores corporativos y nombre en toda la app. La IA genera los temas visuales automáticamente — no necesitas diseñador ni programador.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "App nativa iOS y Android con tu marca",
    desc: "Tus clientes descargan la app de TotalGains en App Store o Google Play y, al entrar, la ven con tu logo, tus colores y tu nombre. Experiencia profesional desde el primer día.",
  },
  {
    icon: <Star size={22} />,
    title: "Diferenciación real frente a la competencia",
    desc: "Mientras otros entrenadores mandan a sus clientes a apps genéricas, tú ofreces tu propia plataforma. Eso se percibe y se cobra más caro.",
  },
  {
    icon: <Zap size={22} />,
    title: "Configuración en menos de 1 hora",
    desc: "Sin reuniones con agencias, sin meses de desarrollo, sin presupuestos de 5 cifras. Subes tu logo, eliges tus colores y la app está lista.",
  },
  {
    icon: <Shield size={22} />,
    title: "Todos los módulos bajo tu marca",
    desc: "Rutinas, dietas, seguimiento, pagos y chat — todo bajo tu nombre. Tus clientes interactúan con tu marca en cada pantalla, nunca con TotalGains.",
  },
  {
    icon: <Users size={22} />,
    title: "Fidelización automática por percepción de valor",
    desc: "Una app de marca propia aumenta la retención. El cliente siente que usa un producto exclusivo de su entrenador, no una herramienta genérica.",
  },
];

const useCases = [
  "Entrenadores personales que quieren profesionalizar su imagen sin invertir en desarrollo",
  "Coaches con marca personal consolidada que necesitan coherencia visual en todos los canales",
  "Preparadores físicos que compiten con grandes plataformas y quieren diferenciarse",
  "Entrenadores que quieren justificar precios premium con una experiencia de cliente superior",
  "Profesionales que usan apps de terceros y quieren que sus clientes usen SU app, no la de otro",
];

const faqs = [
  { q: "¿Qué tiene el plan gratuito de TotalGains y en qué se diferencia de la competencia?", a: "TotalGains tiene el plan gratuito más generoso del mercado hispano: 5 atletas de por vida, sin tarjeta de crédito y sin caducidad. Trainerize Basic ofrece 1 cliente; TrainerStudio Free ofrece 3; Harbiz no tiene plan gratuito permanente (arranca a 22,99 €/mes con IVA para el mismo tramo de 5 clientes). Puedes empezar en https://totalgains.es/onboarding/ sin coste." },
  {
    q: "¿Mi app aparece en App Store y Google Play con mi nombre?",
    a: "No como una app aparte. Es una sola app, TotalGains, publicada en App Store y Google Play bajo nuestra cuenta. Tus clientes la descargan (o entran por la web) y, al entrar, la ven con tu logo, tus colores y tu nombre. En la tienda y en el icono del móvil pone TotalGains; dentro de la app, todo lleva tu marca. A cambio no tienes que publicar nada, ni pagar la cuenta de desarrollador de Apple (99 USD al año), ni esperar aprobaciones, y va incluida en todos los planes, también en el gratuito.",
  },
  {
    q: "¿Necesito contratar a un diseñador para configurar el branding?",
    a: "No. El sistema de branding con IA genera los temas visuales a partir de tu logo y color principal. Colores primarios, secundarios, acentos, gradientes e iconos se generan automáticamente respetando el algoritmo de tu identidad visual. En la mayoría de los casos, el resultado está listo sin tocar nada más. Si quieres afinar, puedes ajustar cada valor manualmente desde el panel de configuración.",
  },
  {
    q: "¿Puedo cambiar los colores o el logo después de configurarlo?",
    a: "Sí, en cualquier momento. Los cambios de branding se aplican en tiempo real en toda la app sin necesidad de actualización en las tiendas. Cuando tu cliente abre la app la próxima vez, el nuevo logo o los nuevos colores ya están. Cero fricción, cero coordinación con Apple/Google.",
  },
  {
    q: "¿Tiene coste adicional la funcionalidad de marca blanca?",
    a: "No. Incluida en todos los planes, desde el Starter de 29,90 €/mes con IVA, sin add-ons ni pago único de publicación. Comparativa honesta: Trainerize la ofrece como Custom Branded App con pago único de $169 USD en planes Pro; Harbiz la cobra como add-on Personaliza tu app de 30,24 €/mes con IVA o requiere el plan My APP (40-60 €/mes más caro); MyPT Hub la incluye solo en planes de gama alta (~145 €/mes). En TotalGains, incluida en todos los planes desde 29,90 €/mes.",
  },
  {
    q: "¿Qué diferencia hay entre una app marca blanca y una PWA con mi logo?",
    a: "La app marca blanca de TotalGains es app nativa real, no PWA (Progressive Web App). Tus clientes la descargan de App Store o Google Play y, al entrar, la ven con tu marca; tiene notificaciones push nativas, gestos táctiles nativos y rendimiento comparable al de una app propia desarrollada desde cero. Las PWAs con logo suelen renquear en dispositivos Android antiguos, no aparecen en las tiendas (solo por URL) y no aprovechan las capacidades nativas del móvil.",
  },
  {
    q: "¿Los clientes tienen que descargar la app de nuevo si cambio mi logo o mis colores?",
    a: "No. Los cambios de branding se aplican en tiempo real desde el panel de configuración. Tus clientes no necesitan actualizar la app en la tienda: al abrirla, la nueva identidad ya está. Esto también aplica a cambios de nombre comercial siempre que no cambien el ID de app en la tienda (que solo se cambia una vez, al publicar la app).",
  },
  {
    q: "¿Puedo probar la marca blanca sin compromiso?",
    a: "Sí. 14 días de prueba gratuita sin tarjeta de crédito en el plan Pro. Puedes generar tu branding con IA a partir de tu logo, ver la app cliente con tu marca en cuestión de minutos y decidir si el resultado te encaja. Sin permanencia, sin cláusulas de mínima duración; cancelas desde el panel cuando quieras.",
  },
];

const pricingPlans = planesResumen("clientes");

const testimonials = [
  { name: "Nacho Pulido", handle: "@puli.trainer", role: "Entrenador de Fuerza & Resistencia", quote: "Tener todo centralizado — clientes, entrenamientos, seguimiento y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana y he pasado de 15 a 40 clientes activos.", result: "15 → 40+ clientes, 8-10h/sem ahorradas", href: "/casos-de-exito/nacho-pulido/" },
  { name: "Lorena Eses", handle: "@lorenaeses", role: "Nutricionista Online", quote: "La tranquilidad de saber que está todo automatizado y la ganancia de tiempo al poder delegar en la app la agenda, las citas y las revisiones quincenales. Más de 10 horas semanales ahorradas.", result: "10+ h/sem ahorradas, 28K seguidores", href: "/casos-de-exito/lorena-eses/" },
];

const competencia = [
  { tool: "TotalGains Pro (marca blanca incluida, como en todos los planes)", precio: "89,90 €/mes", ia: true, marca: true, esp: true },
  { tool: "Trainerize + Custom Branded App", precio: "≈352 €/mes + $169 único", ia: false, marca: true, esp: false },
  { tool: "Harbiz + Personaliza tu app", precio: "≈271 €/mes con IVA", ia: false, marca: true, esp: true },
];

export default function AppMarcaBlanca() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "App de marca blanca para entrenadores personales: tus clientes descargan la app de TotalGains en iOS y Android y, al entrar, la ven con tu nombre, tu logo y tus colores sin coste extra.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/app-marca-blanca-entrenador-personal/",
        offers: ofertasCoach(),
        aggregateRating: aggregateRatingNode(),
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "App Marca Blanca para Entrenadores", item: "https://totalgains.es/app-marca-blanca-entrenador-personal/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPageTemplate
      badge="App Marca Blanca"
      h1="App Marca Blanca para Entrenadores: tu Marca en la App de tus Clientes"
      subtitle="Tus clientes abren la app y ven tu nombre, tus colores y tu logo. Es la app de TotalGains vestida con tu marca: no publicas nada en las tiendas ni pagas cuenta de desarrollador. La IA genera el branding completo en un clic, sin programar, sin diseñador y sin coste extra."
      features={features}
      useCases={useCases}
      ctaText="Empieza gratis · 5 atletas"
      ctaLocation="lp_marca_blanca"
      faqs={faqs}
    />
    <LandingExtrasBlock plans={pricingPlans} testimonials={testimonials} competencia={competencia} pageContext="App marca blanca" />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/blog/app-marca-blanca-entrenadores-personales/", label: "Guía completa app marca blanca 2026" },
          { href: "/app-entrenador-personal-online/", label: "App entrenador online" },
          { href: "/gestion-clientes-fitness/", label: "Gestión de clientes" },
          { href: "/software-entrenador-personal/", label: "Software para entrenadores" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
