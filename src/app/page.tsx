"use client";

import Navbar from "@/components/navbar/Navbar";
import ProfileImage from "@/components/photos/ProfileImage";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import Typewriter from "typewriter-effect";

export default function MainPage() {
  return (
    <div className="relative h-screen px-6 font-jbmono sm:px-28">
      {/* DrifterStars as background */}
      <div className="absolute inset-0 z-0">
        <DrifterStars />
      </div>
      {/* Navbar on top */}
      <div className="relative z-10">
        <Navbar />
        <div className="w-full flex flex-col sm:flex-row rounded-2xl overflow-hidden">
          <ProfileImage />
          <div className="relative bg-transparent text-white flex flex-col">
            <div className="text-5xl sm:text-7xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'M JOSHI HA")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .start()
                    .pauseFor(2500);
                }}
              />
            </div>
            <div className="text-lg sm:text-4xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500)
                    .typeString("COMPUTER SCIENCE STUDENT @ UNSW")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .start();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
