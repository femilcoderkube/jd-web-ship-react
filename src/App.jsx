import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseSection";
import HelpSucceedSection from "./components/HelpSucceedSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import ContactSection from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import AboutSection from "./components/About";
import toast, { Toaster } from "react-hot-toast";
import Home from "./components/Home";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    // Create ScrollSmoother
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    // Header show/hide animation
    const showAnim = gsap
      .from("header.header", {
        yPercent: -180,
        paused: true,
        duration: 0.25,
        ease: "power1.ease",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    // Header background change
    ScrollTrigger.create({
      start: 200,
      onEnter: () =>
        gsap.to("header.header", {
          backgroundColor: "var(--body-text-color)",
          top: "0",
          duration: 0.3,
        }),
      onLeaveBack: () =>
        gsap.to("header.header", {
          backgroundColor: "transparent",
          top: "var(--header-top-gap)",
          duration: 0.3,
        }),
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }, []);

  return (
    <Router>
      <Toaster position="top-right" />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Always visible */}
          <Header />
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
               <Home/>
              }
            />

            {/* Contact Page */}
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/about-us" element={<AboutSection />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>

          {/* Always visible */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
