import React from "react";
import banner from "../assets/skincare3.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Makeup",
    description:
      "Enhance your natural beauty with our professional makeup artistry. From soft glam to full transformations, we provide personalized makeup services for every occasion.",
    to: "/services/makeup",
  },
  {
    name: "Hair",
    description:
      "Our expert hairstylists create stunning styles, from elegant updos to effortless waves. Whether it's for a wedding, a photoshoot, or everyday glam, we bring your vision to life.",
    to: "/services/hair",
  },
  {
    name: "Photoshoot",
    description:
      "Capture your best angles with our professional photography services. Whether it's for personal branding, editorial shoots, or special events, we ensure picture-perfect results.",
    to: "/services/photoshoot",
  },
  
];

const Services = () => {
  return (
    <section className="py-1 bg-gray-100">
      {/* Beauty-Themed Banner Below the Services */}
      <div className="mt-12">
        <img
          className="w-full h-[400px] object-cover brightness-75"
          src={banner}
          alt="Luxury beauty service banner"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-5xl font-bold text-black/60 m-8 text-center">
          Choose From Our List of Services
        </h1>

        {/* Services List */}
        <div className="space-y-10">
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-300 pb-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Service Info */}
                <div className="text-center md:text-left">
                  <h2 className="text-4xl font-semibold text-gray-800">
                    {service.name}
                  </h2>
                  <p className="text-xl font-semibold tracking-wide text-gray-600 mt-2 max-w-3xl">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <Link to={service.to}>
                  <p className="text-lg sm:text-xl font-bold text-black/60 mt-4 hover:text-amber-300 transform hover:scale-105 transition-all duration-300 hover:underline cursor-pointer">
                    Learn More &rarr;
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
