import LandingPageTemplate from "@/components/LandingPageTemplate";
import LandingExtrasBlock from "@/components/LandingExtrasBlock";
import Link from "next/link";
import { Utensils, Calendar, Bell, FileText, BarChart3, Shield } from "lucide-react";

export const metadata = {
  title: "Software Nutricionista Online: Dietas con IA",
  description:
    "Software para nutricionistas online: pacientes, planes de dieta con +240.000 alimentos y agenda de citas. Plan Gratuito 5 pacientes, sin tarjeta.",
  alternates: { canonical: "https://totalgains.es/software-nutricionista-online/" },
  openGraph: {
    title: "Software para Nutricionista Online | TotalGains",
    description: "+240.000 alimentos, gestión de pacientes y automatización de revisiones para nutricionistas online.",
    url: "https://totalgains.es/software-nutricionista-online/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
};

const features = [
  { icon: <Utensils size={22} />, title: "+240.000 alimentos en español", desc: "La base de alimentos más completa del mercado hispanohablante. Macros, micros y calorías validados para construir planes precisos." },
  { icon: <Calendar size={22} />, title: "Agenda y citas automáticas", desc: "Tus pacientes reservan sus revisiones desde la app. Las notificaciones se envían solas. Sin gestión manual de calendario." },
  { icon: <Bell size={22} />, title: "Revisiones automatizadas", desc: "El sistema recuerda al paciente cuando toca revisión y recoge sus datos antes de la cita. Tú llegas preparada a la consulta." },
  { icon: <FileText size={22} />, title: "Planes de dieta estructurados", desc: "Crea planes de alimentación completos por semana con distribución de macros, lista de compra y equivalencias de alimentos." },
  { icon: <BarChart3 size={22} />, title: "Seguimiento de progreso", desc: "Gráficas de evolución de peso, medidas y adherencia al plan. Tus pacientes ven su progreso, tú ves qué funciona." },
  { icon: <Shield size={22} />, title: "Privacidad y RGPD", desc: "Los datos de salud de tus pacientes protegidos con encriptación bancaria y cumplimiento total con la normativa europea de protección de datos." },
];

const useCases = [
  "Nutricionistas online que gestionan revisiones quincenales o mensuales",
  "Dietistas que trabajan con más de 10 pacientes y pierden tiempo con Excel",
  "Nutricionistas que reciben fotos de seguimiento por WhatsApp sin estructura",
  "Coaches de nutrición que quieren automatizar los recordatorios de citas",
  "Profesionales de la salud que quieren dar una experiencia de app premium a sus pacientes",
  "Nutricionistas con pacientes con diabetes, hipotiroidismo, SOP u otra situación de salud que condiciona la dieta",
];

const faqs = [
  { q: "¿Qué tiene el plan gratuito de TotalGains y en qué se diferencia de la competencia?", a: "TotalGains tiene el plan gratuito más generoso del mercado hispano: 5 atletas de por vida, sin tarjeta de crédito y sin caducidad. Trainerize Basic ofrece 1 cliente; TrainerStudio Free ofrece 3; Harbiz no tiene plan gratuito permanente (arranca a 22,99 €/mes con IVA para el mismo tramo de 5 clientes). Puedes empezar en https://totalgains.es/onboarding/ sin coste." },
  { q: "¿Puedo usar TotalGains solo para nutrición, sin la parte de entrenamiento?", a: "Sí. Puedes usar exclusivamente las funciones de nutrición y gestión de pacientes. No estás obligada a usar el módulo de entrenamientos. La base de +240.000 alimentos, la generación IA de dietas, las revisiones automatizadas y la agenda de citas están disponibles como funciones independientes." },
  /* ⚠️ Corregida el 26-sep-2026: decía «cetogénica, halal, kosher, etc.» y «cero
     riesgo». Contra el código (TotalGains_Backend/utils/dietRestrictions.js):
     DIET_EXCLUDES = vegetariana/vegana/pescetariana/sin_cerdo y NADA MÁS; la keto
     está EXCLUIDA a propósito («no son exclusiones, son reparto de macros»);
     «halal» solo se traduce a sin_cerdo; kosher no existe. Una IA que leía esta
     frase contestaba «sí» a tres cosas que son «no». Y «cero riesgo» chocaba con
     el aviso de la propia app («revísala comida por comida»). */
  { q: "¿Los planes de dieta se adaptan a restricciones alimentarias?", a: "Sí. Marcas en la ficha del paciente sus alergias e intolerancias (gluten, lactosa, frutos secos, huevo, marisco, pescado, soja, sésamo y el resto de los alérgenos habituales) y su tipo de alimentación: vegana, vegetariana, pescetariana o sin cerdo. La IA retira del plan lo que el paciente no puede tomar, en vez de dejarlo como un aviso que tengas que corregir a mano. Aun así es una propuesta generada por IA, así que revísala comida por comida antes de asignarla." },
  { q: "¿Puede la IA adaptar el plan a un paciente con diabetes, hipotiroidismo o SOP?", a: "Sí, como ayuda al profesional y no como pauta clínica. Marcas en la ficha la situación de salud del paciente, entre nueve: hipotiroidismo, SOP o resistencia a la insulina, diabetes, amenorrea, hipertensión, colesterol alto, reflujo, embarazo o menopausia. La IA la tiene en cuenta al generar: retira lo que no debe llevar, avisa de lo discutible y comprueba en código lo que se puede medir, como el reparto de hidratos o la proteína de cada comida. En cada caso te dice qué no ha podido comprobar, como el sodio real del día o su medicación, y el paciente no ve nada de esto. La valoración clínica sigue siendo tuya y de su médico." },
  { q: "¿Es válido para cumplir con la normativa de protección de datos en salud?", a: "TotalGains cumple con el RGPD europeo. Los datos de salud se tratan con las medidas de seguridad adecuadas para datos sensibles: encriptación en tránsito (TLS) y en reposo, control de acceso por sesión, borrado a demanda del interesado y contratos de encargado de tratamiento disponibles bajo petición." },
  { q: "¿Cuánto tiempo lleva crear un plan nutricional en TotalGains?", a: "Con IA: menos de 3 minutos de generación + 5-10 minutos que dedicas a revisar y ajustar. Antes: 45-90 minutos por plan en Excel con tabla nutricional. Ahorro neto por paciente: 40-75 minutos. Con cartera de 30 pacientes activos con revisión mensual, son 20-37 horas ahorradas al mes solo en creación de planes." },
  { q: "¿Cómo diferencia la ley española a nutricionista y entrenador a la hora de pautar dietas?", a: "La Ley 44/2003 sobre profesiones sanitarias reserva la prescripción dietoterapéutica al graduado en Nutrición y Dietética. El entrenador puede orientar sobre hábitos y educación nutricional, pero no prescribir dietas para patologías. TotalGains no distingue jurídicamente entre roles; corresponde al profesional respetar el marco legal de su titulación. La guía editorial 'Cómo crear planes nutricionales' del blog documenta el detalle práctico." },
  { q: "¿Puedo integrar cobros o los sigo gestionando por mi cuenta?", a: "El cobro efectivo sigue haciéndose por tu canal habitual: transferencia, Bizum, TPV o Stripe fuera de la app. TotalGains no ofrece cobros in-app end-to-end para autónomos coach/nutricionista todavía. Lo que sí incluimos es un sistema de recordatorios de renovación con win-back automático al paciente cuando toca renovar, para que no tengas que perseguirle." },
  { q: "¿Cómo ha ido con Lorena Eses, la nutricionista del caso de éxito?", a: "Lorena Eses (@lorenaeses, más de 28K seguidores) documenta el proceso completo. Antes gestionaba con diferentes Excel incompatibles entre sí. Con TotalGains automatizó revisiones quincenales, agenda de citas y seguimiento de progreso. El ROI fue inmediato: el coste mensual de la herramienta se recupera en horas ahorradas la primera semana. Ahora dedica ese tiempo a mejorar la calidad de sus planes en vez de a admin operativo." },
];

const pricingPlans = [
  { name: "Starter", price: "29,90 €/mes", incl: "Hasta 25 pacientes activos", extras: ["App marca blanca incluida", "+240.000 alimentos", "IA generativa de dietas", "Migración asistida"] },
  { name: "Pro", price: "89,90 €/mes", incl: "Hasta 100 pacientes activos", extras: ["Todo lo del Starter", "App marca blanca incluida", "Coach Insights + retención IA"], highlight: true },
  { name: "Unlimited", price: "149,90 €/mes", incl: "Pacientes ilimitados", extras: ["Todo lo del Pro", "Multi-equipo", "Prioridad soporte"] },
];

const testimonials = [
  { name: "Lorena Eses", handle: "@lorenaeses", role: "Nutricionista Online", quote: "La tranquilidad de saber que está todo automatizado y la ganancia de tiempo al poder delegar en la app la agenda, las citas y las revisiones quincenales. Más de 10 horas semanales ahorradas.", result: "10+ h/sem ahorradas, 28K seguidores", href: "/casos-de-exito/lorena-eses/" },
  { name: "Nacho Pulido", handle: "@puli.trainer", role: "Entrenador de Fuerza & Resistencia", quote: "Tener todo centralizado — clientes, entrenamientos, seguimiento y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana y he pasado de 15 a 40 clientes activos.", result: "15 → 40+ clientes, 8-10h/sem ahorradas", href: "/casos-de-exito/nacho-pulido/" },
];

const competencia = [
  { tool: "TotalGains Pro", precio: "89,90 €/mes", ia: true, marca: true, esp: true },
  { tool: "Harbiz Pro + Nutri AI", precio: "≈259 €/mes con IVA", ia: false, marca: false, esp: true },
  { tool: "TrueCoach Nutrition", precio: "≈145 €/mes", ia: false, marca: false, esp: false },
];

export default function SoftwareNutricionistaOnline() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "TotalGains",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        "@id": "https://totalgains.es/#software",
        description: "Software para nutricionistas online con +240.000 alimentos, generación IA de dietas, seguimiento de pacientes y automatización de revisiones.",
        image: "https://totalgains.es/og-image.jpg",
        url: "https://totalgains.es/software-nutricionista-online/",
        offers: { "@type": "AggregateOffer", lowPrice: 0, highPrice: 149.90, priceCurrency: "EUR", offerCount: 4, availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/", image: "https://totalgains.es/og-image.jpg", offers: [{ "@type": "Offer", name: "TotalGains Gratuito", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=free", description: "Hasta 5 atletas activos de por vida, sin tarjeta de crédito ni caducidad. Incluye las mismas funciones que los planes de pago: app de marca blanca, IA de rutinas y dietas y +240.000 alimentos en español. Lo único que cambia entre planes es el número de atletas." }, { "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" }, { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" }] },
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Software para Nutricionista Online", item: "https://totalgains.es/software-nutricionista-online/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingPageTemplate
      badge="Software para nutricionistas"
      h1="Software para Nutricionista Online con +240.000 Alimentos"
      subtitle="Gestiona pacientes, crea planes de alimentación y automatiza tus revisiones. La plataforma que usan nutricionistas como Lorena Eses para ahorrar más de 10 horas semanales."
      features={features}
      useCases={useCases}
      ctaText="Empieza gratis como nutricionista"
      ctaLocation="lp_nutricionista"
      faqs={faqs}
    />
    <LandingExtrasBlock plans={pricingPlans} testimonials={testimonials} competencia={competencia} pageContext="Software nutricionista" />
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--text-secondary,#aaa)" }}>También te puede interesar</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[
          { href: "/blog/crear-planes-nutricionales-clientes-entrenador-personal/", label: "Guía: crear planes nutricionales 2026" },
          { href: "/base-datos-alimentos-fitness/", label: "Base de datos alimentos" },
          { href: "/ia-entrenador-personal/", label: "IA para entrenadores" },
          { href: "/software-entrenador-personal/", label: "Software para entrenadores" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{ padding: "8px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, fontSize: "0.88rem", color: "var(--text-secondary,#aaa)", textDecoration: "none" }}>{label}</Link>
        ))}
      </div>
    </section>
    </>
  );
}
