import LandingPageTemplate from "@/components/LandingPageTemplate";
import LandingExtrasBlock from "@/components/LandingExtrasBlock";
import Link from "next/link";
import { Smartphone, Apple, Globe, Bell, MessageSquare, TrendingUp } from "lucide-react";

export const metadata = {
  title: "App Entrenador Personal Online 2026",
  description:
    "La app para entrenadores personales online disponible en iOS, Android y web. Tus clientes entrenan con tu propia app de marca blanca. Prueba gratis 14 días.",
  alternates: { canonical: "https://totalgains.es/app-entrenador-personal-online/" },
  openGraph: {
    title: "App para Entrenador Personal Online | TotalGains",
    description: "iOS, Android y web app. Tus clientes tienen su app con tu marca. Empieza gratis hoy.",
    url: "https://totalgains.es/app-entrenador-personal-online/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  { icon: <Smartphone size={22} />, title: "App nativa Android e iOS", desc: "Tus clientes descargan la app desde Google Play y App Store. Experiencia nativa, no un sitio web disfrazado." },
  { icon: <Apple size={22} />, title: "Marca blanca completa", desc: "Tu logo, tus colores y tu nombre en la app. Cuando tu cliente abre la aplicación, ve tu marca, no la nuestra." },
  { icon: <Globe size={22} />, title: "Panel web para el entrenador", desc: "Tú gestionas todo desde el navegador: creas rutinas, revisas progreso y gestionas pagos desde cualquier dispositivo." },
  { icon: <Bell size={22} />, title: "Notificaciones push automáticas", desc: "Tus clientes reciben avisos de entrenos, revisiones y mensajes directamente en su móvil." },
  { icon: <MessageSquare size={22} />, title: "Comunicación integrada", desc: "Feedback de vídeo, notas de progreso y mensajes directo dentro de la app. Sin salir al WhatsApp." },
  { icon: <TrendingUp size={22} />, title: "Progreso visible para el cliente", desc: "Gráficas de peso, medidas y cargas que motivan a tu cliente a seguir. Reducción drástica del abandono." },
];

const useCases = [
  "Entrenadores que trabajan 100% online con clientes en toda España o Latinoamérica",
  "Coaches que quieren dar una experiencia de app profesional a sus clientes",
  "Entrenadores que usan WhatsApp para enviar rutinas y quieren una solución mejor",
  "Profesionales que quieren diferenciarse de la competencia con su propia app",
];

const faqs = [
  { q: "¿Mis clientes tienen que pagar por la app?", a: "No. Tus clientes acceden gratis a la app con tu marca. Tú pagas el plan mensual de TotalGains (Starter 29,90 €/mes con IVA, Pro 89,90 €/mes con IVA o Unlimited 149,90 €/mes con IVA) y ellos usan la plataforma sin coste adicional. Sin publicidad dentro de la app, sin ventas cruzadas, sin cargos ocultos al cliente final." },
  { q: "¿Cuánto tarda en estar lista mi app personalizada?", a: "Tu entorno con marca blanca está activo en minutos. Solo necesitas subir tu logo y elegir tus colores — el resto es automático, generado por IA a partir de tu identidad visual. Tus clientes descargan la app real desde App Store y Google Play con tu nombre y tu logo. Publicación en tiendas incluida en todos los planes, desde 29,90 €/mes con IVA, sin coste adicional." },
  { q: "¿Funciona sin conexión?", a: "Las rutinas del día se pueden consultar sin conexión desde la app móvil. Los datos se sincronizan al recuperar la conexión. La app está diseñada para uso en el gimnasio con conectividad limitada: el cliente puede completar el entrenamiento offline y los datos se suben automáticamente cuando vuelve a tener red." },
  { q: "¿Cómo interactúan mi app y el panel web?", a: "El coach usa el panel web (https://totalgains.es/app/login) desde cualquier navegador para gestionar la cartera, generar rutinas con IA, revisar check-ins semanales y responder mensajes. El cliente usa la app móvil (iOS/Android) para consultar rutina del día, registrar entreno en 30 segundos, subir fotos de progreso y chatear con el coach. Todo se sincroniza en tiempo real. También hay app coach nativa iOS/Android para gestión desde el móvil sin necesidad de ordenador." },
  { q: "¿Qué diferencia esta app de una web app disfrazada de app?", a: "Es app nativa real, no una PWA ni un WebView disfrazado. Publicada en App Store y Google Play con tu identidad, con notificaciones push nativas, gestos táctiles nativos y rendimiento comparable al de una app propia. Los coaches que vienen de Trainerize o Harbiz reportan una fluidez notablemente superior, especialmente en dispositivos Android antiguos donde las PWAs suelen renquear." },
  { q: "¿La app marca blanca va incluida en mi plan o se paga aparte?", a: "Va incluida en todos los planes, también en el Starter de 29,90 €/mes con IVA. No hay add-ons ni pago único de publicación: la app que llega a App Store y Google Play con tu logo, tus colores y tu nombre es la misma en Starter, Pro y Unlimited. Lo único que cambia entre planes es el número de atletas activos (25, 100 o ilimitados) y el nivel de soporte — nunca las funciones." },
  { q: "¿Puedo probar la app sin compromiso?", a: "Sí. 14 días de prueba gratuita sin tarjeta de crédito. Puedes descargarte la app cliente, invitar a 3-5 clientes de prueba y ver el flujo completo. Sin permanencia ni cláusulas de mínima duración. Si al final del período no te convence, no se cobra nada." },
];

const pricingPlans = [
  { name: "Starter", price: "29,90 €/mes", incl: "Hasta 25 clientes activos", extras: ["App marca blanca incluida", "IA generativa incluida", "+240.000 alimentos"] },
  { name: "Pro", price: "89,90 €/mes", incl: "Hasta 100 clientes activos", extras: ["Todo lo del Starter", "App marca blanca incluida", "Publicación en App Store y Google Play"], highlight: true },
  { name: "Unlimited", price: "149,90 €/mes", incl: "Clientes ilimitados", extras: ["Todo lo del Pro", "Multi-coach", "Prioridad soporte"] },
];

const testimonials = [
  { name: "Nacho Pulido", handle: "@puli.trainer", role: "Entrenador de Fuerza & Resistencia", quote: "Que mis clientes tengan la app con mi marca me ha cambiado la percepción de servicio. Ahorro entre 8 y 10 horas a la semana y me siento mucho más profesional.", result: "15 → 40+ clientes, 8-10h/sem ahorradas", href: "/casos-de-exito/nacho-pulido/" },
  { name: "Lorena Eses", handle: "@lorena.eses", role: "Nutricionista Online", quote: "Mis pacientes reciben notificaciones push directamente en su app con mi marca. La comunicación es fluida y ha subido notablemente la percepción de servicio profesional.", result: "10+ h/sem ahorradas, 28K seguidores", href: "/casos-de-exito/lorena-eses/" },
];

const competencia = [
  { tool: "TotalGains Pro", precio: "89,90 €/mes", ia: true, marca: true, esp: true },
  { tool: "Trainerize + Custom App", precio: "≈352 €/mes + $169 único", ia: false, marca: false, esp: false },
  { tool: "Harbiz Pro + Personaliza", precio: "≈271 €/mes con IVA", ia: false, marca: false, esp: true },
];

export default function AppEntrenadorPersonalOnline() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "App para entrenadores personales online disponible en iOS, Android y web. Gestiona clientes, rutinas, nutrición y pagos desde cualquier dispositivo.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/app-entrenador-personal-online/",
        offers: { "@type": "AggregateOffer", lowPrice: 29.90, highPrice: 149.90, priceCurrency: "EUR", offerCount: 3, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg", offers: [{ "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" }] },
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "App para Entrenador Personal Online", item: "https://totalgains.es/app-entrenador-personal-online/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPageTemplate
      badge="App para entrenadores online"
      h1="La App para Entrenador Personal Online con tu Propia Marca"
      subtitle="iOS, Android y web en una sola plataforma. Tus clientes entrenan con una app que lleva tu nombre. Tú gestionas todo desde el panel web."
      features={features}
      useCases={useCases}
      ctaText="Crea tu app gratis"
      ctaLocation="lp_app_entrenador"
      faqs={faqs}
    />
    <LandingExtrasBlock plans={pricingPlans} testimonials={testimonials} competencia={competencia} pageContext="App entrenador online" />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/app-marca-blanca-entrenador-personal/", label: "App marca blanca" },
          { href: "/plataforma-entrenamiento-online/", label: "Plataforma de entrenamiento" },
          { href: "/software-entrenador-personal/", label: "Software para entrenadores" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
