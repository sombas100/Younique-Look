import React from "react";
import { galleryImages } from "../constants/imageLinks";

const Gallery = () => {
  return (
    <section className="py-12 bg-black hidden md:block">
      <h1 className="text-5xl py-4 mb-3 font-bold text-gray-600 text-center">Our Gallery</h1>
      <div className="max-w-7xl mx-auto px-6">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-72 object-cover hover:brightness-75 transition-all duration-300 ease-in-out"
                src={image.image}
                alt="A compilation of photoshoot photos"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
