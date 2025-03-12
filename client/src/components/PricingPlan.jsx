import React from "react";

// Pricing data array with gradient backgrounds
const pricingPlans = [
  {
    id: 1,
    name: "Silver Package",
    price: "£99.99",
    services: [
      "Professional Makeup",
      "Basic Hairstyling",
      "Standard Photoshoot",
    ],
    gradient: "bg-gradient-to-r from-gray-300 to-gray-500",
    textColor: "text-black",
  },
  {
    id: 2,
    name: "Gold Package",
    price: "£199.99",
    services: [
      "Full Glam Makeup",
      "Advanced Hairstyling",
      "Premium Photoshoot",
      "Edited Photos",
    ],
    gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    textColor: "text-black",
  },
  {
    id: 3,
    name: "Diamond Package",
    price: "£299.99",
    services: [
      "Luxury Makeup",
      "Elite Hairstyling",
      "High-End Photoshoot",
      "Retouched Images",
      "Exclusive Beauty Consultation",
    ],
    gradient: "bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500",
    textColor: "text-black",
  },
];

const PricingPlan = () => {
  return (
    <section id="pricing" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-8 text-white">
          Choose Your Perfect Package
        </h1>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-lg shadow-lg ${plan.gradient} ${plan.textColor}`}
            >
              <h2 className="text-4xl font-semibold mb-3">{plan.name}</h2>
              <p className="text-3xl font-bold">{plan.price}</p>

              {/* Services List */}
              <ul className="mt-4 space-y-2">
                {plan.services.map((service, index) => (
                  <li
                    key={index}
                    className="text-xl font-semibold tracking-wide flex items-center justify-center"
                  >
                    ✅ {service}
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <button className="mt-6 px-6 py-3 font-bold text-xl bg-black text-white rounded-full hover:bg-gray-700 transition-all ease-in cursor-pointer">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
