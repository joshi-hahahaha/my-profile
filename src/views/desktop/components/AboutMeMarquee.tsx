import React from "react";
import Marquee from "react-fast-marquee";

function AboutMeMarquee() {
  return (
    <div className=" bg-white w-full h-20 text-black flex items-center justify-center drop-shadow-strong">
      <Marquee
        speed={60}
        className="text-5xl text-black font-bold drop-shadow-strong italic h-full"
      >
        <div className="mr-10">
          ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME •
          ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME •{" "}
          ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME •{" "}
        </div>
      </Marquee>
    </div>
  );
}

export default AboutMeMarquee;
