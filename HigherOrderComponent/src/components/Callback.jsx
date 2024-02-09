import React, { useState } from "react";
import "../index.css";

function Callback({ getColor }) {
  const [activeColor, setActiveColor] = useState("");

  const handleChangeColor = (e) => {
    // console.log(e.target);
    const value = e.target.value;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <div>
      <input
        type="text"
        aria-label="input"
        id="input"
        className="childDiv"
        onChange={handleChangeColor}
        value={activeColor}
      />
    </div>
  );
}

export default Callback;
