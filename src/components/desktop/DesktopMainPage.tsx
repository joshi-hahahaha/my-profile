"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

const DesktopMainPage: React.FC = () => {
  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      credits={{ enabled: false, label: "" }} /* I'm sorry fullpage */
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default DesktopMainPage;
