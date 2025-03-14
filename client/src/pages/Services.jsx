import React from "react";
import banner from "../assets/skincare3.jpg";
import { Link } from "react-router-dom";
import serviceImg1 from "../assets/makeup-set1.jpg";
import serviceImg2 from '../assets/makeupservice1.jpg'
import serviceImg3 from '../assets/makeupservice3.jpg'
import serviceImg4 from '../assets/makeupservice4.jpg'
import serviceImg5 from '../assets/familyservice2.jpg'
import serviceImg6 from '../assets/hairservice1.jpg'
import serviceImg7 from '../assets/makeupservice5.jpg'
import serviceImg8 from '../assets/hairservice2.jpg'
import serviceImg9 from '../assets/photoshootservice1.jpg'
import serviceImg10 from '../assets/familyservice1.jpg'
import serviceImg11 from '../assets/photoshootservice2.jpg'
import serviceImg12 from '../assets/photoshootservice3.jpg'



const services = [
  {
    name: "Full Glam Makeup",
    type: "Makeup",
    description: "Bold, red-carpet-ready looks for special occasions.",
    to: "/services/makeup",
    image: serviceImg1,
  },
  {
    name: "Natural & Soft Glam Makeup",
    type: "Makeup",
    description: "Enhancing your features with a fresh, radiant look.",
    to: "/services/makeup",
    image: serviceImg2,
  },
  {
    name: "Makeup for Photoshoots",
    type: "Makeup",
    description: "HD-ready makeup to ensure you look flawless on camera.",
    to: "/services/makeup",
    image: serviceImg4
  },
  {
    name: "Editorial & Fashion Makeup",
    type: "Makeup",
    description: "High-fashion, runway-inspired looks for photoshoots.",
    to: "/services/makeup",
    image: serviceImg3
  },
  {
    name: "Family & Group hairstyling",
    description: "Coordinated hairdos for group or family portraits.",
    to: "/services/hair",
    image: serviceImg5
  },
  {
    name: "Hairstyling for Photoshoots",
    description: "Perfectly styled hair that lasts throughout the session.",
    to: "/services/hair",
    image: serviceImg6
  },
  {
    name: "Makeover & Transformation Styling",
    description: "Complete hair & makeup look for a dramatic change.",
    to: "/services/hair",
    image: serviceImg7
  },
  {
    name: "Event & Party Hairstyling",
    description: "Chic, elegant, or playful styles for any occasion.",
    to: "/services/hair",
    image: serviceImg8
  },
  {
    name: "Solo Portrait Photoshoots",
    description: "Professional headshots, modeling, or personal branding.",
    to: "/services/photoshoot",
    image: serviceImg9,
  },
  {
    name: "Family Photoshoots",
    description: "Timeless, beautifully captured family moments.",
    to: "/services/photoshoot",
    image: serviceImg10,
  },
  {
    name: "Engagement & Couples Photography",
    description: "Romantic, love-filled captures.",
    to: "/services/photoshoot",
    image: serviceImg12,
  },
  {
    name: "Professional Headshots & Branding",
    description: "For business, social media, and personal branding.",
    to: "/services/photoshoot",
    image: serviceImg11,
  },
];

const Services = () => {
  return (
    <section className="pb-12 bg-gray-100">
      {/* Beauty-Themed Banner Below the Services */}
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-6">
        <img
          className="w-full lg:col-span-3 h-[400px] object-cover brightness-75"
          src={banner}
          alt="Luxury beauty service banner"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-5xl font-bold text-black/60 my-12 text-center">
          Our List of Services
        </h1>

        {/* Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all ease-in"
            >
              {/* Image */}
              {service.image && (
                <img
                  className="w-48 h-48 object-cover rounded-lg md:mr-6"
                  src={service.image}
                  alt={service.name}
                />
              )}

              {/* Text Content */}
              <div className="flex flex-col flex-grow text-center md:text-left">
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
