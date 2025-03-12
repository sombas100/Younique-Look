import React from "react";
import makeupImg from "../assets/makeup3.jpg";

const Makeup = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Service Header */}
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-6">
          Professional Makeup Services
        </h1>

        {/* Service Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            className="w-full rounded-lg shadow-lg"
            src={makeupImg}
            alt="Makeup Service"
          />
          <div>
            <p className="text-2xl font-bold tracking-wide text-gray-600 leading-relaxed">
              Elevate your beauty with our expert makeup services. From soft
              glam to bold looks, our professional artists create flawless
              styles tailored to your occasion. Whether it’s for a wedding,
              photoshoot, or event, we ensure you look your best.
            </p>
            <p className="text-2xl font-bold tracking-wide text-gray-600 mt-4">
              Using high-end products and personalized techniques, we craft a
              look that enhances your natural features while matching your
              unique style.
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

export default Makeup;
