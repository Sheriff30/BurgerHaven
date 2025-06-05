import React, { useState, useEffect } from "react";

export default function Section6() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "https://navigatorcharters.com/wp-content/uploads/2023/10/Man-in-black-hat-holding-Fishing-on-Navigator-Charters-Boat-in-Orange-Beach-AL.webp",
    "https://navigatorcharters.com/wp-content/uploads/2023/10/Man-in-tan-hat-holding-Fishing-on-Navigator-Charters-Boat-in-Orange-Beach-AL.webp",
    "https://navigatorcharters.com/wp-content/uploads/2023/10/Man-in-blue-hat-holding-Fishing-on-Navigator-Charters-Boat-in-Orange-Beach-AL.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-15 bg-navy-black-gradient text-white px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 lg:gap-10 items-center ">
      <img
        src={images[currentImageIndex]}
        alt="Fishing charter boat in Orange Beach"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="flex flex-col gap-4 lg:gap-10">
        <h2 className=" leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest uppercase">
          Book your Orange Beach Fishing CHarter today
        </h2>

        <p className="text-xl md:text-2xl lg:text-3xl font-light">
          Book online or call us at (850) 232-4251
        </p>
        <a
          href="#"
          className="text-xl block md:text-2xl lg:text-3xl font-light uppercase tracking-widest  px-4 py-2 w-fit text-[#002347] bg-white "
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
