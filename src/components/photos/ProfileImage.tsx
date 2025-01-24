import React from "react";
import Image from "next/image";
import Pfp from "./../../assets/joshi_pfp.jpg";

function ProfileImage() {
  return (
    <div className="relative aspect-square w-full sm:w-pfp-width-desktop sm:mr-5">
      <Image
        src={Pfp}
        alt="Picture of me!"
        layout="fill" // Ensures the image fills the parent div
        objectFit="cover" // Crops the image to cover the div
        objectPosition="bottom" // Aligns the image so the bottom is visible
      />
    </div>
  );
}

export default ProfileImage;
