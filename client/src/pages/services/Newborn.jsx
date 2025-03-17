import React from 'react';
import portraitImg1 from '../../assets/newborn2.jpg'
import portraitImg2 from '../../assets/newborn3.jpg'
import portraitImg3 from '../../assets/newborn4.jpg'

import { Link } from 'react-router-dom'

const Newborn = () => {
  return (
    <section className="py-12 bg-gray-100">
                  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
                    <div className="w-full md:w-1/2">
                      <img className="w-full h-96 rounded-lg py-4 shadow-lg object-cover" src={portraitImg1} alt="Family Photography" />
                      <img className="w-full h-96 rounded-lg py-4 shadow-lg object-cover" src={portraitImg2} alt="Family Photography" />
                      <img className="w-full h-96 rounded-lg py-4 shadow-lg object-cover" src={portraitImg3} alt="Family Photography" />
                    </div>
            
                    <div className="w-full md:w-1/2">
                      <h1 className="text-5xl font-bold text-gray-800">Newborn Photoshoots</h1>
                      <p className="mt-4 text-xl font-semibold text-gray-600">
                      Capture the delicate beauty and innocence of your little one’s earliest days with our newborn photography sessions. Designed to create a calm, cozy, and safe environment, we gently pose and photograph your baby in beautifully styled settings that highlight their tiny features, soft expressions, and precious first moments. Whether you prefer an intimate at-home session or a professional studio setup, we ensure every detail is perfect, allowing you to treasure these memories forever.
                      </p>
                      <Link to='/contact'>
                      <button className="mt-6 px-6 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-800 transition cursor-pointer">
                        Book Now
                      </button>
                      </Link>
                    </div>
                  </div>
                </section>
  )
}

export default Newborn
