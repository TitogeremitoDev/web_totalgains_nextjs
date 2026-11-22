/* /para-gimnasios/: solo coloca las secciones, una por fichero en
   components/para-gimnasios/.

   Antes era UN fichero de 1.840 líneas con "use client" arriba, así que la
   página entera funcionaba en el navegador aunque casi todo es texto fijo
   (revisión de la web 21-nov, mejora 2236). Ahora solo llevan código las
   cinco piezas que se mueven: barra de progreso, contadores, cabecera
   (inclinación de la captura), galería con pestañas y preguntas
   desplegables. El resto se pinta al compilar.

   Las apariciones al bajar son la clase .aparece (CSS puro, globals.css);
   ya no se carga framer-motion en esta página. */
import ScrollProgress from "./para-gimnasios/ScrollProgress";
import HeroSection from "./para-gimnasios/HeroSection";
import DemoVideoSection from "./para-gimnasios/DemoVideoSection";
import CobrosVideoSection from "./para-gimnasios/CobrosVideoSection";
import EntrenosVideoSection from "./para-gimnasios/EntrenosVideoSection";
import TareasVideoSection from "./para-gimnasios/TareasVideoSection";
import ProblemSection from "./para-gimnasios/ProblemSection";
import SolutionSection from "./para-gimnasios/SolutionSection";
import ProductGallerySection from "./para-gimnasios/ProductGallerySection";
import HowItWorksSection from "./para-gimnasios/HowItWorksSection";
import WhoIsItForSection from "./para-gimnasios/WhoIsItForSection";
import ComparisonSection from "./para-gimnasios/ComparisonSection";
import PricingSection from "./para-gimnasios/PricingSection";
import RealScenariosSection from "./para-gimnasios/RealScenariosSection";
import CompetitorsBlogSection from "./para-gimnasios/CompetitorsBlogSection";
import FAQSection from "./para-gimnasios/FAQSection";
import FinalCTASection from "./para-gimnasios/FinalCTASection";
import RelatedSection from "./para-gimnasios/RelatedSection";
import CasoGimnasio from "@/components/CasoGimnasio";
import TeLlamamosGimnasio from "@/components/TeLlamamosGimnasio";
import { CASOS_GIMNASIO } from "./para-gimnasios/datos";

export default function ParaGimnasiosContent() {
  return (
    <div className="pg" style={{ overflow: "hidden" }}>
      <ScrollProgress />
      <main>
        <HeroSection />
        <DemoVideoSection />
        <EntrenosVideoSection />
        <CasoGimnasio casos={CASOS_GIMNASIO} fecha="octubre de 2026" />
        <CobrosVideoSection />
        <TareasVideoSection />
        <ProblemSection />
        <SolutionSection />
        <ProductGallerySection />
        <HowItWorksSection />
        <WhoIsItForSection />
        <ComparisonSection />
        <PricingSection />
        <RealScenariosSection />
        <CompetitorsBlogSection />
        <TeLlamamosGimnasio />
        <FAQSection />
        <FinalCTASection />
        <RelatedSection />
      </main>
    </div>
  );
}
