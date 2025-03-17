import React from 'react'
import portraitImg1 from '../../assets/babybump2.jpg'
import portraitImg2 from '../../assets/babybump3.jpg'
import portraitImg3 from '../../assets/babybump4.jpg'
import { Link } from 'react-router-dom'

const BabyBump = () => {

  return (
    <section className="py-12 bg-gray-100">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
                <div className="w-full md:w-1/2">
                  <img className="w-full h-96 rounded-lg py-4 shadow-lg object-cover" src={portraitImg1} alt="Family Photography" />
                  <img className="w-full h-96 rounded-lg py-4 shadow-lg object-cover" src={portraitImg2} alt="Family Photography" />
                  <img className="w-full h-96 rounded-lg py-4 shadow-lg object-cover" src={portraitImg3} alt="Family Photography" />
                </div>
        
                <div className="w-full md:w-1/2">
                  <h1 className="text-5xl font-bold text-gray-800">Baby Bump Photoshoots</h1>
                  <p className="mt-4 text-xl font-semibold text-gray-600">
                  Celebrate the beauty of motherhood with our baby bump photography sessions, designed to capture the magic, love, and anticipation of this incredible journey. Whether you envision a soft, natural outdoor glow, a cozy at-home session, or an elegant studio setting, we tailor each shoot to reflect your unique style and personality. With expert guidance on posing, flattering lighting, and a warm, relaxed atmosphere, we create timeless images that highlight the strength, beauty, and joy of pregnancy. These cherished moments will serve as a lasting reminder of the deep connection between you and your little one before they arrive.
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

export default BabyBump
