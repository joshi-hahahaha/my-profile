import React from "react";

import Navbar from "../components/Navbar";
import HoriMarquee from "../components/HoriMarquee";

const DesktopLanding = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col items-center">
      <Navbar />
      <HoriMarquee />
    </div>
  );
};

export default DesktopLanding;
