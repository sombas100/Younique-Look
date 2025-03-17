import React from "react";
import image1 from "../assets/COMPLIMENTARY-IMAGE.jpg";
import image2 from "../assets/photography2.jpg";
import image3 from "../assets/makeovercta.jpg";

const CallToAction = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto p-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-black/60 font-bold mb-12">
          Why Choose Us
        </h1>

        {/* Grid Layout - 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={image3} alt="Makeover Service" />
            <p className="text-lg py-4 sm:text-xl md:text-2xl text-black/60 font-medium tracking-wide mt-4">
              <span className="font-bold text-black/80">Expert Beauty Artistry</span> – 
              Our skilled makeup artists craft stunning, customized looks for every 
              occasion, ensuring flawless application and long-lasting beauty that 
              enhances your natural features.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <p className="text-lg py-4 sm:text-xl md:text-2xl text-black/60 font-medium tracking-wide mb-4">
              <span className="font-bold text-black/80">Professional Hairstyling</span> – 
              From elegant updos to effortless waves, our hairstylists create styles 
              that complement your personality and event, leaving you feeling confident 
              and camera-ready.
            </p>
            <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={image1} alt="Hairstyling Service" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={image2} alt="Photography Service" />
            <p className="text-lg py-4 sm:text-xl md:text-2xl text-black/60 font-medium tracking-wide mt-4">
              <span className="font-bold text-black/80">High-End Photography</span> – 
              We specialize in capturing your best angles with precision and creativity, 
              ensuring that every shot reflects your radiance, confidence, and unique style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
