import React from "react";
import Pic from "@/assets/cutout.png"; // Assuming this is your image path
import Image from "next/image";

const Cutout = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-95/100">
      <Image
        src={Pic}
        alt="Cutout Image"
        layout="intrinsic"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default Cutout;
