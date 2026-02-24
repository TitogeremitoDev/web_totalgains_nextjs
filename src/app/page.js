"use client";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import LeadMagnet from "@/components/LeadMagnet";
import RoiCalculator from "@/components/RoiCalculator";
import ScrollInitializer from "@/components/ScrollInitializer";

export default function Home() {
  return (
    <main>
      <ScrollInitializer />
      <Hero />
      <Stats />
      <Features />
      <AppShowcase />
      <HowItWorks />
      {/* <LeadMagnet /> */}
      <RoiCalculator />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
