"use client";

import useIsPhone from "../helpers/hooks/isPhone";
import DesktopApp from "@/views/desktop/DesktopApp";
import MobileApp from "@/views/mobile/MobileApp";

export default function App() {
  const isMobile: boolean = useIsPhone();
  return (
    <div className="w-screen h-screen font-jbmono">
      {isMobile ? <MobileApp /> : <DesktopApp />}
    </div>
  );
}
