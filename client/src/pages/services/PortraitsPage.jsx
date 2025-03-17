import React from 'react'
import portraitImg1 from '../../assets/Fotolia1.jpg'
import portraitImg2 from '../../assets/portrait3.jpg'
import portraitImg3 from '../../assets/portrait4.jpg'
import { Link } from 'react-router-dom'


const PortraitsPage = () => {
  return (
    <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
            <div className="w-full md:w-1/2">
              <img className="w-full max-h-[300px] py-4 rounded-lg shadow-lg object-cover" src={portraitImg1} alt="Family Photography" />
              <img className="w-full max-h-[300px] py-4 rounded-lg shadow-lg object-cover" src={portraitImg2} alt="Family Photography" />
              <img className="w-full max-h-[300px] py-4 rounded-lg shadow-lg object-cover" src={portraitImg3} alt="Family Photography" />
            </div>
    
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold text-gray-800">Portraits</h1>
              <p className="mt-4 text-xl font-semibold text-gray-600">
              Photography is an art, and our skilled photographers excel at capturing the unique nuances of your character and individuality. We craft timeless images that showcase your professionalism while reflecting the style and image you want to project. After all, a picture is worth a thousand words.
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

export default PortraitsPage
