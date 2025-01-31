import React from "react";
import DrifterStars from "@devil7softwares/react-drifter-stars";

import Navbar from "../components/Navbar";
import HoriMarquee from "../components/HoriMarquee";
import Cutout from "../components/Cutout";

const DesktopLanding = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col items-center">
      <div className="absolute inset-0 z-0">
        <DrifterStars
          glare={{ opacityMultiplier: 0.25 }}
          links={{ opacity: 1, minLength: 4, maxLength: 8, lineWidth: 2 }}
          particle={{ sizeBase: 2 }}
        />
      </div>
      <Navbar />
      <HoriMarquee />
      <Cutout />
    </div>
  );
};

export default DesktopLanding;
