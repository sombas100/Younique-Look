import React from "react";
import hairImg from "../assets/hairstyle2.jpg";
import { Link } from "react-router-dom";

const Hair = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-black/60 text-center mb-6">
          Professional Hair Styling
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            className="w-full rounded-lg shadow-lg"
            src={hairImg}
            alt="Hair Service"
          />
          <div>
            <p className="text-2xl tracking-wide font-bold text-gray-600 leading-relaxed">
              Whether you need an elegant updo, voluminous curls, or a sleek
              everyday style, our expert hairstylists deliver stunning results.
              We specialize in creating long-lasting, beautiful hairstyles for
              any occasion.
            </p>
            <button className="mt-6 font-semibold text-xl bg-amber-300 text-black py-3 px-6 rounded-md hover:bg-black hover:text-amber-300 transition-all duration-300">
              <Link to="/#pricing">Book Now →</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hair;
