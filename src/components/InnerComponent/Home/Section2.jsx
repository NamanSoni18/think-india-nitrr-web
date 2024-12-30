import React from "react";
import Button from "../../ui/Button";

const Section2 = () => {
  return (
    <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 w-screen">
      <div className="mx-auto px-4 sm:px-8 md:px-8 lg:px-8">
        <div className="max-w-full sm:max-w-4xl mx-auto ">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover Us
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center leading-relaxed">
              The Think India Community is a vibrant and dynamic organization
              dedicated to fostering cultural enrichment and personal growth.
              Through a variety of cultural events and initiatives, Think India
              aims to create a platform where individuals can connect, learn, and
              thrive. Think India organizes a wide range of cultural events that
              celebrate the rich heritage and diversity of India. These events
              include festivals and celebrations, such as Holi and Diwali, which
              bring people together in joy and unity.
            </p>

            <div className="justify-center">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
