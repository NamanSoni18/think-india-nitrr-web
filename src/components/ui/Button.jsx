import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Button = () => {
  return (
    <div className="flex items-center justify-center m-5">
      <div className="relative group">
        <button className="relative inline-block p-px font-semibold leading-6 text-white bg-orange-500 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
          <span className="relative z-10 block px-6 py-3 rounded-xl bg-orange-500">
            <div className="flex items-center justify-center space-x-2"> {/* Center the content */}
              <span className="transition-all duration-500 group-hover:-translate-x-1 flex items-center font-bold"> {/* Slightly move left */}
                Learn More
              </span>
              <FaArrowRight 
                className="w-5 h-5 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1" 
              /> {/* Icon hidden initially */}
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Button;
