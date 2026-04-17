import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import ScrollProgress from "@/components/ScrollProgress";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  preload: true,
  variable: "--font-dm-sans",
});

/* ──────────────────────────────────────────────
   METADATA GLOBAL — SEO / OG / TWITTER / CANONICAL
   ────────────────────────────────────────────── */
export const metadata = {
  metadataBase: new URL("https://totalgains.es"),

  title: {
    default: "TotalGains | Software para Entrenadores Personales",
    template: "%s | TotalGains",
  },
  description:
    "La app para entrenadores personales líder. Escala tu negocio fitness con nuestro creador de rutinas con IA, dietas automáticas, pagos recurrentes y tu propia app de fitness marca blanca.",
  keywords: [
    "software para entrenadores",
    "app entrenador personal online",
    "creador de rutinas para entrenadores",
    "alternativa trainerize",
    "software gestion deportiva",
    "app fitness marca blanca",
    "software fitness B2B",
    "app para preparadores físicos",
    "gestión de atletas",
    "dietas automáticas entrenador",
  ],

  // ── Canonical & Alternates ──
  alternates: {
    canonical: "https://totalgains.es/",
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp) ──
  openGraph: {
    title: "TotalGains | El Software Definitivo para Entrenadores Personales",
    description:
      "Delega el 80% del trabajo manual. Escala tu negocio fitness B2B con la IA más potente del mercado. Rutinas con IA, dietas automáticas, cobros y app marca blanca.",
    url: "https://totalgains.es/",
    siteName: "TotalGains",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TotalGains — Ecosistema tecnológico para preparadores físicos",
      },
    ],
  },

  // ── Twitter Cards ──
  twitter: {
    card: "summary_large_image",
    title: "TotalGains | Software para Entrenadores Personales",
    description:
      "Escala tu negocio fitness con IA. Rutinas, dietas, cobros y app marca blanca. Empieza gratis.",
    images: ["/og-image.jpg"],
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification ──
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },

  // ── Icons ──
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Analytics />
      </head>
      <body className={dmSans.className}>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
