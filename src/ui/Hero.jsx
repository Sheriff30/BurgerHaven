import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { IoIosCall, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Header from "./Header";

export default function Hero({ children }) {
  return (
    <div className="h-dvh text-white grid grid-rows-[auto_1fr]">
      <div className="bg-navy-black-gradient py-2 px-4">
        <div className="container flex justify-center sm:justify-between items-center gap-3  flex-wrap">
          <div className="flex  items-center gap-2 md:gap-3 flex-wrap justify-center sm:justify-between">
            <div className="flex items-center gap-2">
              <IoIosCall className="w-5 h-5 text-white" />
              <a href="tel:5551234567">(555) 123-4567</a>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="w-5 h-5 text-white" />
              <a href="mailto:info@burgerhaven.com">info@burgerhaven.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <IoLogoYoutube />
            </a>
            <a href="#">
              <IoLogoInstagram />
            </a>
            <a href="#">
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
      <div className="px-4 relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0   bg-black/30"></div>
        </div>
        <div className="container py-4 h-full grid grid-rows-[auto_1fr] text-white gap-4 relative z-10">
          <Header />

          {children}
        </div>
      </div>
    </div>
  );
}
