import React from "react";
import { Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Navbar() {
  return (
    <div className="text-white h-24 flex items-center justify-between">
      <div className="text-3xl">Joshi Ha</div>
      <div className="flex w-auto justify-between">
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
      </div>
    </div>
  );
}

export default Navbar;
