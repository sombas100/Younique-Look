import React from "react";
import makeoverImg1 from "../../assets/makeupservice4.jpg"; 
import makeoverImg2 from "../../assets/makeup4.jpg"; 
import makeoverImg3 from "../../assets/makeup5.jpg"; 

import { Link } from 'react-router-dom'


const MakeoverDetails = () => {
  return (
    <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
            <div className="w-full md:w-1/2">
              <img className="w-full max-h-[300px] py-4 rounded-lg shadow-lg object-cover" src={makeoverImg1} alt="Cake Smash Photography" />
              <img className="w-full max-h-[300px] py-4 rounded-lg shadow-lg object-cover" src={makeoverImg2} alt="Cake Smash Photography" />
              <img className="w-full max-h-[300px] py-4 rounded-lg shadow-lg object-cover" src={makeoverImg3} alt="Cake Smash Photography" />
            </div>
    
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold text-gray-800">Makeover Experience</h1>
              <p className="mt-4 text-xl font-semibold text-gray-600">
              We specialize in creating timeless, high-quality images that not only reflect your professionalism but also embody the unique style and personality you wish to project. Whether you need a polished corporate headshot, a branding portrait, or a creative editorial image, we tailor each session to align with your vision. Our goal is to craft an enduring visual representation that exudes confidence, credibility, and individuality, ensuring you leave a lasting impression in both personal and professional settings.
              </p>
              <Link to='/contact'>
              <button className="mt-6 px-6 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-800 transition hover:cursor-pointer">
                Book Now
              </button>
              </Link>
            </div>
          </div>
        </section>
  );
};

export default MakeoverDetails;
