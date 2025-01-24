import React from "react";
import { Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Navbar() {
  return (
    <div className="text-white h-6 sm:h-24 flex items-center justify-center sm:justify-between">
      <div className="hidden sm:text-3xl">JOSHI HA</div>
      <div className="hidden sm:flex  sm:w-auto sm:justify-between">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/joshi-ha-11b339267"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="p-0">
            <LinkedInIcon
              sx={{ color: "white", height: "48px", width: "auto" }}
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
              sx={{ color: "white", height: "48px", width: "auto" }}
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
              sx={{ color: "white", height: "48px", width: "auto" }}
            />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
