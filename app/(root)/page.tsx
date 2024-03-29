import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Innovation from "@/components/Innovation";
import UseCases from "@/components/UseCases";
import WhyUs from "@/components/WhyUs";
import BackToTopButton from "@/components/micros/BackToTop";
import React from "react";

const RootPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Innovation />
      <HowItWorks />
      <WhyUs />
      <UseCases />
      <CTA />
      <Footer />
      <BackToTopButton/>
    </div>
  );
};

export default RootPage;
