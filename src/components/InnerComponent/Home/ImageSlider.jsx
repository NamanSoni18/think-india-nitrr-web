import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { home_assets } from "../../../assets/home_assets";

// Updated Slider data with two additional images
const sliderData = [
  {
    image: home_assets.img4,
    title: "",
    description:
      "",
  },
  {
    image: home_assets.img5,
    title: "",
    description:
      "",
  },
  {
    image: home_assets.img2,
    title: "Five Students Got 55 LPA Package",
    description:
      "This achievement not only underscores the student's hard work and dedication but also reflects the robust training and industry-aligned curriculum provided by GIM.",
  },
  {
    image: home_assets.img1,
    title: "President Visit to NIT Raipur",
    description:
      "All the students are informed that the 14th Convocation is being held in the institute on 25 October 2024.",
  },
  {
    image: home_assets.img3,
    title: "Candle March at NIT Raipur",
    description:
      "A candle march is a peaceful demonstration where participants carry lit candles, usually held after sunset.",
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // Tracks slide direction (1: next, -1: previous)

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1); // Slide to the next image
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle slide changes
  const changeSlide = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prevSlide) =>
      (prevSlide + newDirection + sliderData.length) % sliderData.length
    );
  };

  // Framer Motion variants for sliding animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%", // Enter from right or left
      opacity: 1,
    }),
    center: {
      x: 0, // Centered position
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%", // Exit to left or right
      opacity: 1,
    }),
  };

  return (
    <div className="relative w-screen h-screen mx-auto px-[5%] overflow-hidden">
      {/* Slide Container */}
      <div className="relative w-full h-[700px]">
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentSlide}
            className="absolute top-0 left-0 w-full h-full"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20 },
            }}
            custom={direction}
          >
            <img
              src={sliderData[currentSlide].image}
              alt={sliderData[currentSlide].title}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </AnimatePresence>

        {/* Fixed Text Overlay */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white p-6 rounded-md text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-2">{sliderData[currentSlide].title}</h2>
          <p className="text-sm">{sliderData[currentSlide].description}</p>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderData.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
              }`}
              onClick={() => changeSlide(index - currentSlide)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;