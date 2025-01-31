import React from "react";
import AboutMeMarquee from "../components/AboutMeMarquee";

const AboutMe = () => {
  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-[#e7ceb3] to-black">
      <AboutMeMarquee />
    </div>
  );
};

export default AboutMe;
