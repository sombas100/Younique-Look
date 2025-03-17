import React from "react";
import serviceImg5 from "../../assets/cakesmashdetails1.jpg";
import serviceImg6 from "../../assets/cakesmash2.jpg";
import serviceImg7 from "../../assets/cakesmash4.jpg";

const CakeSmashDetails = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
        <div className="w-full md:w-1/2">
          <img className="w-full max-h-[300px] py-4 rounded-lg shadow-lg object-cover" src={serviceImg5} alt="Cake Smash Photography" />
          <img className="w-full max-h-[300px] py-4 rounded-lg shadow-lg object-cover" src={serviceImg6} alt="Cake Smash Photography" />
          <img className="w-full max-h-[300px] py-4 rounded-lg shadow-lg object-cover" src={serviceImg7} alt="Cake Smash Photography" />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800">Cake Smash Photography</h1>
          <p className="mt-4 text-xl font-semibold text-gray-600">
          Our cake smash photography sessions are the perfect way to celebrate your little one’s special milestone with joy, laughter, and adorable messy fun! Designed to capture the excitement of this once-in-a-lifetime moment, our sessions provide a playful and stress-free environment where your baby can explore, smash, and enjoy their cake while we capture every precious giggle, curious glance, and frosting-covered smile. Whether you prefer a themed setup, colorful decorations, or a simple, classic style, we’ll create a fun-filled experience that results in beautiful, heartwarming images to cherish forever.
          </p>
          <button className="mt-6 px-6 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-800 transition hover:cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CakeSmashDetails;
