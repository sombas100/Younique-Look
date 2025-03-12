import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import CallToAction from "../components/CallToAction";
import PricingPlan from "../components/PricingPlan";

const Home = () => {
  return (
    <div>
      <Hero />

      <Features />
      <Gallery />
      <CallToAction />
      <PricingPlan />
    </div>
  );
};

export default Home;
