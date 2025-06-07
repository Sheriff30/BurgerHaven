import React from "react";
import Section4 from "../ui/Section4";
import Hero from "../ui/Hero";
import Header from "../ui/Header";
import Contact from "../ui/Contact";

export default function Pricing() {
  return (
    <div>
      <Section4 isPricing={true} />
      <Contact />
    </div>
  );
}
