import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavOpen = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="flex justify-between items-center  gap-4">
      {/* LOGO */}
      <img
        src="https://navigatorcharters.com/wp-content/uploads/2023/10/Navigator-Charters-Logo-White.png"
        alt="Navigator Charters Logo"
        className="w-40"
      />{" "}
      {/* Nav */}
      <nav className="hidden md:block">
        <ul className=" flex justify-between items-center gap-6 uppercase">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {/* Book Now */}
      <div className="border py-2 px-4 hidden md:block">
        <a href="#">Book Now</a>
      </div>
      {/* Mobile Nav */}
      <div className="md:hidden" onClick={handleMobileNavOpen}>
        <RxHamburgerMenu className="text-2xl" />
      </div>
      {isMobileNavOpen && (
        <MobileNav handleMobileNavOpen={handleMobileNavOpen} />
      )}
    </header>
  );
}

const MobileNav = ({ handleMobileNavOpen }) => {
  return (
    <div className=" md:hidden bg-white/50 w-dvw h-dvh fixed top-0 left-0 z-10  backdrop-blur-sm flex flex-col p-6 text-2xl text-[#002347] ">
      <div className="flex justify-end" onClick={handleMobileNavOpen}>
        <IoMdClose className="text-2xl" />
      </div>
      <ul className=" flex justify-between items-center gap-6 flex-col uppercase my-auto  ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
