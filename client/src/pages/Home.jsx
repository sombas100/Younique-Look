import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeatureHeading from "../components/FeatureHeading";
import Gallery from "../components/Gallery";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureHeading />
      <Features />
      <Gallery />
      <CallToAction />
    </div>
  );
};

export default Home;
