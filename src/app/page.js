import HomeContent from "@/components/HomeContent";
import { SAME_AS, aggregateRatingNode } from "@/data/productSchema";

/* ──────────────────────────────────────────────
   HOME PAGE — SERVER COMPONENT
   ────────────────────────────────────────────── */
export const metadata = {
  // Title más corto y enfocado — usa el template "%s | TotalGains" de layout.js
  title: "TotalGains — Software para Entrenadores Personales con IA",
  description:
    "Gestiona atletas, rutinas con IA, dietas y seguimiento desde una sola plataforma. Software fitness en español para entrenadores. Plan Gratuito de por vida para 5 atletas, sin tarjeta.",
  alternates: {
    canonical: "https://totalgains.es/",
  },
  openGraph: {
    title: "TotalGains — Software para Entrenadores Personales con IA",
    description:
      "Gestiona atletas, rutinas con IA, dietas y seguimiento desde una sola plataforma. Software fitness en español para entrenadores. Plan Gratuito de por vida para 5 atletas, sin tarjeta.",
    url: "https://totalgains.es/",
    type: "website",
    locale: "es_ES",
    siteName: "TotalGains",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@totalgainsfitness",
    title: "TotalGains — Software para Entrenadores Personales con IA",
    description: "Gestiona atletas, rutinas con IA, dietas y seguimiento desde una sola plataforma. Software fitness en español para entrenadores.",
    images: ["https://totalgains.es/og-image.jpg"],
  },
};

const faqData = [
  // ⚠️ Gemela en FAQ.jsx. Va PRIMERA a propósito: es la desambiguación que las
  // IAs estaban fallando (citaban "prueba de 14 días" como si no hubiera plan
  // free). La primera frase responde sola, sin depender de la pregunta.
  {
    question: "¿El plan gratuito de TotalGains es una prueba o es permanente?",
    answer: "Es permanente. TotalGains tiene un plan gratuito de 0 €/mes para hasta 5 atletas activos, sin límite de tiempo y sin tarjeta de crédito. No es un periodo de prueba de 14 días: la prueba de 14 días es del plan Pro y es opcional. Los planes de pago empiezan en 29,90 €/mes con IVA incluido.",
  },
  {
    question: "¿Qué es TotalGains y cómo funciona como software para entrenadores personales?",
    answer: "TotalGains es una plataforma de gestión deportiva todo-en-uno. Centraliza la gestión de atletas, creación de rutinas con IA, planes nutricionales, seguimiento de progreso y recordatorios de renovación al cliente. Funciona en Android, iOS y Web, y cada entrenador obtiene su propia app de fitness personalizada para sus clientes.",
  },
  // ⚠️ Esta respuesta va DENTRO del schema FAQPage (Google puede mostrarla como
  // rich result) y tiene una gemela en FAQ.jsx: si tocas una, toca la otra.
  {
    question: "¿Cuánto cuesta el software de entrenamiento TotalGains?",
    answer: "Puedes empezar con el Plan Gratuito de TotalGains: hasta 5 atletas de por vida, sin tarjeta y sin caducidad. Es el plan gratuito más generoso del mercado hispano (TrainerStudio ofrece 3, Trainerize Basic solo 1, Harbiz no tiene plan free permanente y cobra 22,99 €/mes con IVA por el mismo tramo de 5 clientes). A partir de ahí, los planes de pago van desde 29,90€/mes (IVA incluido) y todos incluyen exactamente las mismas funciones: IA ilimitada para dietas y rutinas, app marca blanca y base de +240.000 alimentos. Lo único que cambia entre planes es el número de atletas activos (25, 100 o ilimitados) y el nivel de soporte.",
  },
  {
    question: "¿Por qué TotalGains es la mejor alternativa SaaS de fitness del mercado?",
    answer: "A diferencia de Trainerize, Harbiz o MyPT Hub, TotalGains ofrece soporte nativo en español, una base de más de 240.000 alimentos, creador de rutinas con inteligencia artificial, sistema anti-abandono de clientes y tu propia app de marca blanca — todo sin comisiones ocultas ni penalización por volumen de atletas.",
  },
  {
    question: "¿Puedo crear rutinas de entrenamiento y dietas con la IA de TotalGains?",
    answer: "Sí. Nuestro creador de rutinas para entrenadores genera periodizaciones completas en segundos. El generador de dietas utiliza una base de +240.000 alimentos validados y ajusta macros y calorías automáticamente según el perfil del atleta.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer: "¡Por supuesto! No hay compromiso de permanencia en nuestra plataforma fitness. Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu perfil, sin penalizaciones.",
  },
  {
    question: "¿Mis datos y los de mis clientes están seguros en TotalGains?",
    answer: "Absolutamente. Utilizamos encriptación de nivel bancario, servidores globales con alta disponibilidad y cumplimos con el RGPD europeo. Los datos personales de entrenadores y atletas están completamente protegidos.",
  },
  {
    question: "¿En qué dispositivos puedo usar el software de gestión deportiva?",
    answer: "TotalGains está disponible en Android (Google Play), iOS (App Store) y como aplicación web accesible desde cualquier navegador. Tus atletas también acceden desde su propia app móvil personalizada con tu marca.",
  },
  {
    question: "¿Cómo contacto con el soporte técnico de TotalGains?",
    answer: "Puedes contactarnos a través del formulario en esta página, por email a soporte@totalgains.es o desde la app. Los planes Pro y Unlimited tienen soporte prioritario con respuesta en menos de 24 horas.",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      /* ── SoftwareApplication ── */
      {
        "@type": "SoftwareApplication",
        "@id": "https://totalgains.es/#software",
        name: "TotalGains",
        image: "https://totalgains.es/og-image.jpg",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "HealthApplication",
        operatingSystem: "Web, iOS, Android",
        description:
          "Software integral para entrenadores personales. Gestiona atletas, diseña rutinas, automatiza dietas y escala tu negocio fitness desde una sola plataforma.",
        url: "https://totalgains.es",
        inLanguage: "es",
        /* SOLO los 3 planes de coach. Los planes Gym se ven en #pricing tras
           pulsar "Tengo un gimnasio", y ese contenido no está en el HTML
           inicial: marcarlo aquí sería declarar precios que la página no
           enseña al cargar. Las ofertas Gym viven en el schema de
           /para-gimnasios/, donde sí son visibles en el HTML estático. */
        offers: {
          "@type": "AggregateOffer",
          lowPrice: 0,
          highPrice: 149.90,
          priceCurrency: "EUR",
          offerCount: 4,
          availability: "https://schema.org/InStock",
          url: "https://totalgains.es/onboarding/",
          image: "https://totalgains.es/og-image.jpg",
          offers: [
            { "@type": "Offer", name: "TotalGains Gratuito", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=free", description: "Hasta 5 atletas activos de por vida, sin tarjeta de crédito ni caducidad. Incluye las mismas funciones que los planes de pago: app de marca blanca, IA de rutinas y dietas y +240.000 alimentos en español. Lo único que cambia entre planes es el número de atletas." },
            { "@type": "Offer", name: "TotalGains Starter", price: "29.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=starter", description: "Hasta 25 clientes activos, IA generativa y app marca blanca incluidas" },
            { "@type": "Offer", name: "TotalGains Pro", price: "89.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=pro", description: "Hasta 100 clientes activos, IA generativa y app marca blanca incluidas" },
            { "@type": "Offer", name: "TotalGains Unlimited", price: "149.90", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://totalgains.es/onboarding/?plan=unlimited", description: "Clientes ilimitados, IA generativa y app marca blanca incluidas" },
          ],
        },
        aggregateRating: aggregateRatingNode(),
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "RJ Trainer" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
            datePublished: "2026-08-12",
            name: "Una app excelente para entrenadores",
            reviewBody:
              "Una app excelente para dar nuestro servicio. Ofrece todo lo que un entrenador puede necesitar para tener en una sola aplicación todos los datos de tus clientes, alimentación, entrenamientos, seguimiento, control del ciclo menstrual para las propias clientas, formularios de valoración... Hemos probado varias y sin duda esta es la mejor y la más completa. Añadir que Germán, desarrollador de la app, siempre está atento y dispuesto a solucionar cualquier mínimo error que pueda surgir muy rápido y adaptar tu experiencia con la app al máximo. De nuevo, muy recomendable.",
            publisher: {
              "@type": "Organization",
              name: "Trustpilot",
              url: "https://es.trustpilot.com/review/totalgains.es",
            },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Alosquita" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
            datePublished: "2026-05-12",
            name: "Aplicación profesional, mis entrenamientos ahora son una fantasía",
            reviewBody:
              "Me encanta usar esta aplicación es súper intuitiva, fácil de usar y ahorro un montón de tiempo en mis entrenamientos es una fantasía. Mi entrenadora puede gestionarme mis entrenamientos, cambiar ejercicios, mi dieta, consultar mi progreso de forma automática. Estoy encantadísima!",
            publisher: {
              "@type": "Organization",
              name: "Trustpilot",
              url: "https://es.trustpilot.com/review/totalgains.es",
            },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Macarena H" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
            datePublished: "2026-05-12",
            name: "Ha conseguido que adelgace",
            reviewBody:
              "Ha conseguido que adelgace progresivamente he pasado de 120kg a 100 en menos de 3 meses. Con una buena alimentación y esta aplicación maravillosa puedes conseguir unos resultados inmejorables.",
            publisher: {
              "@type": "Organization",
              name: "Trustpilot",
              url: "https://es.trustpilot.com/review/totalgains.es",
            },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Ana García Carrero" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
            datePublished: "2026-05-12",
            name: "Esta aplicación me ha cambiado la vida",
            reviewBody:
              "Esta aplicación me ha cambiado la vida. He cogido hábitos increíbles que no tenía y una disciplina que me faltaba. Lo recomendaría a todo el mundo independientemente de su edad y situación personal.",
            publisher: {
              "@type": "Organization",
              name: "Trustpilot",
              url: "https://es.trustpilot.com/review/totalgains.es",
            },
          },
        ],
        publisher: {
          "@id": "https://totalgains.es/#organization",
        },
      },
      /* ── Organization ── */
      {
        "@type": "Organization",
        "@id": "https://totalgains.es/#organization",
        name: "TotalGains",
        legalName: "Germán Martínez Calvente",
        vatID: "77137460Z",
        url: "https://totalgains.es",
        logo: { "@type": "ImageObject", url: "https://totalgains.es/logo-optimized.webp", width: 140, height: 140 },
        address: {
          "@type": "PostalAddress",
          streetAddress: "C/Sur Nº9 1ª",
          postalCode: "18140",
          addressLocality: "La Zubia",
          addressRegion: "Granada",
          addressCountry: "ES",
        },
        sameAs: SAME_AS,
        contactPoint: {
          "@type": "ContactPoint",
          email: "soporte@totalgains.es",
          contactType: "customer service",
          availableLanguage: "Spanish",
        },
      },
      /* ── FAQPage ── */
      {
        "@type": "FAQPage",
        "@id": "https://totalgains.es/#faq",
        mainEntity: faqData.map((faq, i) => ({
          "@type": "Question",
          "@id": `https://totalgains.es/#faq-${i + 1}`,
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      /* ── WebSite (Sitelinks Search Box) ── */
      {
        "@type": "WebSite",
        "@id": "https://totalgains.es/#website",
        name: "TotalGains",
        url: "https://totalgains.es",
        inLanguage: "es",
        publisher: { "@id": "https://totalgains.es/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://totalgains.es/blog/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeContent />
    </>
  );
}
