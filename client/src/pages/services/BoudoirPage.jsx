import React from 'react'
import bourdoirImg1 from '../../assets/boudoir3.jpg'
import bourdoirImg2 from '../../assets/boudoir4.jpg'
import bourdoirImg3 from '../../assets/boudoir5.jpg'
import { Link } from 'react-router-dom'

const BoudoirPage = () => {
  return (
    <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
            <div className="w-full md:w-1/2">
              <img className="w-full py-4 max-h-[300px] rounded-lg shadow-lg object-cover" src={bourdoirImg1} alt="Cake Smash Photography" />
              <img className="w-full py-4 h-[300px] rounded-lg shadow-lg object-cover" src={bourdoirImg2} alt="Cake Smash Photography" />
              <img className="w-full py-4 h-[300px] rounded-lg shadow-lg object-cover" src={bourdoirImg3} alt="Cake Smash Photography" />
            </div>
    
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold text-gray-800">Boudoir Shoots</h1>
              <p className="mt-4 text-xl font-semibold text-gray-600">
              Embrace your sensuality and confidence with a bespoke boudoir photoshoot at Younique Look. Our sessions are designed to celebrate your unique beauty, capturing intimate, elegant, and artistic moments that reflect your personality and style. Whether you envision a bold burlesque shoot, delicate lingerie portraits, a sultry swimsuit session, or a romantic bridal-themed experience, our expert team will tailor every detail to your vision. With professional guidance, flattering lighting, and a relaxed, judgment-free environment, we ensure you feel empowered, comfortable, and radiant in front of the camera. This is more than just a photoshoot—it’s a celebration of self-love, strength, and the confidence that makes you, uniquely you.
              </p>
              <Link to='/contact'>
              <button className="mt-6 px-6 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-800 transition hover:cursor-pointer">
                Book Now
              </button>
              </Link>
            </div>
          </div>
        </section>
  )
}

export default BoudoirPage
