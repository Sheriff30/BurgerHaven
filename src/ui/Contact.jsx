import React from "react";
import { IoIosCall, IoMdMail, IoMdTime, IoMdPin } from "react-icons/io";

export default function Contact() {
  return (
    <div className="py-15 bg-white text-black px-4">
      <div className="container mx-auto">
        <h2 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10 uppercase">
          Contact Navigator Charters
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
                  href="tel:8502324251"
                  className="text-lg md:text-xl hover:text-gray-300 transition-colors"
                >
                  (850) 232-4251
                </a>
              </div>
              <div className="flex items-center gap-4">
                <IoMdMail className="text-2xl" />
                <a
                  href="mailto:Navigatorcharters@gmail.com"
                  className="text-lg md:text-xl hover:text-gray-300 transition-colors"
                >
                  Navigatorcharters@gmail.com
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6566856675763!2d-87.5717052244374!3d30.27536167480811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a07a7fdc55555%3A0x7a36b643eae53c89!2sNavigator%20Charters!5e0!3m2!1sen!2sus!4v1749128945842!5m2!1sen!2sus"
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
