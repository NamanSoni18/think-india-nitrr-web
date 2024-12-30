import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // Use FaTwitter instead of FaXTwitter
import { home_assets } from "../../../assets/home_assets";

const HeroSection = () => {
  return (
    <div className="relative w-screen">
      {/* Hero Section Background */}
      <div className="inset-0 relative">
        <img
          src={home_assets.rit}
          alt="Group photo"
          className="w-full h-full object-cover sm:object-center"
        />
        {/* Hero Text and Logo */}
        <div className="absolute bottom-[-100px] left-0 right-0 flex flex-col justify-center items-center text-center z-10 h-1/3 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
            Empowering Minds,
            <br />
            Enriching Lives
          </h1>
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-xl w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[600px] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-orange-500">
              THINK INDIA
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-500 mt-2">
              NIT RAIPUR
            </p>
            <div className="flex justify-center mt-4">
              <img
                src={home_assets.logo_thinkIndia}
                alt="Think India Logo"
                className="w-1/3 sm:w-1/4 md:w-2/6 lg:w-1/8 xl:w-4/10 2xl:w-8/10 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-6 z-40 max-w-full hidden xl:block lg:block">
        <a
          href="#"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border border-gray-300 transition-transform duration-300 hover:translate-y-[-15px]"
        >
          <FaLinkedin className="text-black w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a
          href="#"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border border-gray-300 transition-transform duration-300 hover:translate-y-[-15px]"
        >
          <FaInstagram className="text-black w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a
          href="#"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border border-gray-300 transition-transform duration-300 hover:translate-y-[-15px]"
        >
          <FaFacebook className="text-black w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a
          href="#"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border border-gray-300 transition-transform duration-300 hover:translate-y-[-15px]"
        >
          <FaTwitter className="text-black w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;