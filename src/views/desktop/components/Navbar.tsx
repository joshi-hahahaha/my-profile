import React from "react";
import Image from "next/image";

import { Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import Logo from "@/assets/otter_logo.png";

const Navbar = () => {
  return (
    <div className="bg-white text-black w-full h-16 p-4 flex items-center justify-between rounded-3xl drop-shadow-strong">
      <div className="flex space-x-4 items-center">
        <div className="aspect-square rounded-2xl">
          <Image src={Logo} width={55} alt="Otter logo" objectFit="cover" />
        </div>
        <div>B. Computer Science</div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 items-center">
        <div className="nav-link">ABOUT ME</div>
        <div className="nav-link-divider">/</div>
        <div className="nav-link">SKILLS</div>
        <div className="nav-link-divider">/</div>
        <div className="nav-link">PROJECTS</div>
        <div className="nav-link-divider">/</div>
        <div className="nav-link">EXPERIENCE</div>
      </div>
      <div className="flex">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/joshi-ha-11b339267"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="p-0">
            <LinkedInIcon
              sx={{ color: "black", height: "48px", width: "auto" }}
            />
          </Button>
        </a>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/19kzC2H3WJ/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="p-0">
            <FacebookIcon
              sx={{ color: "black", height: "48px", width: "auto" }}
            />
          </Button>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/joshi_hahahaha?igsh=MW5kZXhjeHdibHM5aQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="p-0">
            <InstagramIcon
              sx={{ color: "black", height: "48px", width: "auto" }}
            />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
