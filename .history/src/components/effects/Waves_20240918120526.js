import React from "react";
import waves from "/public/waves.svg";

export default function Waves() {
  console.log(waves);
  return (
    <img
      src={waves}
      alt="A flat image of waves in the horizon"
      className="fixed bottom-0 w-full"
    />
  );
}
