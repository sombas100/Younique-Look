import React from "react";
import makeupImg1 from "../assets/makeup1.jpg";
import hairstyleImg1 from "../assets/hairstyle-feature1.jpg";

const Features = () => {
  return (
    <section className="flex my-50 bg-zinc-100 ">
      <div className="grid grid-cols-2 grid-rows-2 justify-between max-w-full mx-auto gap-60">
        <div className="">
          <img
            className="max-w-[400px] max-h-[400px]"
            src={makeupImg1}
            alt="A picture of a makeup set"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-[400px] h-96 ">
          <p className="text-3xl w-full text-black/60 tracking-wider">
            Enhance your natural beauty with our professional makeup artistry.
            Whether it’s for a special occasion, a photoshoot, or a confidence
            boost, our expert makeup artists create stunning looks tailored to
            your unique style. From soft glam to bold transformations, we ensure
            every detail is flawless, leaving you feeling confident, radiant,
            and unforgettable.
          </p>
          <p className="text-3xl text-black/60 translate-y-16 font-bold hover:text-amber-300 transform hover:scale-110 transition-transform duration-300 hover:underline cursor-pointer">
            Learn More &rarr;
          </p>
        </div>
        <div className="flex flex-col -translate-y-10 items-center justify-center w-[400px] h-96 ">
          <p className="text-3xl text-black/60 tracking-wider">
            Your hairstyle is your crown, and we make sure it shines! Our
            professional hairstylists specialize in effortless waves, sleek
            updos, voluminous curls, and everything in between. Whether you’re
            preparing for a wedding, event, or a stylish everyday look, we bring
            your hair goals to life with precision and artistry. Because when
            your hair looks perfect, you feel unstoppable.
          </p>
          <p className="text-3xl text-black/60 translate-y-16 font-bold hover:text-amber-300 transform hover:scale-110 transition-transform duration-300 hover:underline cursor-pointer">
            Learn More &rarr;
          </p>
        </div>
        <img
          className="max-w-[400px] max-h-[400px] h-[270px] w-[350px] object-cover"
          src={hairstyleImg1}
          alt=""
        />
      </div>
      <div></div>
    </section>
  );
};

export default Features;
