import React from "react";
import photoshootImg from "../assets/photoshoot1.jpg";

const Photoshoot = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-black/60 text-center mb-6">
          Professional Photoshoots
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            className="w-full rounded-lg shadow-lg"
            src={photoshootImg}
            alt="Photoshoot Service"
          />
          <div>
            <p className="text-2xl font-bold tracking-wide text-gray-600 leading-relaxed">
              Capture timeless memories with our expert photography services.
              Whether it's a personal photoshoot, editorial project, or brand
              shoot, we ensure stunning results that reflect your unique style.
            </p>
            <button className="mt-6 bg-amber-300 text-black py-3 px-6 rounded-md font-semibold text-xl hover:bg-black hover:text-amber-300 transition-all duration-300 cursor-pointer">
              Book Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photoshoot;
