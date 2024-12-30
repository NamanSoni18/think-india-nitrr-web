import React from 'react';

const GovtInternship = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Government Internships</h1>
      <div className="flex flex-col md:flex-row items-center w-full bg-[#fff9e6] rounded-xl shadow-md p-4 md:p-6 space-y-4 md:space-y-0" style={{ minHeight: '400px' }}>
        
        {/* Image Section (Left Side) */}
        <div className="flex-1 flex justify-center items-center p-4" style={{ height: '400px' }}>
        <img
            src="/helpdeskimg/Essential - job (PNG).png" // Remove 'think-india-nitrr-website/public/'
            alt="Person"
            className="w-full h-full object-cover rounded-full"
        />
        </div>
        
        {/* Government Internship Links Section (Right Side) */}
        <div className="flex-1 p-4 relative border border-white rounded-lg shadow-lg" style={{ height: '400px' }}>
          {/* Background that stays fixed while scrolling */}
          <div className="bg-white absolute inset-0 z-0 rounded-lg shadow-inner border border-gray-300" style={{ height: '400px' }} />
          
          {/* Scrollable Content */}
          <div className="relative z-10 overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {Array(8).fill().map((_, index) => (
              <div key={index} className="mb-2 p-3 bg-gray-100 rounded-lg shadow-md">
                <h2 className="font-bold text-lg">Government Internship</h2>
                <p className="text-gray-600">Government Internship details link: here is the link</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovtInternship;
