import AlternativaHarbizContent from "@/components/AlternativaHarbizContent";

export const metadata = {
  title: "Alternativa Harbiz 2026: TotalGains 89,90 € vs Harbiz 313 €",
  description:
    "Harbiz sube a 313 €/mes con marca blanca, IA y vídeos al escalar. TotalGains Pro incluye todo por 89,90 €/mes con IVA. Migración asistida gratis en español.",
  keywords: [
    "alternativa a Harbiz",
    "Harbiz alternativa",
    "Harbiz vs TotalGains",
    "Harbiz opiniones",
    "Harbiz precios 2026",
    "software entrenadores mejor que Harbiz",
    "app entrenador personal Harbiz",
  ],
  alternates: {
    canonical: "https://totalgains.es/alternativas/harbiz/",
  },
  openGraph: {
    title: "Alternativa Harbiz 2026: TotalGains 89,90 € vs Harbiz 313 €",
    description:
      "Harbiz sube a 313 €/mes con marca blanca, IA y vídeos al escalar. TotalGains Pro incluye todo por 89,90 €/mes con IVA.",
    url: "https://totalgains.es/alternativas/harbiz/",
    images: [{ url: 'https://totalgains.es/og-image.jpg', width: 1200, height: 630, alt: 'TotalGains' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlternativaHarbiz() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Perderé los datos de mis clientes al migrar desde Harbiz?", acceptedAnswer: { "@type": "Answer", text: "No. El equipo de TotalGains gestiona la migración completa sin que tus atletas noten el cambio. Importamos rutinas, planes nutricionales, historial de check-ins y datos de contacto. El proceso suele completarse en menos de 24 horas y se incluye gratuitamente en todos los planes." } },
          { "@type": "Question", name: "¿TotalGains penaliza por volumen de clientes como Harbiz?", acceptedAnswer: { "@type": "Answer", text: "No. Los planes son fijos por tramo de atletas (Starter 25, Pro 100, Unlimited ilimitado), sin tarifas escalonadas ni add-ons que se acumulen. Pagas lo mismo el primer mes que el mes 36. En Harbiz, escalar de 50 a 100 clientes implica saltar a otro tramo del plan Pro y añadir el add-on Personaliza tu app (30,24 €/mes con IVA) si quieres app marca blanca." } },
          { "@type": "Question", name: "¿Por qué TotalGains es mejor alternativa a Harbiz para entrenadores en España?", acceptedAnswer: { "@type": "Answer", text: "TotalGains incluye IA que genera rutinas y dietas con tu propia base de datos, app marca blanca en el plan Pro (89,90 €/mes), pagos recurrentes Stripe sin comisiones y soporte en español. Harbiz cobra Personaliza tu app, Nutri AI y Biblioteca de Vídeos como add-ons separados, lo que para funcionalidad equivalente eleva el coste a ~313 €/mes con IVA (verificado mayo 2026)." } },
          { "@type": "Question", name: "¿Cobráis comisiones por las ventas que hago a mis clientes?", acceptedAnswer: { "@type": "Answer", text: "Cero comisiones. Tú usas tu propia cuenta de Stripe y cobras directamente a tus clientes. TotalGains no toca tus ingresos." } },
          { "@type": "Question", name: "¿Vale la pena Harbiz frente a alternativas en español? Qué dicen las opiniones", acceptedAnswer: { "@type": "Answer", text: "Harbiz tiene una valoración de 4,4/5 en Capterra (20 reseñas verificadas en mayo 2026). Los entrenadores destacan su biblioteca de ejercicios y facilidad para planificar entrenamientos, pero las críticas más repetidas son la velocidad de la app en móvil, el precio frente a la profundidad de gestión y la base de alimentos limitada. TotalGains nace específicamente para resolver estos puntos: app móvil optimizada, plan plano sin add-ons y base de +240.000 alimentos personalizable." } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://totalgains.es/" },
          { "@type": "ListItem", position: 2, name: "Alternativas", item: "https://totalgains.es/alternativas/" },
          { "@type": "ListItem", position: 3, name: "Alternativa a Harbiz", item: "https://totalgains.es/alternativas/harbiz/" },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AlternativaHarbizContent />
    </>
  );
}
