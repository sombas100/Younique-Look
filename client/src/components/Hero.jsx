import React from "react";
import HeroBanner from "../assets/younique-hero7.jpg";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative mt-8">
      {/* Background Image */}
      <div>
        <img
          className="w-full h-auto min-h-[400px] md:min-h-[500px] max-h-[600px] object-cover brightness-45"
          src={HeroBanner}
          alt="Hero Background"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col translate-y-3 items-center justify-center text-center text-white px-6">
        <h1 className="translate-y-3 text-4xl lg:text-8xl sm:text-5xl md:text-7xl font-bold drop-shadow-lg tracking-wide">
          Unleash Your Younique Beauty
        </h1>
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mt-8 drop-shadow-md tracking-wider leading-relaxed max-w-[600px]">
          Step into a world where makeup, hairstyling, and photography blend
          seamlessly to capture your most radiant self. Elevate your confidence
          and let your inner glow shine—because you deserve to look and feel
          extraordinary.
        </p>
        <button
          onClick={() => navigate("/services")}
          className="py-4 px-6 mt-6 uppercase tracking-wide bg-amber-300 text-black rounded-4xl text-lg font-bold hover:bg-black hover:text-amber-300 cursor-pointer transition-all ease-in duration-300"
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
