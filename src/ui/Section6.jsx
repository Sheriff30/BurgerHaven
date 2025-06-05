import React, { useState, useEffect, useRef } from "react";

export default function Section6() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const images = [
    "https://navigatorcharters.com/wp-content/uploads/2023/10/Man-in-black-hat-holding-Fishing-on-Navigator-Charters-Boat-in-Orange-Beach-AL.webp",
    "https://navigatorcharters.com/wp-content/uploads/2023/10/Man-in-tan-hat-holding-Fishing-on-Navigator-Charters-Boat-in-Orange-Beach-AL.webp",
    "https://navigatorcharters.com/wp-content/uploads/2023/10/Man-in-blue-hat-holding-Fishing-on-Navigator-Charters-Boat-in-Orange-Beach-AL.webp",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <div
      ref={sectionRef}
      className={`py-15 bg-navy-black-gradient text-white px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 lg:gap-10 items-center transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img
        src={images[currentImageIndex]}
        alt="Fishing charter boat in Orange Beach"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`flex flex-col gap-4 lg:gap-10 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <h2 className="leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest uppercase">
          Book your Orange Beach Fishing CHarter today
        </h2>

        <p className="text-xl md:text-2xl lg:text-3xl font-light">
          Book online or call us at (850) 232-4251
        </p>
        <a
          href="#"
          className="text-xl block md:text-2xl lg:text-3xl font-light uppercase tracking-widest px-4 py-2 w-fit text-[#002347] bg-white hover:bg-opacity-90 transition-colors duration-300"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
