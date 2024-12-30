import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "How can I join Think India Community?",
    "What are the goals of Think India Community?",
    "What activities will the Think India community undertake to promote and uplift society?",
    "Why should I join the Think India Community?",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center w-screen mt-10">
      <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
        <h1 className="text-3xl font-bold text-gray-800 bg-[#f3f4ff] rounded-xl shadow-lg p-4 w-full md:w-auto text-center">FAQ</h1>
      </div>
      <div className="w-full md:w-3/4 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md">
            <button
              className="w-full text-left p-4 font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq}
              <span className="text-gray-500">{openIndex === index ? "▼" : "▲"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 border-t border-gray-200">
                {/* Placeholder for FAQ answer content */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
