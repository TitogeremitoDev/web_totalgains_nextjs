import HomeContent from "@/components/HomeContent";

/* ──────────────────────────────────────────────
   HOME PAGE — SERVER COMPONENT
   ────────────────────────────────────────────── */
export const metadata = {
  // Title más corto y enfocado — usa el template "%s | TotalGains" de layout.js
  title: "TotalGains — Software para Entrenadores Personales con IA",
  description:
    "Gestiona atletas, rutinas con IA, dietas y cobros desde una sola plataforma. Software fitness en español para entrenadores. 14 días gratis sin tarjeta.",
  alternates: {
    canonical: "https://totalgains.es/",
  },
  openGraph: {
    title: "TotalGains — Software para Entrenadores Personales",
    description:
      "Todo lo que necesita un entrenador personal online en una sola plataforma: gestión de atletas, rutinas, dietas, seguimiento y facturación.",
    url: "https://totalgains.es/",
    type: "website",
    locale: "es_ES",
    siteName: "TotalGains",
    images: [{ url: "https://totalgains.es/og-image.jpg", width: 1200, height: 630, alt: "TotalGains" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@totalgainsapp",
    title: "TotalGains — Software para Entrenadores Personales",
    description: "Gestión de atletas, IA para rutinas y dietas, facturación. Todo en una sola plataforma.",
    images: ["https://totalgains.es/og-image.jpg"],
  },
};

const faqData = [
  {
    question: "¿Qué es TotalGains y cómo funciona como software para entrenadores personales?",
    answer: "TotalGains es una plataforma de gestión deportiva todo-en-uno. Centraliza la gestión de atletas, creación de rutinas con IA, planes nutricionales, seguimiento de progreso y cobros automáticos. Funciona en Android, iOS y Web, y cada entrenador obtiene su propia app de fitness personalizada para sus clientes.",
  },
  {
    question: "¿Cuánto cuesta el software de entrenamiento TotalGains?",
    answer: "Ofrecemos planes desde 29,90€/mes (IVA incluido) con todas las herramientas profesionales. Puedes empezar con un Plan Gratuito de por vida para hasta 3 atletas, sin necesidad de tarjeta de crédito. Todos los planes incluyen IA ilimitada para dietas y rutinas.",
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
        offers: {
          "@type": "AggregateOffer",
          lowPrice: 29.90,
          highPrice: 149.90,
          priceCurrency: "EUR",
          offerCount: 3,
          availability: "https://schema.org/InStock",
          url: "https://totalgains.es/onboarding/",
          image: "https://totalgains.es/og-image.jpg",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.0",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "3",
          reviewCount: "3",
        },
        review: [
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
        sameAs: [
          "https://www.instagram.com/totalgainsfitness/",
          "https://www.tiktok.com/@totalgainsapp",
          "https://www.youtube.com/channel/UCOJehcX1G6jABjONKmXCmbQ",
          "https://es.trustpilot.com/review/totalgains.es",
          "https://www.wikidata.org/wiki/Q139823576",
        ],
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
