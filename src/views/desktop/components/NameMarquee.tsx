import React from "react";
import Marquee from "react-fast-marquee";

function NameMarquee() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
      <Marquee
        speed={60}
        className="text-450 text-white font-bold drop-shadow-strong"
      >
        <div className="mr-28">JOSHI</div>
        <div className="mr-28">HA</div>
      </Marquee>
    </div>
  );
}

export default NameMarquee;
