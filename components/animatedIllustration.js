import React from "react";
import BicycleImage from "./Bicycle";

function AnimatedIllustration() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>SVG Animation</h1>
      <BicycleImage width="50%" height="50%" viewBox="0 0 1024 1000" />
    </div>
  );
}

export default AnimatedIllustration;
