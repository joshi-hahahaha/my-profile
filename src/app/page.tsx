"use client";

import Navbar from "@/components/navbar/Navbar";
import ProfileImage from "@/components/photos/ProfileImage";
import DrifterStars from "@devil7softwares/react-drifter-stars";

export default function MainPage() {
  return (
    <div className="relative h-screen px-28 font-jbmono">
      {/* DrifterStars as background */}
      <div className="absolute inset-0 z-0">
        <DrifterStars />
      </div>
      {/* Navbar on top */}
      <div className="relative z-10">
        <Navbar />
        <div className="w-full flex justify-between">
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}
