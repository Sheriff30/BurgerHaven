import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { IoIosCall, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Header from "./Header";

export default function Hero() {
  return (
    <div className=" h-dvh min-h-dvh text-white grid grid-rows-[auto_1fr]">
      <div className="bg-navy-black-gradient py-2 px-4">
        <div className="container flex justify-center sm:justify-between items-center gap-3  flex-wrap">
          <div className="flex  items-center gap-2 md:gap-3 flex-wrap justify-center sm:justify-between">
            <div className="flex items-center gap-2">
              <IoIosCall className="w-5 h-5 text-white" />
              <a href="tel:8502324251">(850) 232-4251</a>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="w-5 h-5 text-white" />
              <a href="mailto:navigatorcharters@gmail.com">
                Navigatorcharters@gmail.com
              </a>
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
      <div
        className="px-4 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://navigatorcharters.com/wp-content/uploads/2023/10/Nav-bg.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <div className="container py-4 h-full grid grid-rows-[auto_1fr] text-white gap-4">
          <Header />

          <div className="flex justify-center  items-center   flex-col gap-6 text-center ">
            <h1 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest ">
              ORANGE BEACH FISHING <br /> CHARTERS WITH NAVIGATOR <br />{" "}
              CHARTERS
              <br />
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-12">
              BOOK YOUR ORANGE BEACH FISHING CHARTER TODAY!
            </h2>

            <a href="#" className="border py-2 px-4 text-lg md:text-xl">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
