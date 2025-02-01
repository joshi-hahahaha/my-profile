import React from "react";
import DrifterStars from "@devil7softwares/react-drifter-stars";

import Navbar from "../components/Navbar";
import NameMarquee from "../components/NameMarquee";
import Cutout from "../components/Cutout";

const DesktopLanding = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col items-center">
      {/* Background Circles */}
      <div className="absolute w-64 h-64 border-4 border-white rounded-full -bottom-48 -right-32"></div>
      <div className="absolute w-450px h-450px border-4 border-white rounded-full -top-32 -left-48"></div>

      {/* DrifterStars Effect */}
      <div className="absolute inset-0 z-0">
        <DrifterStars
          glare={{ opacityMultiplier: 0.25 }}
          links={{ opacity: 1, minLength: 4, maxLength: 8, lineWidth: 2 }}
          particle={{ sizeBase: 2 }}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Top Right Text */}
      <div className="absolute top-24 right-8 text-2xl text-white z-10 flex flex-col items-end drop-shadow-strong">
        <p className="font-semibold">
          <a
            href="https://www.unsw.edu.au/study/undergraduate/bachelor-of-computer-science"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-stone-200 transition-colors duration-300 ease-in-out border-b-2 border-transparent hover:border-stone-200"
          >
            Bachelor of Computer
          </a>
        </p>
        <p className="font-semibold">Science Student</p>
        <p className="font-semibold">
          @{" "}
          <a
            href="https://www.unsw.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-stone-200 transition-colors duration-300 ease-in-out border-b-2 border-transparent hover:border-stone-200"
          >
            UNSW
          </a>
        </p>
      </div>

      {/* Main Content */}
      <NameMarquee />
      <Cutout />

      {/* Bottom Left Text */}
      <div className="absolute bottom-6 left-8 text-2xl text-white z-10 flex flex-col drop-shadow-strong">
        <p className="font-semibold">Keen &</p>
        <p className="font-semibold">Enthusiastic</p>
      </div>
    </div>
  );
};

export default DesktopLanding;
