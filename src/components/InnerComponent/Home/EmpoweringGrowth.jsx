import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { home_assets } from "../../../assets/home_assets";
import SvgIcon from "./EmpoweringSVG";

function EmpoweringGrowth() {
  return (
    <div className="relative w-screen min-h-screen flex items-center bg-gradient-to-br from-yellow-100 to-orange-200 p-8 overflow-x-hidden">
      {/* Background SVG positioned to fit the container */}
      <div className="absolute right-0 top-0 w-full h-full opacity-80 overflow-hidden hidden md:block">
        <SvgIcon className="text-gray-800 w-[300px] h-[300px] mx-auto transform md:block" />{" "}
        {/* Increased size and darker color */}
      </div>

      {/* Left Content */}
      <div className="max-w-[800px] z-10 w-full md:w-2/3 lg:max-w-[800px]">
        <h1 className="text-[50px] md:text-[70px] font-bold text-orange-500 mb-2">
          Empowering Growth
        </h1>
        <h2 className="text-[35px] md:text-[50px] font-bold text-gray-800 mb-4">
          Inspiring Futures!
        </h2>
        <p className="text-base md:text-xl text-gray-700 font-semibold mb-8 max-w-xl">
          Your voice matters, and we want to hear from you! How do you think we
          can empower the people of India to achieve their fullest potential?
        </p>

        {/* Helping Partner Icons in a single row above email input */}
        <div className="flex space-x-4 mb-6 md:hidden">
          {" "}
          {/* Visible only on small screens */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] shadow-2xl">
            <img
              src={home_assets.helping_partner1}
              alt="Icon 1"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] shadow-2xl">
            <img
              src={home_assets.helping_partner2}
              alt="Icon 2"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] shadow-2xl">
            <img
              src={home_assets.helping_partner3}
              alt="Icon 3"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] shadow-2xl">
            <img
              src={home_assets.helping_partner4}
              alt="Icon 4"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>

        <form className="flex flex-col space-y-4">
          {/* Email input with SVG Icon inside the input field */}
          <div className="relative flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-2/5">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="w-full p-0 pr-10 pt-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <label
                htmlFor="email"
                className="absolute top-1 left-3 text-gray-500 text-2xl font-extralight transform origin-[0] scale-75 transition-all duration-200"
              >
                Enter your Email
              </label>
            </div>
            {/* SVG Icon inside the email input */}
            <div className="absolute right-4  sm:transform sm:translate-y-[10] text-gray-500 md:transform md:-translate-x-[480px] md:translate-y-[15px] text-[26px]">
              <MdOutlineEmail />
            </div>
          </div>

          {/* Text area for "Write Your Idea In form of words" */}
          <textarea
            placeholder="Write Your Idea In form of words"
            className="w-full md:w-[600px] h-[150px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-left"
            rows="4"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[100px] py-3 bg-orange-500 text-[16px] md:text-[20px] text-white rounded-lg font-bold hover:bg-orange-600 transition duration-200"
          >
            Send Us
          </button>
        </form>
      </div>

      {/* Woman Image (hidden on small screens) */}
      <div className="absolute right-0 bottom-0 transform flex flex-col items-center space-y-4 z-10 hidden md:block">
        <img
          src={home_assets.empowering_girl}
          alt="Woman"
          className="w-11/12 h-full max-w-xxl object-cover"
        />
      </div>

      {/* Icons for larger screens (MacBook View) */}
      <div className="absolute top-[18vw] left-[64vw] hidden md:block">
        <img
          src={home_assets.helping_partner1}
          alt="Icon 1"
          className="w-[7vw] h-[7vw] rounded-[20px] shadow-2xl"
        />
      </div>
      <div className="absolute top-[20vw] left-[52vw] hidden md:block">
        <img
          src={home_assets.helping_partner2}
          alt="Icon 2"
          className="w-[7vw] h-[7vw] rounded-[20px] shadow-2xl"
        />
      </div>
      <div className="absolute top-[100px] right-[550px] hidden md:block">
        <img
          src={home_assets.helping_partner3}
          alt="Icon 3"
          className="w-[7vw] h-[7vw] rounded-[20px] shadow-2xl"
        />
      </div>
      <div className="absolute top-[20px] right-[400px] hidden md:block">
        <img
          src={home_assets.helping_partner4}
          alt="Icon 4"
          className="w-[7vw] h-[7vw] rounded-[20px] shadow-2xl"
        />
      </div>
    </div>
  );
}

export default EmpoweringGrowth;
