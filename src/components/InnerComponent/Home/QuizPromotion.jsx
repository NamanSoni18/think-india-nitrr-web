import React from "react";
import { home_assets } from "../../../assets/home_assets";

function QuizPromotion() {
  return (
    <div className="w-screen bg-[#89C3CD] overflow-hidden py-10 px-6 md:px-16 lg:flex lg:items-center h-auto">
      <div className="lg:w-1/2 flex flex-col space-y-4 items-center lg:items-start">
        {/* Hidden Images for Small Screens */}
        <div className="w-full flex justify-center">
        <img
          src={home_assets.quizes}
          alt="Quizes"
          className="h-auto max-w-full"
        />
      </div>
        <p className="text-black text-3xl lg:text-4xl font-semibold text-center lg:text-left">
          Think India Quiz
        </p>
        <p className="text-gray-800 text-lg lg:text-xl font-medium lg:pr-20 leading-relaxed tracking-wide text-center lg:text-left">
          Think India is a vibrant community that actively engages students and
          young professionals in various intellectual and social activities. One
          of their notable initiatives is organizing quiz competitions.
        </p>
        <button className="quiz-button bg-[#1422AC] text-white py-2 px-6 rounded-lg flex items-center gap-4">
          <img
            width={30}
            height={30}
            src={home_assets.graduate}
            alt="graduate"
            className="hidden lg:block filter invert"
          />
          <span className="text-lg lg:text-xl font-extrabold">Register Now</span>
        </button>
      </div>

      {/* Hide Entire Right Section on Small Screens */}
      <div className="hidden lg:flex lg:w-1/2 lg:flex lg:items-center lg:justify-center relative">
        <div className="flex flex-col w-[35vw] mt-[9rem] items-center space-y-3 bg-white translate-x-10 rounded-3xl">
          {/* Top-left Image */}
          <img
            src={home_assets.top_left}
            alt="Top Left Image"
            className="absolute top-5 left-[-2.5rem] w-[12vw] h-[7vw] rounded-2xl shadow-lg z-20"
          />

          <img
            src={home_assets.thinking_woman}
            alt="Main Quiz"
            className="h-[40vw] w-[40vw] translate-y-[50px] rounded-lg z-10"
          />

          {/* Right-middle Image */}
          <img
            src={home_assets.right_middle}
            alt="Right Middle Image"
            className="absolute top-[9rem] right-[-2.5rem] w-[8vw] h-[5vw] rounded-lg shadow-lg z-20"
          />

          {/* Question Overlay */}
          <div className="relative bottom-36 right-52 space-y-2 z-20">
            <div className="flex items-center space-x-2 bg-white shadow-lg px-3 py-2 rounded-3xl">
              <div className="rounded-full w-5 h-5 bg-black relative flex items-center justify-center">
                <span className="text-white font-bold">?</span>
              </div>
              <p>In what galaxy is our solar system located?</p>
            </div>
            <div className="flex items-center space-x-2 bg-white shadow-lg px-3 py-2 rounded-3xl">
              <div className="rounded-full w-5 h-5 bg-black relative flex items-center justify-center">
                <span className="text-white font-bold">?</span>
              </div>
              <p>What is the world's smallest continent?</p>
            </div>
            <div className="flex items-center space-x-2 bg-white shadow-lg px-3 py-2 rounded-3xl">
              <div className="rounded-full w-5 h-5 bg-black relative flex items-center justify-center">
                <span className="text-white font-bold">?</span>
              </div>
              <p>In what year did the Titanic sink?</p>
            </div>
          </div>

          {/* Cash Prize Box */}
          <div className="absolute h-[7vw] w-[10vw] bg-[#FF6500] bottom-[8rem] left-[28rem] z-20 text-white font-bold py-2 px-2 rounded-3xl shadow-lg flex flex-col">
            <p className="text-left font-light ml-2 text-md">Upto</p>
            <p className="text-xl font-extrabold ml-2 left-10 mt-auto">₹5000</p>
            <p className="text-xs font-light text-right mb-auto mr-3">
              Cash Prizes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPromotion;
