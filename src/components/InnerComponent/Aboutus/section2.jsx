import React from 'react';

const ImageComponent = () => {
  return (
    <div className="w-screen flex justify-center items-center sm:mt-20 mt-20">
        <div className="relative w-[90vw] sm:w-[80vw] overflow-hidden hover:px-2 sm:hover:px-5 transition-all duration-300">
          <img 
            src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Image" 
            className="object-cover w-full max-h-[250px] sm:max-h-[600px]"
            style={{ 
              height: '85vh', 
              borderRadius: '15px'
            }}
          />
          <h1 className="absolute inset-0 flex justify-center items-center text-white text-2xl sm:text-4xl font-bold hover:scale-110 sm:hover:scale-125 transition-transform duration-300">
            Videos
          </h1>
        </div>
    </div>
  );
};

export default ImageComponent;