import React from "react";
import serviceImg4 from "../../assets/familydetails1.jpg";
import serviceImg5 from "../../assets/family8.jpg";
import serviceImg6 from "../../assets/family9.jpg";

import { Link } from "react-router-dom";

const FamilyDetails = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
        <div className="w-full md:w-1/2">
          <img className="w-full max-h-[200px] py-4 rounded-lg shadow-lg object-cover" src={serviceImg4} alt="Family Photography" />
          <img className="w-full max-h-[200px] py-4 rounded-lg shadow-lg object-cover" src={serviceImg5} alt="Family Photography" />
          <img className="w-full max-h-[200px] py-4 rounded-lg shadow-lg object-cover" src={serviceImg6} alt="Family Photography" />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800">Family Photography</h1>
          <p className="mt-4 text-xl font-semibold text-gray-600">
          Our family photography sessions are all about capturing the love, laughter, and special connections that make your family unique. Whether it’s a milestone celebration, a holiday gathering, or simply a moment to freeze time, we create a relaxed and enjoyable environment where genuine emotions shine through. With a mix of candid and beautifully composed portraits, we focus on preserving the warmth, joy, and little interactions that make your family bond so special. These timeless images will serve as cherished keepsakes, allowing you to relive these precious moments for generations to come.
          </p>
          <Link to='/contact'>
          <button className="cursor-pointer mt-6 px-6 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-800 transition">
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FamilyDetails;
