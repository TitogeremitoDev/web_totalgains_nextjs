import HomeContent from "@/components/HomeContent";

/* ──────────────────────────────────────────────
   HOME PAGE — SERVER COMPONENT
   ────────────────────────────────────────────── */
export const metadata = {
  // Title más corto y enfocado — usa el template "%s | TotalGains" de layout.js
  title: "Software para Entrenadores Personales",
  description:
    "Gestiona atletas, diseña rutinas, automatiza seguimientos y escala tu negocio. La plataforma fitness todo-en-uno para entrenadores personales. 14 días gratis sin tarjeta.",
  alternates: {
    canonical: "https://totalgains.es/",
  },
  openGraph: {
    title: "TotalGains — Software para Entrenadores Personales",
    description:
      "Todo lo que necesita un entrenador personal online en una sola plataforma: gestión de atletas, rutinas, dietas, seguimiento y facturación.",
    url: "https://totalgains.es/",
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
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "HealthApplication",
        operatingSystem: "Web, iOS, Android",
        description:
          "Software integral para entrenadores personales. Gestiona atletas, diseña rutinas, automatiza dietas y escala tu negocio fitness desde una sola plataforma.",
        url: "https://totalgains.es",
        inLanguage: "es",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "29.90",
          highPrice: "199.90",
          priceCurrency: "EUR",
          offerCount: "3",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "3",
          reviewCount: "3",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Nacho Pulido" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "Tener todo centralizado — clientes, entrenamientos, pagos y comunicación — en un solo sitio ha cambiado mi forma de trabajar. Ahorro entre 8 y 10 horas a la semana.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Lorena Eses" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "La tranquilidad de saber que está todo automatizado y la ganancia de tiempo al poder delegar en la app la agenda, las citas y las revisiones quincenales. Más de 10 horas semanales ahorradas.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Germán" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "Versatilidad y rapidez. Poder cambiar un ejercicio desde el móvil dándole a dos botones, poder ver cómo van mis atletas con un vistazo.",
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
        url: "https://totalgains.es",
        logo: "https://totalgains.es/logo-optimized.webp",
        sameAs: [
          "https://www.instagram.com/totalgainsfitness/",
          "https://www.tiktok.com/@totalgainsapp",
          "https://www.youtube.com/channel/UCOJehcX1G6jABjONKmXCmbQ",
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
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
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
