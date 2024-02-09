import React, { useState } from "react";
import "../index.css";
import Callback from "../components/Callback";

function Parent() {
  const [uicolor, setuicolor] = useState("");

  const getColor = (colored) => {
    setuicolor(colored);
  };

  return (
    <>
      <div>
        <div
          className="AppComp"
          style={{ backgroundColor: `${uicolor}` }}
        ></div>
      </div>
      <Callback getColor={getColor} />
    </>
  );
}

export default Parent;
