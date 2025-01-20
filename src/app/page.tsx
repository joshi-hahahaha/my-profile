"use client";

import Navbar from "@/components/navbar/Navbar";
import DrifterStars from "@devil7softwares/react-drifter-stars";

export default function MainPage() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* DrifterStars as background */}
      <div className="absolute inset-0 z-0">
        <DrifterStars />
      </div>
      {/* Navbar on top */}
      {/* <div className="relative z-10"> */}
      <Navbar />
      {/* </div> */}
    </div>
  );
}
