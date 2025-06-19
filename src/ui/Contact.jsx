import React from "react";
import { IoIosCall, IoMdMail, IoMdTime, IoMdPin } from "react-icons/io";

export default function Contact() {
  return (
    <div className="py-15 bg-white text-[#b3541e] px-4">
      <div className="container mx-auto">
        <h2 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10 uppercase">
          Contact Burger Haven
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-widest">
                Get in Touch
              </h3>
              <p className="text-lg md:text-xl">
                Have questions? We'd love to speak with you. Feel free to reach
                out using the details below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <IoIosCall className="text-2xl" />
                <a
                  href="tel:5551234567"
                  className="text-lg md:text-xl hover:text-yellow-600 transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-4">
                <IoMdMail className="text-2xl" />
                <a
                  href="mailto:info@burgerhaven.com"
                  className="text-lg md:text-xl hover:text-yellow-600 transition-colors"
                >
                  info@burgerhaven.com
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-widest">
                Location
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <IoMdPin className="text-2xl mt-1" />
                  <p className="text-lg md:text-xl">
                    26619 Perdido Beach Blvd
                    <br />
                    Orange Beach, AL 36561
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <IoMdTime className="text-2xl" />
                  <p className="text-lg md:text-xl">Mon-Sat 7:00AM - 8:00PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px]  overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.870750726134!2d-73.9776226845936!3d40.7850913793246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f6e8e8e8f%3A0x8e8e8e8e8e8e8e8e!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
