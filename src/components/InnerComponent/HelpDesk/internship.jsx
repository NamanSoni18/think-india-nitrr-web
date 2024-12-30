import React from 'react';

const Internship = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Internship Link</h1>
      <div className="flex flex-col md:flex-row items-center w-full bg-[#f3f4ff] rounded-xl shadow-md p-4 md:p-6 space-y-4 md:space-y-0" style={{ minHeight: '400px' }}>
        
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center p-4" style={{ height: '400px' }}>
          <img
            src="/helpdeskimg/Lined - Music emotion woman (PNG).png" // Path relative to public folder
            alt="Person listening to music"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full"
          />
        </div>
        
        {/* IOCL Internship Links Section */}
        <div className="flex-1 p-4 relative border border-white rounded-lg shadow-lg" style={{ height: '400px' }}>
          {/* Background that stays fixed while scrolling */}
          <div className="bg-white absolute inset-0 z-0 rounded-lg shadow-inner border border-gray-300" style={{ height: '400px' }} />
          
          {/* Scrollable Content */}
          <div className="relative z-10 overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {Array(8).fill().map((_, index) => (
              <div key={index} className="mb-2 p-3 bg-gray-100 rounded-lg shadow-md">
                <h2 className="font-bold text-lg">IOCL Internship</h2>
                <p className="text-gray-600">IOCL Internship Mathura internship link: here is the link</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
