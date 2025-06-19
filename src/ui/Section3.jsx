import React from "react";

export default function Section3() {
  return (
    <div className="relative py-15 grid gap-5 uppercase bg-navy-black-gradient text-[#b3541e] px-4">
      <img
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
        alt="Burger"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <h2 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest">
        DISCOVER OUR SIGNATURE BURGERS
      </h2>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-light">
        Gourmet Burgers, Crispy Fries, and More!
        <br />
        Taste the difference at Burger Haven.
      </h3>
    </div>
  );
}
