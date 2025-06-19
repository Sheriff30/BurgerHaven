import React, { useState, useEffect, useRef } from "react";

export default function Section6() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1588258127600-adcd8cf614dd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      className={`py-15 overflow-x-hidden bg-navy-black-gradient text-white px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 lg:gap-10 items-center transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img
        src={images[currentImageIndex]}
        alt="Burger Haven Burger Photo"
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
          Order your Burger Haven feast today
        </h2>

        <p className="text-xl md:text-2xl lg:text-3xl font-light">
          Order online or call us at (555) 123-4567
        </p>
        <a
          href="#"
          className="text-xl block md:text-2xl lg:text-3xl font-light uppercase tracking-widest px-4 py-2 w-fit text-[#002347] bg-white hover:bg-opacity-90 transition-colors duration-300"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
