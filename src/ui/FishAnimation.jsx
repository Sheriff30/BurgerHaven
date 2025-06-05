import React from "react";

const FishAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Small fish 1 */}
      <img
        src="/fish2.png"
        alt="fish"
        className="fish fish-1"
        style={{ width: "40px", height: "auto" }}
      />
      {/* Small fish 2 */}
      <img
        src="/fish.png"
        alt="fish"
        className="fish fish-2"
        style={{ width: "30px", height: "auto" }}
      />
      {/* Medium fish */}
      <img
        src="/fish.png"
        alt="fish"
        className="fish fish-3"
        style={{ width: "60px", height: "auto" }}
      />
      {/* Large fish */}
      <img
        src="/fish2.png"
        alt="fish"
        className="fish fish-4"
        style={{ width: "80px", height: "auto" }}
      />
      <style jsx>{`
        .fish {
          position: absolute;
          opacity: 0.6;
          filter: brightness(0.8);
        }
        .fish-1 {
          top: 20%;
          animation: swim1 18s ease-in-out infinite;
        }
        .fish-2 {
          top: 60%;
          animation: swim2 22s ease-in-out infinite;
        }
        .fish-3 {
          top: 40%;
          animation: swim3 25s ease-in-out infinite;
        }
        .fish-4 {
          top: 70%;
          animation: swim4 28s ease-in-out infinite;
        }
        @keyframes swim1 {
          0% {
            transform: translateX(100vw) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(75vw) translateY(-40px) rotate(8deg);
          }
          50% {
            transform: translateX(50vw) translateY(20px) rotate(-5deg);
          }
          75% {
            transform: translateX(25vw) translateY(-30px) rotate(6deg);
          }
          100% {
            transform: translateX(-100%) translateY(0) rotate(0deg);
          }
        }
        @keyframes swim2 {
          0% {
            transform: translateX(100vw) translateY(0) rotate(0deg);
          }
          20% {
            transform: translateX(80vw) translateY(50px) rotate(-10deg);
          }
          40% {
            transform: translateX(60vw) translateY(-30px) rotate(8deg);
          }
          60% {
            transform: translateX(40vw) translateY(40px) rotate(-6deg);
          }
          80% {
            transform: translateX(20vw) translateY(-20px) rotate(4deg);
          }
          100% {
            transform: translateX(-100%) translateY(0) rotate(0deg);
          }
        }
        @keyframes swim3 {
          0% {
            transform: translateX(100vw) translateY(0) rotate(0deg);
          }
          30% {
            transform: translateX(70vw) translateY(-50px) rotate(12deg);
          }
          50% {
            transform: translateX(50vw) translateY(30px) rotate(-8deg);
          }
          70% {
            transform: translateX(30vw) translateY(-40px) rotate(10deg);
          }
          100% {
            transform: translateX(-100%) translateY(0) rotate(0deg);
          }
        }
        @keyframes swim4 {
          0% {
            transform: translateX(100vw) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(75vw) translateY(60px) rotate(-12deg);
          }
          50% {
            transform: translateX(50vw) translateY(-40px) rotate(10deg);
          }
          75% {
            transform: translateX(25vw) translateY(50px) rotate(-8deg);
          }
          100% {
            transform: translateX(-100%) translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FishAnimation;
