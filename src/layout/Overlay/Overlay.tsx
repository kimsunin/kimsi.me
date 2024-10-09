"use client";
import React from "react";
import "./Overlay.css";

type PropsType = {
  children: React.ReactNode;
};

function Overlay({ children }: PropsType) {
  React.useEffect(() => {
    const $body = document.querySelector("body");
    if ($body) {
      const overflow = $body.style.overflow;
      $body.style.overflow = "hidden";
      return () => {
        $body.style.overflow = overflow;
      };
    }
  }, []);

  return <div className="overlay">{children}</div>;
}

export default Overlay;
