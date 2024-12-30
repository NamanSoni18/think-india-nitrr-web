import React, { useState, useEffect } from "react";
import { home_assets } from "../../../assets/home_assets";
import { FaRegUser, FaPhoneAlt, FaUserFriends } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ConnectContribute = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider data with images and content
  const sliderData = [
    {
      image: home_assets.Frame2862_1,
      alt: "Connect and Contribute 1",
      background: home_assets.kathakGirl,
    },
    {
      image: home_assets.Frame2862_2,
      alt: "Connect and Contribute 2",
      background: home_assets.kathakGirl,
    },
    {
      image: home_assets.Frame2862_3,
      alt: "Connect and Contribute 3",
      background: home_assets.kathakGirl,
    },
  ];

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion variants for sliding animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%", // Slide in from right or left
      opacity: 0,
    }),
    center: {
      x: 0, // Centered position
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%", // Slide out to left or right
      opacity: 0,
    }),
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center p-6 sm:p-10"
      style={{
        backgroundImage: `url(${sliderData[currentSlide].background})`, // Dynamically set background
      }}
    >
      <div className="bg-white flex flex-col md:flex-row shadow-lg rounded-lg p-6 sm:p-8 max-w-6xl w-full">
        {/* Left Side - Image Slider */}
        <div className="hidden md:flex sm:w-[500px] items-center justify-center p-4 overflow-hidden">
          <AnimatePresence initial={false} custom={1}>
            <motion.img
              key={currentSlide}
              src={sliderData[currentSlide].image}
              alt={sliderData[currentSlide].alt}
              className="w-full h-auto object-cover rounded-lg"
              custom={1} // Custom direction for the animation
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20 },
              }}
            />
          </AnimatePresence>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-[500px] flex flex-col items-center text-center md:text-left p-4 md:p-6">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-orange-500 mb-4">
            CONNECT,
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            CONTRIBUTE,
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-500 mb-4">
            CHANGE,
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            Text Your Questions
          </p>
          <p className="font-medium text-sm sm:text-base md:text-lg mb-4">
            At Think India, we believe in the power of community and the
            collective effort to uplift society. By reaching out to us, you're
            not filling out a form - you're taking the first step towards making
            a real difference.
          </p>

          {/* Name and Email Inputs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4 w-full">
            <div className="flex-1">
              <label className="font-semibold text-sm flex flex-row gap-4 items-center">
                <FaRegUser /> Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="inputname"
                  id="inputname"
                  className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:text-gray-800"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="font-semibold text-sm flex flex-row gap-4 items-center">
                <FaRegUser /> Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="inputemail"
                  id="inputemail"
                  className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Questions Textarea */}
          <div className="w-full">
            <label className="font-semibold text-sm flex flex-row gap-4 items-center">
              <FaRegUser /> Your Questions
            </label>
            <div className="mt-2">
              <textarea
                placeholder="Write your Questions"
                name="inputquestions"
                id="inputquestions"
                rows="2"
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:text-gray-800"
              />
            </div>
          </div>
          <button className="ConnectContri-btn mt-4 h-12">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default ConnectContribute;
