import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vector8 from "./Vector8";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I join Think India Community?",
      answer:
        "The Think India Community is a vibrant and dynamic organization dedicated to fostering cultural enrichment and personal growth. Through a variety of cultural events and initiatives, Think India aims to create a platform where individuals can connect, learn, and thrive.",
    },
    {
      question: "What are the Goals of Think India Community?",
      answer:
        "The Think India Community is a vibrant and dynamic organization dedicated to fostering cultural enrichment and personal growth. Through a variety of cultural events and initiatives, Think India aims to create a platform where individuals can connect, learn, and thrive.",
    },
    {
      question:
        "What activities will the Think India community undertake to promote and uplift society?",
      answer:
        "The Think India Community is a vibrant and dynamic organization dedicated to fostering cultural enrichment and personal growth. Through a variety of cultural events and initiatives, Think India aims to create a platform where individuals can connect, learn, and thrive.",
    },
    {
      question: "Why should I join the Think India Community?",
      answer:
        "The Think India Community is a vibrant and dynamic organization dedicated to fostering cultural enrichment and personal growth. Through a variety of cultural events and initiatives, Think India aims to create a platform where individuals can connect, learn, and thrive.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-gray-50 p-6 my-[10vw] sm:p-8 flex flex-col lg:flex-row lg:space-x-8 w-screen h-full">
      {/* Left Side Heading for Laptop and Above */}
      <div className="lg:w-1/4 flex lg:flex-col gap-4 items-center justify-center text-center mb-8 lg:mb-0 sm:mb-4 sm:text-left sm:items-start">
        <h2 className="text-5xl sm:text-5xl font-bold">FAQ's</h2>
        <div className="mt-4 relative lg:left-20 lg:rotate-0 rotate-12 lg:scale-y-[1] scale-y-[-1]">
          <Vector8 className="w-[90px] lg:w-[140px]" />
        </div>
      </div>

      {/* Right Side Questions */}
      <div className="lg:w-3/4 space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 sm:p-5 rounded-lg shadow-md cursor-pointer transition-transform transform ${
              activeIndex === index ? "" : "bg-gray-200"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base sm:text-lg">
                {faq.question}
              </h3>
              <motion.span
                animate={{ rotate: activeIndex === index ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl"
              >
                ▶
              </motion.span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
