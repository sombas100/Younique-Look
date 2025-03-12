import React from "react";
import skincareImg from "../assets/skincare4.jpg";

const Skincare = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-6">
          Skincare Treatments
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            className="w-full rounded-lg shadow-lg"
            src={skincareImg}
            alt="Skincare Service"
          />
          <div>
            <p className="text-2xl font-bold tracking-wide text-gray-600 leading-relaxed">
              Achieve glowing, healthy skin with our premium skincare
              treatments. From deep hydration to anti-aging solutions, we offer
              personalized skincare services designed for your unique needs.
            </p>
            <button className="mt-6 bg-amber-300 text-black py-3 px-6 rounded-md font-semibold text-xl hover:bg-black hover:text-amber-300 transition-all duration-300">
              Book Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skincare;
