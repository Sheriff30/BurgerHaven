import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavOpen = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const navLinkClass = ({ isActive }) =>
    ` ${isActive ? "border-b-2 border-white" : ""}`;

  return (
    <header className={`flex justify-between items-center  gap-4 text-white`}>
      {/* LOGO */}
      <NavLink to="/">
        <img
          src="https://navigatorcharters.com/wp-content/uploads/2023/10/Navigator-Charters-Logo-White.png"
          alt="Navigator Charters Logo"
          className="w-40"
        />{" "}
      </NavLink>
      {/* Nav */}
      <nav className="hidden md:block">
        <ul className=" flex justify-between items-center gap-6 uppercase">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className={navLinkClass}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" className={navLinkClass}>
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={navLinkClass}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={navLinkClass}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Book Now */}
      <div className="border py-2 px-4 hidden md:block">
        <NavLink to="/contact" className={navLinkClass}>
          Book Now
        </NavLink>
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
  const navLinkClass = ({ isActive }) =>
    `hover:underline ${isActive ? "underline" : ""}`;

  return (
    <div className=" md:hidden bg-white/50 w-dvw h-dvh fixed top-0 left-0 z-10  backdrop-blur-sm flex flex-col p-6 text-2xl text-[#002347] ">
      <div className="flex justify-end" onClick={handleMobileNavOpen}>
        <IoMdClose className="text-2xl" />
      </div>
      <ul className=" flex justify-between items-center gap-6 flex-col uppercase my-auto  ">
        <li>
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={handleMobileNavOpen}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className={navLinkClass}
            onClick={handleMobileNavOpen}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            className={navLinkClass}
            onClick={handleMobileNavOpen}
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={navLinkClass}
            onClick={handleMobileNavOpen}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className={navLinkClass}
            onClick={handleMobileNavOpen}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={handleMobileNavOpen}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
