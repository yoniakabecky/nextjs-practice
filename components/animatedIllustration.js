import React, { useEffect, useRef } from "react";
import BicycleImage from "./Bicycle";
import useIntersection from "../hooks/useIntersection";
import useFadeIn from "../animation/useFadeIn";
import useFadeOut from "../animation/useFadeOut";

const THRESHOLD = 0.3;

function AnimatedIllustration() {
  const ref = useRef();
  const options = { rootMargin: "0px", threshold: THRESHOLD };

  const intersection = useIntersection(ref, options);

  useEffect(() => {
    if (intersection) {
      intersection.intersectionRatio < THRESHOLD
        ? useFadeOut(".fadeIn")
        : useFadeIn(".fadeIn");
    }
  }, [intersection]);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        height: "700px",
      }}
    >
      <div style={{ background: "tomato", padding: "4rem" }} className="fadeIn">
        <h1 className="fadeIn">SVG Animation</h1>
        <BicycleImage
          width="50%"
          height="50%"
          viewBox="0 0 1024 1000"
          className="fadeIn svgImage"
        />
        <button className="fadeIn">hello</button>
      </div>
      <style jsx>{`
        h1 {
          opacity: 1;
          margin: 8rem auto;
        }
        button {
          opacity: 1;
          margin: 2rem auto;
          width: 15rem;
          height: 4rem;
          font-size: 3rem;
          border-radius: 2rem;
        }
        .svgImage {
          opacity: 1;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

export default AnimatedIllustration;
