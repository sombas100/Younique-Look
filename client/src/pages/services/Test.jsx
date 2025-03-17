import React from 'react'
import portraitImg1 from '../../assets/Fotolia1.jpg'
import portraitImg2 from '../../assets/Fotolia2.jpg'
import portraitImg3 from '../../assets/Fotolia3.jpg'


const test = () => {
  return (
    <section className="py-52 bg-gray-100">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
                <div className="relative w-full md:w-1/2 lg:grid lg:grid-cols-2 -translate-y-55">
                  <img className="absolute top-40 -left-50 z-30 w-full h-96 rounded-lg shadow-lg object-cover" src={portraitImg1} alt="Family Photography" />
                  <img className="absolute -top-30 -left-90 z-10 w-full h-96 rounded-lg shadow-lg object-cover" src={portraitImg2} alt="Family Photography" />
                  <img className="absolute -top-20 left-5 w-full h-96  rounded-lg z-20 shadow-lg object-cover" src={portraitImg3} alt="Family Photography" />
                </div>
        
                <div className="w-full md:w-1/2">
                  <h1 className="text-5xl font-bold text-gray-800">Portraits</h1>
                  <p className="mt-4 text-xl font-semibold text-gray-600">
                  Photography is an art, and our skilled photographers excel at capturing the unique nuances of your character and individuality. We craft timeless images that showcase your professionalism while reflecting the style and image you want to project. After all, a picture is worth a thousand words.
                  </p>
                  <button className="mt-6 px-6 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-800 transition cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </section>
  )
}

export default test
