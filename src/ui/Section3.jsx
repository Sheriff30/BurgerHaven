import React from "react";
import FishAnimation from "./FishAnimation";

export default function Section3() {
  return (
    <div className="relative py-15 grid gap-5 uppercase bg-navy-black-gradient text-white px-4">
      <FishAnimation />
      <h2 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest">
        EXPLORE ORANGE BEACH <br /> CHARTER FISHING
      </h2>

      <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-light">
        Inshore Nearshore and Backwater FIshing <br /> Charters
      </h3>
    </div>
  );
}
