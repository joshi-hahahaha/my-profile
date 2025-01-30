"use client";

import DesktopMainPage from "@/components/desktop/DesktopMainPage";
import useIsPhone from "../helpers/hooks/isPhone";
import MobileMainPage from "@/components/mobile/MobileMainPage";

export default function App() {
  const isMobile: boolean = useIsPhone();
  return isMobile ? <MobileMainPage /> : <DesktopMainPage />;
}
