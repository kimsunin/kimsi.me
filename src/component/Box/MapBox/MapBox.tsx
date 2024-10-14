"use client";
import React from "react";
import CustomImage from "@/component/CustomImage/CustomImage";
import Link from "next/link";
import "./MapBox.css";

function MapBox() {
  const [isAnimated, setIsAnimated] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
      setWidth(200); // New width
      setHeight(200); // New height
      setOpacity(0); // New opacity
    }, 1000); // Delay before animation starts

    const resetTimer = setTimeout(() => {
      setIsAnimated(false); // Stop animation
      setWidth(0); // Reset width
      setHeight(0); // Reset height
      setOpacity(1); // Reset opacity instantly
    }, 5000); // Reset after the animation

    return () => {
      clearTimeout(timer);
      clearTimeout(resetTimer);
    };
  }, [isAnimated]);

  return (
    <Link
      href="https://www.google.co.kr/maps/search/%EC%B6%A9%EB%82%A8%EB%8C%80%ED%95%99%EA%B5%90/data=!3m1!4b1?hl=ko&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      className="map-box"
    >
      <CustomImage src={"/img/cnuMap.png"} />
      <div>
        <div />
        <div
          className={isAnimated ? "isAnimated" : ""}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            opacity: opacity,
          }}
        ></div>
      </div>
      <div>🏡 cnu, dajeon</div>
    </Link>
  );
}

export default MapBox;
