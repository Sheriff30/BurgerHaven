/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaClock,
  FaUsers,
  FaDollarSign,
  FaCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Section4({ isPricing }) {
  const fishingCharters = [
    {
      title: "4 HOUR INSHORE NEARSHORE FISHING CHARTER",
      price: 550,
      duration: "4 Hours",
      startTimes: ["7:00 AM", "1:00 PM"],
      includes: "2 People",
      maxPeople: 4,
      additionalPersonPrice: 50,
      booking: "Book Now",
      note: "Ideal for both beginners and experienced anglers, our 4-hour Inshore Nearshore Fishing Charter offers a comprehensive fishing experience. Within this time frame, you’ll explore prime fishing spots, equipped with top-tier bait and tackle provided by us. Your knowledgeable captain will be on hand to offer tips and insights, ensuring every opportunity for a productive charter. This charter is perfect for those looking to get a taste of inshore and nearshore fishing within a manageable timeframe.",
      image:
        "https://navigatorcharters.com/wp-content/uploads/2023/10/4-Hour-Inshore-Nearshore-Fishing-Charter-1024x1024.webp",
    },
    {
      title: "6 HOUR INSHORE NEARSHORE FISHING CHARTER",
      price: 750,
      duration: "6 Hours",
      startTimes: ["7:00 AM"],
      includes: "2 People",
      maxPeople: 4,
      additionalPersonPrice: 50,
      booking: "Book Now",
      note: "For those seeking a more extended fishing adventure, the 6-hour Inshore Nearshore Fishing Charter is the answer. Delving deeper into fishing territories, participants will benefit from extended time on the water, increasing their chances of a diverse catch. All necessary equipment, from bait to tackle, is included, and your expert captain will provide in-depth assistance throughout. This charter is a top pick for avid anglers wanting the full fishing experience.",
      image:
        "https://navigatorcharters.com/wp-content/uploads/2023/10/6-Hour-Inshore-Nearshore-Fishing-Charter-1024x1024.webp",
    },
    {
      title: "KIDS INSHORE NEARSHORE BAY FISHING TRIPS",
      price: 400,
      duration: "2 Hours",
      startTimes: ["1:00 PM"],
      includes: "Up to 4 People",
      maxPeople: 4,
      limitedAvailability: true,
      booking: "Call TO Book",
      note: "Specifically designed for youngsters, our Kids Bay Fishing Trips offer a safe and educational introduction to the joys of fishing. Under expert guidance, kids will learn the basics they need and begin casting, and reeling in, all within the calm waters of the bay. Each trip includes child-friendly equipment and ensures a fun, hands-on experience. It’s the perfect opportunity for young anglers to develop skills, understand local marine life, and foster a lifelong love for fishing.",
      image:
        "https://navigatorcharters.com/wp-content/uploads/2023/10/Orange-Beach-Kids-Bay-Fishing-Trips-1024x1024.webp",
    },
    {
      title: "Snapper Charters",
      price: 950,
      duration: "4 and 6 Hour Trips Available",
      startTimes: ["7:00 AM"],
      includes: "Up to 4 People",
      limitedAvailability: true,
      booking: "Call TO Book",
      note: "Dive into a specialized fishing experience with our Orange Beach Offshore Charters, available exclusively during the snapper season. Aimed at both novice and seasoned anglers, this charter zeroes in on prime snapper habitats, maximizing your chances of catching the big ones. With your expert captain to provide insights on snapper behavior and effective techniques, you’re in for a rewarding orange beach fishing charter. All necessary equipment is provided, ensuring you’re well-prepared for the excursion. Remember, the spots are limited, so reserve your spot and get ready for an exciting offshore fishing trip.",
      image:
        "https://navigatorcharters.com/wp-content/uploads/2023/10/Orange-Beach-Red-Snapper-Charters-1024x1024.webp",
    },
    {
      title: "Navigator Charters GiftCards!",
      note: "Looking for a unique gift for that speceal someone? Giftcards are now available!",
      price: "400 - $850",
      booking: "order now",
      image:
        "https://navigatorcharters.com/wp-content/uploads/2023/11/Navigator-Charters-Gift-Card.png",
    },
  ];

  return (
    <div className="py-15 px-4">
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
            }
          }
        `}
      </style>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10 "
      >
        Popular Orange Beach Fishing Charter <br /> Packages
      </motion.h2>

      <div
        className={`flex flex-wrap gap-15 justify-center mx-auto ${
          isPricing ? "flex-col" : "flex-row"
        }`}
      >
        {fishingCharters.map((charter, index) => (
          <motion.div
            key={charter.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`bg-[#010e1c] ${
              isPricing
                ? "max-full flex flex-col lg:flex-row container"
                : "max-w-[560px]"
            } w-full ${
              charter.title === "Snapper Charters" &&
              "border-[#FF0000] bg-[#FF0000] border-2 animate-pulse"
            }`}
            style={
              charter.title === "Snapper Charters"
                ? { animation: "pulse 2s infinite" }
                : {}
            }
          >
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={charter.image}
                alt="  "
                className={`l ${
                  isPricing
                    ? `h-[425px] lg:h-full w-full ${
                        charter.title === "Navigator Charters GiftCards!" &&
                        isPricing
                          ? "lg:w-[250px]"
                          : "lg:w-[425px]"
                      }`
                    : " w-full h-[425px]"
                } object-cover`}
              />
            </div>

            <div className="flex flex-col gap-4 p-6 text-white flex-1">
              <h3
                className={`text-xl md:text-2xl lg:text-4xl font-light ${
                  isPricing ? "text-start" : "text-center"
                } uppercase`}
              >
                {charter.title}
              </h3>

              {isPricing && <div>{charter.note}</div>}
              {!isPricing && (
                <p className="text-2xl font-medium text-center uppercase">
                  {charter.title === "Snapper Charters"
                    ? `Starts at $${charter.price} `
                    : `$${charter.price}`}
                </p>
              )}

              <div className="flex flex-col gap-2 font-light mb-5">
                {charter?.duration && (
                  <div className="flex items-center gap-2">
                    <FaClock className="text-xl" />
                    {charter?.duration}
                  </div>
                )}

                {charter?.startTimes && (
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-xl" />
                    Starts at {charter?.startTimes[0]}
                    {charter?.startTimes[1] && ` or ${charter?.startTimes[1]}`}
                  </div>
                )}

                {charter?.includes && (
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-xl" />
                    Includes {charter?.includes}{" "}
                    {charter?.maxPeople && `(Max ${charter?.maxPeople})`}
                  </div>
                )}

                {charter?.additionalPersonPrice && (
                  <div className="flex items-center gap-2">
                    <FaDollarSign className="text-xl" />$
                    {charter?.additionalPersonPrice} each Additional Person
                  </div>
                )}

                {charter?.limitedAvailability && (
                  <div className="flex items-center gap-2">
                    <FaExclamationTriangle className="text-xl" />
                    Limited Availability
                  </div>
                )}
              </div>

              {isPricing ? (
                <div className="flex justify-between gap-2 mt-auto border-t-2 pt-6">
                  <div className="text-2xl font-medium text-center uppercase">
                    ${charter.price}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className={`bg-white text-black px-4 py-2 uppercas  text-xl uppercase  ${
                      charter.title === "Snapper Charters" && " !text-[#FF0000]"
                    }`}
                  >
                    {charter.booking}
                  </motion.a>
                </div>
              ) : (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className={`bg-white text-black px-4 py-2 uppercas mx-auto text-xl uppercase  ${
                    charter.title === "Snapper Charters" && " !text-[#FF0000]"
                  }`}
                >
                  {charter.booking}
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
