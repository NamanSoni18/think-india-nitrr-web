import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Ellipse 1.png"; // Update the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 hover:text-black text-black p-5 bg-white transition-all duration-300 hover:bg-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white hover:text-black">
          <img src={logo} alt="Think India Logo" className="h-10 w-10" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          className="md:hidden flex justify-center items-center w-10 h-10 text-black hover:bg-white hover:text-black rounded"
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* {["Home", "About Us", "Help Desk", "Team", "Blog", "Profile"].map((item, index) => ( */}
          {["Home", "About Us", "Help Desk", "Team"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:bg-[#FF9933] hover:text-white px-3 py-2 rounded font-roboto text-lg font-medium transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="navbar-menu"
          className="absolute w-full left-0 top-full bg-white text-black shadow-lg flex flex-col items-center space-y-2 py-4"
        >
          {/* {["Home", "About Us", "Help Desk", "Team", "Blog", "Profile"].map((item, index) => ( */}
          {["Home", "About Us", "Help Desk", "Team"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className="block w-full text-center px-4 py-2 hover:bg-[#FF9933] hover:text-white rounded-lg font-roboto text-lg font-medium transition duration-300"
              onClick={() => setIsOpen(false)} // Close dropdown on click
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
