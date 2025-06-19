import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-navy-black-gradient text-white pt-16 pb-6 px-4 mt-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start pb-10">
        {/* About & Logo */}
        <div className="flex flex-col items-center md:items-start gap-4 md:col-span-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Burger Haven Logo"
            className="w-20 mb-2"
          />
          <p className="text-center md:text-left text-base font-light max-w-xs">
            Savor the best burgers in town! Visit Burger Haven for juicy
            burgers, crispy fries, and delicious shakes. Your new favorite
            burger spot awaits.
          </p>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-2 md:col-span-1">
          <h3 className="text-xl font-semibold mb-2 uppercase tracking-widest">
            Contact Info
          </h3>
          <p>
            123 Burger Lane
            <br />
            Food City, USA 12345
          </p>
          <p>Open</p>
          <p>Mon-Sun 11am-10pm</p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-2 md:col-span-1">
          <h3 className="text-xl font-semibold mb-2 uppercase tracking-widest">
            Quick Links
          </h3>
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Reviews
          </a>
          <a href="#" className="hover:underline">
            Gallery
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        {/* Social & Connect */}
        <div className="flex flex-col gap-2 items-center md:items-start md:col-span-1">
          <h3 className="text-xl font-semibold mb-2 uppercase tracking-widest">
            Connect With Us
          </h3>
          <div className="flex gap-4 text-2xl mb-2">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <IoLogoInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300">
              <IoLogoYoutube />
            </a>
            <a href="#" aria-label="Google" className="hover:text-gray-300">
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-2">
        <span className="opacity-80">
          ©2025 Burger Haven. All Rights Reserved.
        </span>
        <div className="flex gap-4">
          <a href="#" className="hover:underline opacity-80">
            Sitemap
          </a>
          <a href="#" className="hover:underline opacity-80">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
