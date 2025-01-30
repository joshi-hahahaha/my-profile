import React from "react";

import Navbar from "../components/Navbar";
import HoriMarquee from "../components/HoriMarquee";
import Cutout from "../components/Cutout";

const DesktopLanding = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col items-center">
      <Navbar />
      <HoriMarquee />
      <Cutout />
    </div>
  );
};

export default DesktopLanding;
