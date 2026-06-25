import ParaGimnasiosContent from "@/components/ParaGimnasiosContent";
import "./para-gimnasios.css";

export const metadata = {
  title: "Software Gimnasios Pequeños 2026: Multi-Coach",
  description:
    "Software para gimnasios pequeños y boutique: clases con reserva, multi-coach, app marca blanca y cobros Stripe. Desde 149 €/mes con IVA.",
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
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains para gimnasios" }],
  },
};

const faqs = [
  {
    q: "¿TotalGains soporta clases grupales con reserva y lista de espera?",
    a: "Sí. El módulo de clases grupales permite definir aforo, horario semanal recurrente, monitor asignado y lista de espera automática cuando la clase se llena. Cuando alguien cancela, el sistema avisa al primero de la waitlist por notificación push.",
  },
  {
    q: "¿Cuántos coaches puedo añadir al gimnasio en cada plan?",
    a: "Todos los planes Gym incluyen coaches ilimitados sin coste adicional por entrenador. La tarifa solo escala por número de socios activos: Gym Starter (menos de 100 socios) 149 €/mes con IVA, Gym Pro (100-200 socios) 199 €/mes con IVA, Gym Elite (más de 200 socios) 249 €/mes con IVA. No hay tarifa por entrenador adicional en ningún plan.",
  },
  {
    q: "¿Puedo dar permisos diferentes a cada coach del gimnasio?",
    a: "Sí. Los permisos son granulares: 4 booleanos por coach (ver todos los clientes, gestionar facturación, gestionar clases, gestionar clientes). La dirección configura el rol de cada miembro del equipo.",
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
    a: "TotalGains Gym tiene 3 planes según número de socios activos, todo IVA incluido: Gym Starter (hasta 100 socios) 149 €/mes, Gym Pro (100-200 socios) 199 €/mes y Gym Elite (más de 200 socios) 249 €/mes. Todos los planes incluyen coaches ilimitados, multi-coach con permisos granulares, clases con reserva y waitlist, app marca blanca del gimnasio, IA de rutinas y nutrición y migración asistida en español. Sin permanencia, sin coste por entrenador adicional, sin add-ons separados.",
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
          lowPrice: 149,
          highPrice: 249,
          priceCurrency: "EUR",
          offerCount: 3,
          availability: "https://schema.org/InStock",
          url: "https://totalgains.es/para-gimnasios/",
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
      <ParaGimnasiosContent />
    </>
  );
}
