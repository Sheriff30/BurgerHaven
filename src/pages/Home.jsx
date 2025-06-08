import React from "react";
import Hero from "../ui/Hero";
import Section2 from "../ui/Section2";
import Section3 from "../ui/Section3";
import Section4 from "../ui/Section4";
import Section5 from "../ui/Section5";
import FAQ from "../ui/FAQ";
import Section6 from "../ui/Section6";
import Contact from "../ui/Contact";

export default function Home() {
  return (
    <div>
      <Hero>
        <div className="flex justify-center items-center flex-col gap-6 text-center">
          <h1 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest">
            ORANGE BEACH FISHING <br /> CHARTERS WITH NAVIGATOR <br /> CHARTERS
            <br />
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-12">
            BOOK YOUR ORANGE BEACH FISHING CHARTER TODAY!
          </h2>

          <a href="#" className="border py-2 px-4 text-lg md:text-xl">
            Book Now
          </a>
        </div>
      </Hero>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <FAQ />
      <Section6 />
      <Contact />
    </div>
  );
}
