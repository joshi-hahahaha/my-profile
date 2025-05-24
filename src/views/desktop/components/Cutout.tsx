import React from "react";
import Pic from "@/assets/cutout.png";
import Image from "next/image";

const Cutout = () => {
  return (
    // Note: this style will need to change once i get a better picture
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[15px] w-full h-95/100 overflow-hidden">
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
