import React from "react";
import image from "../assets/COMPLIMENTARY-IMAGE.jpg";

const CallToAction = () => {
  return (
    <section className="py-12 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-black/60 font-bold">
          Why Choose Us
        </h1>

        {/* Features Section */}
        <div className="mt-8 space-y-6 max-w-3xl">
          <p className="text-lg sm:text-xl md:text-2xl text-black/60 font-medium tracking-wide">
            <span className="font-bold text-black/80">
              Expert Beauty Artistry
            </span>{" "}
            – Our skilled makeup artists craft stunning, customized looks for
            every occasion, ensuring flawless application and long-lasting
            beauty that enhances your natural features.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-black/60 font-medium tracking-wide">
            <span className="font-bold text-black/80">
              Professional Hairstyling
            </span>{" "}
            – From elegant updos to effortless waves, our hairstylists create
            styles that complement your personality and event, leaving you
            feeling confident and camera-ready.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-black/60 font-medium tracking-wide">
            <span className="font-bold text-black/80">
              High-End Photography
            </span>{" "}
            – We specialize in capturing your best angles with precision and
            creativity, ensuring that every shot reflects your radiance,
            confidence, and unique style.
          </p>
        </div>

        {/* Responsive Image */}
        <img
          className="mt-12 w-full max-w-md sm:max-w-lg md:max-w-xl rounded-lg shadow-lg"
          src={image}
          alt="Beauty Services"
        />
      </div>
    </section>
  );
};

export default CallToAction;
