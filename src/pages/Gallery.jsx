/* eslint-disable no-unused-vars */
import React from "react";
import Contact from "../ui/Contact";
import { motion } from "framer-motion";

export default function Gallery() {
  const imageUrls = [
    "https://lh3.googleusercontent.com/p/AF1QipMpd1pEQePjwXd79V74I37OBvmbgUcmfqj92AUq=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMXyzvFO8ZWH8EQqOVdbA_sEO4DMsIm3-cIDh2Y=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMDbtIHqFpQxAP6yHgZGV1H22usIlBhGsbtD8fF=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipOzf-hhnFbR82Y9jSEDxDQmA_OD6PTyMiIjMH0H=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipOzf-hhnFbR82Y9jSEDxDQmA_OD6PTyMiIjMH0H=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipN2R5JtP24Ci2EGv83znl3SmeFeXfYGYV_LPz7e=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMILCbLaH2xe37zjpTmQXQEANMn7yRtvJ0UhWsW=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMYZSppnolCU1AFiZ_NO6mRx3IVaFgrRRRC4oJR=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipOJmrqklZW_7gQFGuD2rZg7JV2TTFJM2wF1yDUt=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipNR4nGwANn2O2dNNRP81oeds7GXQWYAsYlVu0X4=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipPJ1ao-WmcS0RuGZ-YIJBq3fBrzF-oc2PLIH2jy=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMBrASH9qj2KJJ7vGN98cCxRQgMGDIAn4JjVMYL=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipOhxSwiDUSLF8AySaIYaRBrr334ifjLqRQ11MlC=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMG46Lj4bLDRuuVHFLp7XHpxUipfZxR4nb1y3dZ=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipNbZOxKh6O68nJOdGAuR4qjhLQrw4DXsDd2oS7x=s680-w680-h510",
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10">
          ORANGE BEACH CHARTER FISHING PICTURES WITH NAVIGATOR CHARTERS
        </h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {imageUrls.map((url, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={url}
                alt="Orange Beach Fishing Pictures"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
}
