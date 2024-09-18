import React from "react";
import waves from "/public/waves.svg";

export default function Waves() {
  return (
    <img
      src={waves.src}
      alt="A flat image of waves in the horizon"
      className="fixed bottom-0 w-full"
    />
  );
}
