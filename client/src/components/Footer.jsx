import React from "react";

import youniqueLogo from "../assets/younique-look-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:col-span-4 grid-cols-1 gap-12 text-center md:text-left">
        {/* Brand & Description */}
        <div className="md:col-span-2">
          <img
            src={youniqueLogo}
            alt="Citi Studio Logo"
            className="w-68 mx-auto md:mx-0"
          />
          <p className="mt-4 text-xl font-bold text-gray-800">
            Elevating beauty through makeup, hairstyling, and photography.
            Bringing confidence & elegance to every look.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-3xl text-gray-800 font-bold">Quick Links</h2>
          <ul className="mt-4 space-y-2 font-semibold text-gray-700">
            <li>
              <a href="/" className="text-xl hover:text-amber-300 transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-xl hover:text-amber-300 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-xl hover:text-amber-300 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-xl hover:text-amber-300 transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-xl hover:text-amber-300 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl text-gray-800 font-bold">Services</h2>
          <ul className="mt-4 space-y-2 font-semibold text-gray-700">
            <li>
              <a href="/" className="text-xl hover:text-amber-300 transition">
                Makeup
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-xl hover:text-amber-300 transition"
              >
                Hairstyling
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-xl hover:text-amber-300 transition"
              >
                Photoshoot
              </a>
            </li>
            
            
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h2 className="text-3xl text-gray-800 font-bold">Get in Touch</h2>
          <p className="mt-4 text-xl font-bold text-gray-700">
            Email: younique-look@contact.co.uk
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-amber-300 transition"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-amber-300 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-amber-300 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} Younique Look, All rights reserved, Developed by Softu LTD</p>
      </div>
    </footer>
  );
};

export default Footer;
