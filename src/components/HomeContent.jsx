"use client";

import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import LeadMagnet from "@/components/LeadMagnet";
import dynamic from "next/dynamic";
const RoiCalculator = dynamic(() => import("@/components/RoiCalculator"), {
  ssr: false,
  loading: () => <div style={{ height: "400px" }} />,
});
import Testimonials from "@/components/Testimonials";
import ScrollInitializer from "@/components/ScrollInitializer";
import StickyCTA from "@/components/StickyCTA";
import ComparisonTable from "@/components/ComparisonTable";

export default function HomeContent() {
  return (
    <main>
      <ScrollInitializer />
      <Hero />
      <TrustBar />
      <Stats />
      <BeforeAfter />
      <Features />
      <AppShowcase />
      <HowItWorks />
      {/* <LeadMagnet /> */}
      <div className="hide-on-mobile">
        <RoiCalculator />
      </div>
      <Testimonials />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <Contact />
      <StickyCTA />
    </main>
  );
}
