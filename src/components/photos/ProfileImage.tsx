import React from "react";
import Image from "next/image";
import Pfp from "./../../assets/joshi_pfp.jpg";
import { Paper } from "@mui/material";

function ProfileImage() {
  return (
    <Paper
      sx={{ width: "calc(50% - 10px)" }}
      className="relative p-1 bg-white overflow-hidden aspect-square rounded-xl"
    >
      <Image
        src={Pfp}
        alt="Picture of me!"
        layout="fill" // Ensures the image fills the parent div
        objectFit="cover" // Crops the image to cover the div
        objectPosition="bottom" // Aligns the image so the bottom is visible
      />
    </Paper>
  );
}

export default ProfileImage;
