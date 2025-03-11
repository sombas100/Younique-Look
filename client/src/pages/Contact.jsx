import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Contact Info */}
        <div>
          <h1 className="text-7xl font-bold text-gray-800">Get in Touch</h1>
          <p className="text-2xl text-gray-600 mt-4 leading-relaxed">
            Have questions about our services? Want to book an appointment or
            collaborate? Fill out the form, and we’ll get back to you as soon as
            possible!
          </p>
          <p className="inline-flex items-center justify-center text-xl tracking-wide text-gray-600 mt-6">
            <strong className="p-2 bg-amber-200 mr-4">
              <FaLocationDot size={16} />
            </strong>{" "}
            4 Spital Square, Bishopsgate, London E1 6DU
          </p>
          <p className="inline-flex items-center justify-center text-xl tracking-wide text-gray-600 mt-2">
            <strong className="p-2 bg-amber-200 mr-4">
              <FaPhoneAlt size={16} />
            </strong>
            (123) 456-7890
          </p>
          <p className="flex text-xl tracking-wide text-gray-600 mt-2">
            <strong className="p-2 bg-amber-200 mr-4">
              <IoIosMail size={16} />
            </strong>
            contact@citistudio.com
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-xl font-bold text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-2 text-xl  w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-bold text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-2 text-xl w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-bold text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-2 text-xl w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full font-bold bg-amber-300 text-black py-3 px-6 rounded-md text-xl hover:bg-black hover:text-amber-300 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <iframe
          title="Google Maps Location"
          className="w-full h-96 border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19821.09197867123!2d-0.07850979999999999!3d51.51946005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cab74b719f5%3A0xa9494469e2c173c7!2s4%20Spital%20Square%2C%20London%20E1%206DU%2C%20UK!5e0!3m2!1sen!2sus!4v1712234567890"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
