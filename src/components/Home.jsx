import React from "react";
import Section1 from "../components/InnerComponent/Home/HeroSection";
import Section2 from "../components/InnerComponent/Home/Section2";
import ImageSlider from "../components/InnerComponent/Home/ImageSlider";
import FacultyHead from "../components/InnerComponent/Home/FacultyHead";
import CommunityCounter from "../components/InnerComponent/Home/CommunityCounter";
import QuizPromotion from "../components/InnerComponent/Home/QuizPromotion";
import EmpoweringGrowth from "../components/InnerComponent/Home/EmpoweringGrowth";
import ContactForm from "../components/InnerComponent/Home/ContactForm";
import FAQSection from "../components/InnerComponent/Home/FAQSection";
import ConnectContribute from "./InnerComponent/Home/ConnectContribute";

const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:gap-[200px] gap-[200px]">
        <Section1 />
        {/* <div className="w-full h-48 sm:h-48 md:h-32 lg:h-40 xl:h-48 my-[40px] bg-black"></div> */}
        <Section2 />
      </div>
      <ImageSlider />
      <FacultyHead />
      <EmpoweringGrowth />
      <CommunityCounter />
      <div className="flex flex-col lg:gap-[200px] gap-[200px]">
        <QuizPromotion />
        <ContactForm />
      </div>
      <FAQSection />
      <ConnectContribute />
    </>
  );
};

export default Home;
