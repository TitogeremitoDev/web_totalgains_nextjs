/* Sin "use client": este fichero solo coloca secciones. Con la marca, todo lo
   que cuelga de él viajaba al navegador como código aunque no tuviera estado
   (TrustBar, VideoPresentacion). Cada sección que sí lo necesita lleva su
   propio "use client" (revisión de la web 21-nov, mejora 5EC6). */
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import VideoPresentacion from "@/components/VideoPresentacion";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import AppDownload from "@/components/AppDownload";
import ForGymsTeaser from "@/components/ForGymsTeaser";
import dynamic from "next/dynamic";
import RoiCalculatorLazy from "@/components/RoiCalculatorLazy";
import ScrollInitializer from "@/components/ScrollInitializer";
import StickyCTA from "@/components/StickyCTA";
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ComparisonTable = dynamic(() => import("@/components/ComparisonTable"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function HomeContent() {
  return (
    <main>
      <ScrollInitializer />
      <Hero />
      <TrustBar />
      <VideoPresentacion />
      <Stats />
      <BeforeAfter />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <div className="hide-on-mobile">
        <RoiCalculatorLazy />
      </div>
      <Testimonials />
      <AppDownload />
      <ComparisonTable />
      <Pricing />
      <ForGymsTeaser />
      <FAQ />
      <Contact />
      <StickyCTA />
    </main>
  );
}
