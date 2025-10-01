import React from "react";
import HeroSection from "./HeroSection";
import WhyChooseSection from "./WhyChooseSection";
import HelpSucceedSection from "./HelpSucceedSection";
import HowItWorksSection from "./HowItWorksSection";
import FeaturesSection from "./FeaturesSection";
import PricingSection from "./PricingSection";
import TestimonialSection from "./TestimonialSection";
import PartnersSection from "./PartnersSection";
import "../css/home.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <HelpSucceedSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialSection />
      <PartnersSection />
    </>
  );
}
