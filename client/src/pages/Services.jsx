import React from "react";
import banner from "../assets/servicebanner2.jpg";
import { Link } from "react-router-dom";
import serviceImg1 from "../assets/makeup-set1.jpg";
import serviceImg2 from "../assets/portrait2.jpg";
import serviceImg3 from "../assets/boudoir2.jpg";
import serviceImg4 from "../assets/family5.jpg";
import serviceImg5 from "../assets/cakesmash1.jpg";
import serviceImg6 from "../assets/family2.jpg";
import serviceImg7 from "../assets/newborn1.jpg";

const services = [
  {
    name: "Makeover",
    type: "Makeup",
    description: "All our professionals are all here for one reason, to create a relaxed environment where you can enjoy a day of make-up and fun followed by a professional photography experience.",
    to: "/services/makeover",
    image: serviceImg1,
  },
  {
    name: "Portraits",
    type: "Hair",
    description: "Our portrait photography sessions are designed to capture your authentic personality, style, and confidence.",
    to: "/services/portrait",
    image: serviceImg2,
  },
  {
    name: "Boudoir",
    type: "Boudoir",
    description: "Our boudoir photography sessions are designed to empower, inspire, and capture your natural beauty in an intimate, elegant, and artistic way.",
    to: "/services/boudoir",
    image: serviceImg3,
  },
  {
    name: "Family",
    type: "Family",
    description: "Our family photography sessions are all about love, laughter, and creating lasting memories.",
    to: "/services/family",
    image: serviceImg4,
  },
  {
    name: "Cake Smash",
    type: "photoshoot",
    description: "Our cake smash photography sessions are the perfect way to capture the joy, laughter, and messy fun of your little one’s big day!",
    to: "/services/cake-smash",
    image: serviceImg5,
  },
  {
    name: "Baby Bump",
    type: "photoshoot",
    description: "Celebrate the Beauty of Motherhood with a Timeless Maternity Photoshoot.",
    to: "/services/baby-bump",
    image: serviceImg6,
  },
  {
    name: "Newborn",
    type: "photoshoot",
    description: "Precious First Moments, Captured Forever.",
    to: "/services/newborn",
    image: serviceImg7,
  },
];

const Services = () => {
  return (
    <section className="pb-12 bg-gray-100">
      {/* Beauty-Themed Banner */}
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-6">
        <img
          className="w-full bg-center lg:col-span-3 h-[300px] object-cover brightness-75"
          src={banner}
          alt="Luxury beauty service banner"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-5xl font-bold text-black/60 my-12 text-center">
          Our List of Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all ease-in"
            >
              {/* Image (Fixed Size) */}
              {service.image && (
                <div className="w-56 h-56 md:w-64 md:h-64 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={service.image}
                    alt={service.name}
                  />
                </div>
              )}

              {/* Text Content */}
              <div className="flex flex-col flex-grow text-center md:text-left md:ml-6">
                <h2 className="text-3xl font-semibold text-gray-800 hover:text-amber-300 transition-all ease-in cursor-pointer">
                  {service.name}
                </h2>
                <p className="text-lg text-gray-600 mt-2">{service.description}</p>

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
