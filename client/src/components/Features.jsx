import React from "react";
import makeupImg1 from "../assets/makeup1.jpg";
import hairstyleImg1 from "../assets/hairstyle-feature1.jpg";
import beautyImg1 from "../assets/beauty1.jpg"; // Add Step 3 Image
import photoshootimg1 from '../assets/photoshoot1.jpg'
import { FaArrowDown } from "react-icons/fa6"; // Import Arrow Icon

const Features = () => {
  return (
    <section className="bg-zinc-100 py-12">
      <div className="text-4xl font-bold text-black/60 text-center py-5">
        Your full-day experience
      </div>
      
      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 my-20 px-6">
        
        {/* Step 1: Image Left, Text Right */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <img
            className="w-full max-w-2xl rounded-lg shadow-lg"
            src={makeupImg1}
            alt="Makeup Set"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left lg:col-span-1">
          <h2 className="text-3xl font-bold mb-3 text-black/60">Step 1</h2>
          <h3 className="text-2xl font-bold text-black/60 py-2">Makeup</h3>
          <p className="text-lg font-semibold sm:text-xl md:text-2xl text-black/60 tracking-wide">
            Enhance your natural beauty with our professional makeup artistry.
            Whether it’s for a special occasion, a photoshoot, or a confidence
            boost, our expert makeup artists create stunning looks tailored to
            your unique style. From soft glam to bold transformations, we ensure
            every detail is flawless, leaving you feeling confident, radiant,
            and unforgettable.
          </p>
          <p className="text-lg sm:text-xl font-bold text-black/60 mt-4 hover:text-amber-300 transform hover:scale-105 transition-all duration-300 hover:underline cursor-pointer">
            Learn More &rarr;
          </p>
        </div>

        {/* 🔽 Arrow Divider Between Step 1 & Step 2 */}
        <div className="lg:col-span-3 flex justify-center my-10">
          <FaArrowDown className="text-4xl text-black/50 animate-bounce" />
        </div>

        {/* Step 2: Text Left, Image Right */}
        <div className="flex flex-col justify-center text-center md:text-left lg:col-span-1">
          <h2 className="text-3xl font-bold mb-3 text-black/60">Step 2</h2>
          <h3 className="text-2xl font-bold text-black/60 py-2">Hair Styling</h3>
          <p className="text-lg font-semibold sm:text-xl md:text-2xl text-black/60 tracking-wide">
            Your hairstyle is your crown, and we make sure it shines! Our
            professional hairstylists specialize in effortless waves, sleek
            updos, voluminous curls, and everything in between. Whether you’re
            preparing for a wedding, event, or a stylish everyday look, we bring
            your hair goals to life with precision and artistry. Because when
            your hair looks perfect, you feel unstoppable.
          </p>
          <p className="text-lg sm:text-xl font-bold text-black/60 mt-4 hover:text-amber-300 transform hover:scale-105 transition-all duration-300 hover:underline cursor-pointer">
            Learn More &rarr;
          </p>
        </div>
        <div className="lg:col-span-2 flex items-center justify-center">
          <img
            className="w-full max-h-96 object-cover max-w-2xl rounded-lg shadow-lg"
            src={hairstyleImg1}
            alt="Hairstyle Feature"
          />
        </div>

        {/* 🔽 Arrow Divider Between Step 2 & Step 3 */}
        <div className="lg:col-span-3 flex justify-center my-10">
          <FaArrowDown className="text-4xl text-black/50 animate-bounce" />
        </div>

        {/* Step 3: Image Left, Text Right */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <img
            className="w-full max-h-[400px] object-cover max-w-2xl rounded-lg shadow-lg"
            src={beautyImg1}
            alt="Skincare Feature"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left lg:col-span-1">
          <h2 className="text-3xl font-bold mb-3 text-black/60">Step 3</h2>
          <h2 className="text-2xl font-bold text-black/60 py-2">Shoot your beauty</h2>
          <p className="text-lg font-semibold sm:text-xl md:text-2xl text-black/60 tracking-wide">
          Our beauty experts bring out the best in you, enhancing your natural 
  elegance with expert styling, makeup, and personalized care. 
  Because beauty is confidence, and confidence is unstoppable.
          </p>
          <p className="text-lg sm:text-xl font-bold text-black/60 mt-4 hover:text-amber-300 transform hover:scale-105 transition-all duration-300 hover:underline cursor-pointer">
            Learn More &rarr;
          </p>
        </div>
        <div className="lg:col-span-3 flex justify-center my-10">
          <FaArrowDown className="text-4xl text-black/50 animate-bounce" />
        </div>

        <div className="flex flex-col justify-center text-center md:text-left lg:col-span-1">
          <h2 className="text-3xl font-bold mb-3 text-black/60">Step 4</h2>
          <h3 className="text-2xl font-bold text-black/60 py-2">Choose your photo's</h3>
          <p className="text-lg font-semibold sm:text-xl md:text-2xl text-black/60 tracking-wide">
          Step into the spotlight with our luxury photoshoots. Whether it's a personal portrait, family portrait, fashion editorial, or a special occasion, we craft stunning visuals that showcase your unique elegance. 
          Book your session today!
          </p>
          <p className="text-lg sm:text-xl font-bold text-black/60 mt-4 hover:text-amber-300 transform hover:scale-105 transition-all duration-300 hover:underline cursor-pointer">
            Learn More &rarr;
          </p>
        </div>
        <div className="lg:col-span-2 flex items-center justify-center">
          <img
            className="w-full max-h-96 object-cover max-w-2xl rounded-lg shadow-lg"
            src={photoshootimg1}
            alt="Hairstyle Feature"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
