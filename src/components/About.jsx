// import React, { useState, useEffect, useRef } from "react";
// // import img1 from "../assets/john-cameron-ASJBnaLazHo-unsplash.jpg";
// // import img2 from "../assets/1000030.jpg";
// // import img3 from "../assets/1007788.jpg";
// // import img4 from "../assets/1010687.jpg";
// // import img5 from "../assets/1221917.jpg";

// const Slide = ({ slide }) => (
//   <div className="w-full h-full flex-shrink-0">
//     <img
//       src={slide.imageUrl}
//       alt={slide.title}
//       className="w-full h-full object-cover" // Ensures the image fully covers the container
//       onError={(e) => {
//         e.target.onerror = null;
//         console.error(`Failed to load image: ${slide.imageUrl}`);
//       }}
//     />
//   </div>
// );

// const Dots = ({ slides, currentSlide, setCurrentSlide }) => (
//   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//     {slides.map((_, index) => (
//       <button
//         key={index}
//         onClick={() => setCurrentSlide(index)}
//         className={`h-2 w-2 rounded-full transition-all duration-300 ${
//           currentSlide === index
//             ? "bg-gray-500 w-4" // Active dot
//             : "bg-gray-300 hover:bg-gray-400"
//         }`}
//       />
//     ))}
//   </div>
// );

// const About = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideRef = useRef(null);

//   const slides = [
//     {
//       title: "NIT Raipur Professors in Top 2% of World",
//       description: "In a thrilling display of skill and determination...",
//       imageUrl: img1,
//     },
//     {
//       title: "2024",
//       description: "Year in review 2024",
//       imageUrl: img2,
//     },
//     {
//       title: "2023",
//       description: "Year in review 2023",
//       imageUrl: img3,
//     },
//     {
//       title: "New Horizons",
//       description: "Exploring the latest advancements...",
//       imageUrl: img4,
//     },
//     {
//       title: "Achievements",
//       description: "Celebrating our recent accomplishments...",
//       imageUrl: img5,
//     },
//   ];

//   const totalSlides = slides.length;

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     slideRef.current.style.transition = "transform 0.5s ease-in-out";
//     slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
//   }, [currentSlide]);

//   return (
//     <div className="flex flex-col items-center mt-20 w-full p-4 md:p-12">
//       <div className="w-full max-w-6xl mx-auto">
//         <div className="relative h-[60vh] md:h-[80vh] rounded-lg overflow-hidden shadow-xl">
//           {/* Slides Container */}
//           <div
//             ref={slideRef}
//             className="absolute inset-0 flex"
//             style={{ width: `${totalSlides * 100}%` }}
//           >
//             {slides.map((slide, index) => (
//               <Slide key={index} slide={slide} />
//             ))}
//           </div>

//           {/* Dots */}
//           <Dots slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

//           {/* Content */}
//           <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-2xl p-4 text-center text-white z-10">
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">
//               {slides[currentSlide].title}
//             </h2>
//             <p className="text-sm md:text-base">
//               {slides[currentSlide].description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import OtherCommunities from "./InnerComponent/Aboutus/section1";
import ImageComponent from "../components/InnerComponent/Aboutus/section2";
import Section3 from "../components/InnerComponent/Aboutus/section3";
import UpcomingEvents from "../components/InnerComponent/Aboutus/section4";
import EventsPage from "../components/InnerComponent/Aboutus/section5";
import Section1 from "../components/InnerComponent/Home/HeroSection";

const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:gap-[200px] gap-[200px]">
        <Section1 />

        <OtherCommunities />
      </div>
      <ImageComponent />
      <Section3 />
      <UpcomingEvents />
      {/* <EventsPage /> */}
    </div>
  );
};

export default About;
