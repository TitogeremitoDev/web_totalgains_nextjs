"use client";

import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import AppDownload from "@/components/AppDownload";
import LeadMagnet from "@/components/LeadMagnet";
import dynamic from "next/dynamic";
const RoiCalculator = dynamic(() => import("@/components/RoiCalculator"), {
  ssr: false,
  loading: () => <div style={{ height: "400px" }} />,
});
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
      <AppDownload />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <Contact />
      <StickyCTA />
    </main>
  );
}
