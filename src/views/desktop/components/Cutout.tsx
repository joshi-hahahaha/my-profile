import React from "react";
import Pic from "@/assets/cutout.png"; // Assuming this is your image path
import Image from "next/image";

const Cutout = () => {
  return (
    // <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-100 h-95/100">
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-95/100 overflow-hidden">
      <div className="top-0 flex justify-center transform w-full">
        <Image
          src={Pic}
          alt="Cutout Image"
          layout="intrinsic"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default Cutout;
