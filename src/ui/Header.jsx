import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavOpen = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="flex justify-between items-center  gap-4">
      {/* LOGO */}
      <Link to="/">
        <img
          src="https://navigatorcharters.com/wp-content/uploads/2023/10/Navigator-Charters-Logo-White.png"
          alt="Navigator Charters Logo"
          className="w-40"
        />{" "}
      </Link>
      {/* Nav */}
      <nav className="hidden md:block">
        <ul className=" flex justify-between items-center gap-6 uppercase">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Book Now */}
      <div className="border py-2 px-4 hidden md:block">
        <Link to="/contact">Book Now</Link>
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
          <Link to="/" onClick={handleMobileNavOpen}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/pricing" onClick={handleMobileNavOpen}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/reviews" onClick={handleMobileNavOpen}>
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={handleMobileNavOpen}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/faq" onClick={handleMobileNavOpen}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleMobileNavOpen}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
