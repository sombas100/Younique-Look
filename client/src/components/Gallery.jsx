import React from "react";
import { galleryImages } from "../constants/imageLinks";

const Gallery = () => {
  return (
    <section className="flex mb-20">
      <div className="grid grid-cols-4 grid-rows-4 max-w-full mx-auto gap-4">
        {galleryImages.map((image) => (
          <div className="w-96 h-auto">
            <img
              className="w-full h-full object-cover"
              src={image.image}
              alt="A compilation of photoshoot photos"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
