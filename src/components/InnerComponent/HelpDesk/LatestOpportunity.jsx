import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { helpdesk_assets } from "../../../assets/helpdesk/helpdesk_assets";

const LatestOpportunity = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider data
  const opportunities = [
    {
      title: "Railway Opening",
      description: "The Indian Railways is calling out to passionate individuals!",
      image: helpdesk_assets.Frame2768,
    },
    {
      title: "Software Internships",
      description:
        "Top tech companies are looking for interns! Gain hands-on experience.",
      image: helpdesk_assets.Frame176,
    },
    // Add more opportunities here with respective images and descriptions
  ];

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % opportunities.length);
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
    <div className="mt-12">
      <h2 className="text-4xl font-bold mb-4 text-center">Latest Opportunity</h2>
      <div className="relative w-full max-w-4xl mx-auto">
        <AnimatePresence initial={false} custom={1}>
          <motion.div
            key={currentSlide}
            className="relative h-[400px] w-full rounded-lg shadow-md text-white bg-cover bg-center"
            style={{
              backgroundImage: `url(${opportunities[currentSlide].image})`,
              borderRadius: "5px",
              border: "10px solid #000", // Adjust border size
              backgroundPosition: "center center", // Ensuring the image stays centered
              backgroundSize: "cover", // Make sure the background image covers the div
              transform: "none", // Ensure no conflicting transform is applied here
            }}
            custom={1} // Custom direction for the animation
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20 },
              opacity: { duration: 0.5 }, // Ensure smooth opacity transition
            }}
          >
            <div className="absolute bottom-0 p-4 w-full text-center bg-opacity-80 bg-white-900 rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2">
                {opportunities[currentSlide].title}
              </h3>
              <p className="text-lg">{opportunities[currentSlide].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LatestOpportunity;
