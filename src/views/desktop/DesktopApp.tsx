"use client";

import React from "react";

import DesktopLanding from "./sections/DesktopLanding";
import AboutMe from "./sections/ProjectSection";

const DesktopApp: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="min-h-screen bg-custombg text-white">
        <DesktopLanding />
      </div>

      <div className="min-h-screen bg-gradient-to-b from-custombg to-white flex justify-center text-white">
        <AboutMe />
      </div>
    </div>
  );
};

export default DesktopApp;
