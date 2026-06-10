import LandingPageTemplate from "@/components/LandingPageTemplate";
import Link from "next/link";
import { Users, Calendar, Layers, Lock, Palette, CreditCard } from "lucide-react";

export const metadata = {
  title: "Software Gimnasios Pequeños 2026: Multi-Coach",
  description:
    "TotalGains gestiona tu gimnasio pequeño desde una sola plataforma: clases grupales, multi-coach, marca blanca y cobros automáticos. Desde 89,90 €/mes con IVA (hasta 100 socios).",
  keywords: [
    "software gimnasio pequeño",
    "app gestión gimnasio",
    "gestión clases colectivas",
    "alternativa harbiz gimnasios",
    "software multi coach",
    "plataforma centro entrenamiento",
    "software box CrossFit",
    "gestión estudio entrenamiento personal",
  ],
  alternates: { canonical: "https://totalgains.es/para-gimnasios/" },
  openGraph: {
    title: "Software para Gimnasios Pequeños — Multi-Coach + Clases | TotalGains",
    description:
      "La plataforma para gimnasios de barrio, estudios de entrenamiento personal y centros con clases colectivas. Multi-coach, permisos granulares, app marca blanca.",
    url: "https://totalgains.es/para-gimnasios/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains para gimnasios' }],
  },
};

const features = [
  { icon: <Calendar size={22} />, title: "Clases grupales con reserva y waitlist", desc: "Tus socios reservan plaza desde la app. Aforo configurable, lista de espera automática cuando se llena la clase y notificaciones push de hueco disponible." },
  { icon: <Users size={22} />, title: "Multi-coach con clientes asignados", desc: "Cada entrenador del gimnasio gestiona sus propios atletas. La dirección ve el panel global; cada coach solo lo suyo. Sin Excel compartidos, sin solapamientos." },
  { icon: <Lock size={22} />, title: "Permisos granulares por rol", desc: "Define quién puede ver todos los clientes, gestionar facturación o programar clases. Permisos a medida para coach, recepción y dirección." },
  { icon: <Palette size={22} />, title: "App marca blanca para tu gimnasio", desc: "Tus socios usan una app con tu nombre, logo y colores. Reservan clases, ven sus rutinas y comunican con su coach desde un único entorno." },
  { icon: <CreditCard size={22} />, title: "Cobros recurrentes Stripe sin comisiones", desc: "Cuotas mensuales, bonos de 10 clases y suscripciones anuales con cobro automático. Stripe es tu cuenta; nosotros no cobramos comisión sobre tus ventas." },
  { icon: <Layers size={22} />, title: "Rutinas + nutrición para entrenadores del gym", desc: "Cada coach del gimnasio puede generar rutinas y planes nutricionales con IA para sus clientes desde la misma plataforma. Sin pagar por add-ons separados." },
];

const useCases = [
  "Gimnasios de barrio con 50-200 socios y 2-5 entrenadores",
  "Estudios de entrenamiento personal con varios coaches",
  "Centros de tecnificación deportiva con clases dirigidas",
  "Boxes de CrossFit pequeños que quieren centralizar clases + seguimiento individual",
  "Centros de pilates, yoga o funcional que cobran clases sueltas y bonos",
];

const faqs = [
  {
    q: "¿TotalGains soporta clases grupales con reserva y lista de espera?",
    a: "Sí. El módulo de clases grupales permite definir aforo, horario semanal recurrente, monitor asignado y lista de espera automática cuando la clase se llena. Cuando alguien cancela, el sistema avisa al primero de la waitlist por notificación push.",
  },
  {
    q: "¿Cuántos coaches puedo añadir al gimnasio en cada plan?",
    a: "El plan Pro (89,90 €/mes con IVA) cubre hasta 100 atletas con varios coaches sin coste adicional. El plan Unlimited (149,90 €/mes con IVA) elimina cualquier límite y añade prioridad en soporte. No hay tarifa por entrenador adicional.",
  },
  {
    q: "¿Puedo dar permisos diferentes a cada coach del gimnasio?",
    a: "Sí. Los permisos son granulares: cada coach puede tener acceso a ver todos los clientes del gimnasio o solo a los suyos, gestionar facturación o no, programar clases o solo asistirlas. La dirección configura el rol de cada miembro del equipo.",
  },
  {
    q: "¿Cuánto tarda en implementarse TotalGains en un gimnasio?",
    a: "Una configuración base completa (carga de socios, plantillas de rutinas, programación de clases recurrentes, conexión Stripe, branding de la app) suele estar lista en 3-5 días. La migración de datos desde Harbiz, Virtuagym u otra plataforma está incluida y la gestiona soporte en español. Para gimnasios con más de 200 socios o estructura compleja, el plan Unlimited incluye onboarding asistido prioritario que reduce el tiempo a 48-72 horas.",
  },
  {
    q: "¿Incluye marca blanca para el gimnasio o solo para entrenadores individuales?",
    a: "La marca blanca aplica al gimnasio completo. La app que descargan tus socios tiene el logo, nombre y colores del gimnasio. No es la marca del entrenador individual sino la del centro.",
  },
  {
    q: "¿Cuánto cuesta TotalGains para un gimnasio pequeño?",
    a: "Hasta 100 socios activos: plan Pro 89,90 €/mes con IVA. Más de 100 socios o si quieres soporte VIP y migración asistida: plan Unlimited 149,90 €/mes con IVA. Sin permanencia, sin coste por entrenador adicional, sin add-ons separados. Prueba 14 días gratis sin tarjeta.",
  },
];

export default function ParaGimnasios() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://totalgains.es/para-gimnasios/#software",
        name: "TotalGains para Gimnasios",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "GymManagementSoftware",
        operatingSystem: "Web, iOS, Android",
        description:
          "Software de gestión integral para gimnasios pequeños y estudios de entrenamiento: clases grupales con waitlist, multi-coach con permisos granulares, app marca blanca, cobros recurrentes Stripe y módulos de rutinas y nutrición con IA. Diseñado en español para el mercado hispano.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/para-gimnasios/",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: 89.90,
          highPrice: 149.90,
          priceCurrency: "EUR",
          offerCount: 2,
          availability: "https://schema.org/InStock",
          url: "https://totalgains.es/onboarding/",
          image: "https://totalgains.es/og-image.jpg",
        },
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Software para Gimnasios", item: "https://totalgains.es/para-gimnasios/" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPageTemplate
        badge="Software para gimnasios pequeños"
        h1="Software para Gimnasios Pequeños: Multi-Coach, Clases y Marca Blanca"
        subtitle="Gestiona tu gimnasio de barrio, estudio de entrenamiento personal o box pequeño desde una sola plataforma: clases grupales con reserva, multi-coach con permisos, cobros recurrentes y app marca blanca. Desde 89,90 €/mes con IVA (hasta 100 socios)."
        features={features}
        useCases={useCases}
        ctaText="Prueba gratis 14 días"
        ctaLocation="lp_para_gimnasios"
        faqs={faqs}
      />

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 60px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Alternativa real a Harbiz y Virtuagym para gimnasios pequeños</h2>
        <p style={{ color: "var(--text-secondary, #aaa)", lineHeight: 1.7, marginBottom: 16 }}>
          Los gimnasios de barrio y estudios de entrenamiento personal viven en una tierra de nadie: <strong>Harbiz cobra por separado</strong> la marca blanca, la IA de nutrición y la biblioteca de vídeos hasta llegar a ~313 €/mes con IVA para 100 clientes; <strong>Virtuagym</strong> está sobredimensionado para un centro pequeño y obliga a pagar por módulos enterprise que nunca usas; <strong>Trainerize</strong> factura en USD y no está en español. TotalGains se sitúa entre los tres con el plan Pro a 89,90 €/mes (IVA incluido) que cubre 100 socios y todas las funcionalidades clave sin add-ons.
        </p>
        <p style={{ color: "var(--text-secondary, #aaa)", lineHeight: 1.7, marginBottom: 24 }}>
          Comparativa detallada con precios verificados en mayo 2026: <Link href="/alternativas/harbiz/" prefetch={false}>TotalGains vs Harbiz</Link> · <Link href="/alternativas/virtuagym/" prefetch={false}>TotalGains vs Virtuagym</Link> · <Link href="/alternativas/trainerize/" prefetch={false}>TotalGains vs Trainerize</Link>.
        </p>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>3 escenarios reales de uso</h2>
        <div style={{ display: "grid", gap: 20 }}>
          <div style={{ padding: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16 }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>Gimnasio de barrio, 80 socios, 3 entrenadores</h3>
            <p style={{ margin: 0, color: "var(--text-secondary, #aaa)", lineHeight: 1.7 }}>El recepcionista gestiona altas y cobros (rol con permisos de facturación y gestión de clientes). Los 3 coaches programan sus propias rutinas y nutrición con IA y solo ven a sus clientes asignados. La dirección revisa retención y MRR desde el panel global. Coste total para el gimnasio: <strong>89,90 €/mes con IVA</strong>.</p>
          </div>
          <div style={{ padding: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16 }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>Estudio de entrenamiento personal, 40 socios premium, 2 coaches</h3>
            <p style={{ margin: 0, color: "var(--text-secondary, #aaa)", lineHeight: 1.7 }}>Sesiones 1:1 con reserva semanal recurrente, planes personalizados con IA, app con la marca del estudio para que los socios reserven y vean su seguimiento. Cobro mensual automatizado con Stripe. Plan recomendado: <strong>Pro 89,90 €/mes con IVA</strong>.</p>
          </div>
          <div style={{ padding: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16 }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>Box CrossFit pequeño, 150 socios, 4 coaches, clases dirigidas</h3>
            <p style={{ margin: 0, color: "var(--text-secondary, #aaa)", lineHeight: 1.7 }}>WOD diario programado por el headcoach, clases con aforo 12 personas y waitlist, bonos de 10 clases con caducidad, comunicación grupal por canal de gimnasio. Plan recomendado: <strong>Unlimited 149,90 €/mes con IVA</strong> con soporte VIP y prioridad en desarrollo.</p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[
            { href: "/alternativas/harbiz/", label: "TotalGains vs Harbiz" },
            { href: "/alternativas/harbiz/precios/", label: "Precios Harbiz 2026" },
            { href: "/app-marca-blanca-entrenador-personal/", label: "App marca blanca" },
            { href: "/gestion-clientes-fitness/", label: "Gestión de clientes" },
            { href: "/ia-entrenador-personal/", label: "IA para entrenadores" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} prefetch={false} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
          ))}
        </div>
      </section>
    </>
  );
}
