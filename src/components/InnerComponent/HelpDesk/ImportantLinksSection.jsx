// ImportantLinksSection.js
import React, { useState } from 'react';

const ImportantLinksSection = ({ importantLinks }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);
  const linksToShow = showAll ? importantLinks : importantLinks.slice(0, 3);

  return (
    <div className="mt-12 w-screen p-9">
      <h2 className="text-4xl font-bold mb-4">Important Links</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {linksToShow.map((link, index) => (
          <a
            href={link.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg p-4 h-48 transition-transform transform hover:translate-y-[-2px] hover:shadow-2xl"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <img src={link.bg} alt={link.label} className="object-contain w-full h-full" />
            </div>
            <div className="text-center font-semibold text-lg text-black">
              {link.label}
            </div>
          </a>
        ))}
      </div>
      {importantLinks.length > 3 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleShowAll}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImportantLinksSection;
