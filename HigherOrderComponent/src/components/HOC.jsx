import React from "react";

function HOC(Component) {
  const sampleObj = {
    name: "raju",
    age: "22",
    city: "Surat",
  };
  const userid = "Helo";
  return () => <Component value={sampleObj} val2={userid} />;
}

export default HOC;
