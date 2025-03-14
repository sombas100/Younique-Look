import React, { useState } from "react";
import logo from "../assets/younique-look-logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import youniqueLogo from "../assets/younique-look-logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about-us" },
    {
      name: "Services",
      to: "/services",
      submenu: [
        { name: "Makeup", to: "/services/makeup" },
        { name: "Hair", to: "/services/hair" },
        { name: "Photoshoot", to: "/services/photoshoot" },
        
      ],
    },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="layout mx-auto max-w-full flex items-center justify-between border-b border-gray-500 p-6 relative bg-white">
      {/* Logo Section */}
      <div className="w-full md:mr-6">
        <Link to="/">
          <img
            className="w-72 h-auto"
            src={youniqueLogo}
            alt="Younique look logo"
          />
        </Link>
      </div>

      {/* Desktop Navigation with Dropdown */}
      <ul className="hidden md:flex items-center gap-14">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className="relative text-3xl font-semibold text-black/60 hover:text-amber-300 transition-all duration-300 ease-in-out"
            onMouseEnter={() => link.submenu && setIsServicesDropdownOpen(true)}
            onMouseLeave={() =>
              link.submenu && setIsServicesDropdownOpen(false)
            }
          >
            <a href={link.to} className="flex items-center gap-2">
              {link.name}
              {link.submenu && <span className="text-lg">▼</span>}
            </a>

            {/* Desktop Dropdown for Services */}
            {link.submenu && (
              <ul
                className={`absolute left-0 mt-2 w-56 bg-black z-20 shadow-lg rounded-md border border-amber-300 transition-all duration-300 ease-in-out ${
                  isServicesDropdownOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-2 invisible"
                }`}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                {link.submenu.map((subLink, j) => (
                  <li
                    key={j}
                    style={{ padding: "8px" }}
                    className="py-3 bg-white px-5 w-full hover:bg-amber-300 transition-all duration-300 ease-in-out rounded-md"
                  >
                    <a
                      href={subLink.to}
                      className="block text-2xl text-black"
                    >
                      {subLink.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger Icon - Visible Only on Mobile */}
      <div className="md:hidden text-black ">
        <button className="py-3 px-2 hover:bg-gray-100 transition-all ease-in hover:cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <GiHamburgerMenu size={30}/>
        </button>
      </div>

      {/* Mobile Navigation Menu (No Dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-lg md:hidden flex flex-col items-center p-6 z-50">
          {/* Close (X) Icon */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 hover:cursor-pointer"
          >
            <p className="text-black/60 text-2xl hover:text-amber-300">X</p>
          </button>

          {/* Logo inside the mobile menu */}
          <img
            className="w-48 h-auto mb-6 mt-8"
            src={logo}
            alt="Younique look logo"
          />

          {/* Mobile Navigation Links (No Dropdown) */}
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className="lg:text-2xl text-3xl py-2 font-semibold text-black/60 hover:text-amber-300 transition-all duration-300 ease-in-out"
              >
                <a href={link.to}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
