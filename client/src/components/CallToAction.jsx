import React from "react";
import image from "../assets/COMPLIMENTARY-IMAGE.jpg";

const CallToAction = () => {
  return (
    <section className="flex bg-zinc-100">
      <div className="flex max-w-full mx-auto my-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl uppercase text-black/60">Why choose us</h1>
          <p className="text-3xl flex-wrap text-black/60 mt-6 font-medium w-1/2 tracking-wide">
            <span className="text-3xl font-bold text-black/60">
              Expert Beauty Artistry{" "}
            </span>
            – Our skilled makeup artists craft stunning, customized looks for
            every occasion, ensuring flawless application and long-lasting
            beauty that enhances your natural features.
          </p>
          <p className="text-3xl flex-wrap text-black/60 mt-6 font-medium w-1/2 tracking-wide">
            <span className="text-3xl font-bold text-black/60">
              Professional Hairstyling
            </span>{" "}
            – From elegant updos to effortless waves, our hairstylists create
            styles that complement your personality and event, leaving you
            feeling confident and camera-ready.
          </p>
          <p className="text-3xl flex-wrap text-black/60 mt-6 font-medium w-1/2 tracking-wide">
            <span className="text-3xl font-bold text-black/60">
              High-End Photography{" "}
            </span>
            – We specialize in capturing your best angles with precision and
            creativity, ensuring that every shot reflects your radiance,
            confidence, and unique style.
          </p>
          <img className="mt-14" src={image} alt="" />
          <button className="py-4 px-6 mt-6 uppercase tracking-wide bg-amber-300 text-black rounded-4xl text-lg font-bold hover:bg-black hover:text-amber-300 cursor-pointer transition-all ease-in duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
