import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "TotalGains | Software para Entrenadores Personales",
  description: "La app para entrenadores personales líder. Escala tu negocio fitness con nuestro creador de rutinas con IA, dietas automáticas, pagos recurrentes y tu propia app de fitness marca blanca.",
  keywords: "software para entrenadores, app entrenador personal online, creador de rutinas para entrenadores, alternativa trainerize, software gestion deportiva, app fitness marca blanca",
  openGraph: {
    title: 'TotalGains | El Software Definitivo para Entrenadores Personales',
    description: 'Delega el 80% del trabajo manual. Escala tu negocio fitness B2B con la IA más potente del mercado.',
    url: 'https://totalgains.es',
    siteName: 'TotalGains',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  // Schema Org for Software Application
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TotalGains",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "29.90",
      "priceCurrency": "EUR"
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={dmSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
