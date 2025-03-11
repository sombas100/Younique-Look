import React from "react";
import makeupImg1 from "../assets/makeup1.jpg";
import hairstyleImg1 from "../assets/hairstyle-feature1.jpg";

const Features = () => {
  return (
    <section className="bg-zinc-100 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Row 1: Image Left, Text Right */}
        <div className="flex items-center justify-center">
          <img
            className="w-full max-w-lg rounded-lg shadow-lg"
            src={makeupImg1}
            alt="Makeup Set"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-lg font-semibold sm:text-xl md:text-2xl text-black/60 tracking-wide">
            Enhance your natural beauty with our professional makeup artistry.
            Whether it’s for a **special occasion, a photoshoot, or a confidence
            boost**, our expert makeup artists create stunning looks tailored to
            your unique style. From **soft glam to bold transformations**, we
            ensure every detail is flawless, leaving you feeling **confident,
            radiant, and unforgettable**.
          </p>
          <p className="text-lg sm:text-xl font-bold text-black/60 mt-4 hover:text-amber-300 transform hover:scale-105 transition-all duration-300 hover:underline cursor-pointer">
            Learn More &rarr;
          </p>
        </div>

        {/* Row 2: Text Left, Image Right */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-lg font-semibold sm:text-xl md:text-2xl text-black/60 tracking-wide">
            Your **hairstyle is your crown**, and we make sure it shines! Our
            professional hairstylists specialize in **effortless waves, sleek
            updos, voluminous curls, and everything in between.** Whether you’re
            preparing for a **wedding, event, or a stylish everyday look**, we
            bring your hair goals to life with precision and artistry. Because
            when your **hair looks perfect, you feel unstoppable**.
          </p>
          <p className="text-lg sm:text-xl font-bold text-black/60 mt-4 hover:text-amber-300 transform hover:scale-105 transition-all duration-300 hover:underline cursor-pointer">
            Learn More &rarr;
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-full max-h-96 object-cover max-w-lg rounded-lg shadow-lg"
            src={hairstyleImg1}
            alt="Hairstyle Feature"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
