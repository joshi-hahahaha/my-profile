"use client";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import DesktopLanding from "./sections/DesktopLanding";
import AboutMe from "./sections/AboutMe";

const DesktopApp: React.FC = () => {
  return (
    <div className="w-screen h-full">
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        credits={{ label: "" }}
        scrollingSpeed={1000}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section bg-custombg block text-white">
                <DesktopLanding />
              </div>
              <div className="section bg-gradient-to-b from-custombg to-black flex justify-center items-center text-white">
                <AboutMe />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default DesktopApp;
