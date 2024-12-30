import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-screen flex flex-col md:flex-row items-center bg-black text-white p-4 md:p-8 mt-20">
      {/* Image Section */}
      <div className="hidden md:block w-1/3">
        <img
          src="https://img.freepik.com/free-vector/modern-question-mark-help-support-page_1017-27395.jpg?t=st=1731177088~exp=1731180688~hmac=c23f21515da35e59c66c98295b42bbcd26e5324c27cc85af04e70e117c56c84f&w=740" // Replace with actual image URL
          alt="Quiz illustration"
          className="w-full"
        />
      </div>

      {/* Text and Timer Section */}
      <div className="flex flex-col w-full items-center md:w-2/3">
        <h1 className="text-2xl md:text-5xl font-bold text-center md:text-left mb-2">
          Think India Quiz
        </h1>
        <h2 className="text-lg md:text-2xl text-center md:text-left mb-8">
          Time Remaining
        </h2>
        <div className="flex text-black justify-center md:justify-start space-x-4">
          {Object.keys(timeLeft).map((interval, index) => (
            <div key={index} className="flex bg-white p-4 rounded-md flex-col items-center">
              <div className="text-2xl md:text-4xl font-bold">
                {timeLeft[interval] || '00'}
              </div>
              <div className="text-sm md:text-base">
                {interval.charAt(0).toUpperCase() + interval.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Section3() {
  // Set your target date here (year, month - 1, day, hour, minute, second)
  const targetDate = new Date(2025, 0, 15, 0, 0, 0);

  return (
    <div className="container mx-auto">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}