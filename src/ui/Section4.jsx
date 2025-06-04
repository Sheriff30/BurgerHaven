import React from "react";
import {
  FaClock,
  FaUsers,
  FaDollarSign,
  FaCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Section4() {
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
      note: "Man fighting a fish he's reeling in on an orange beach fishing charter with Navigator Charters.",
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
      note: "Young man with a sheepshead fish caught in orange beach AL with Navigator Charters.",
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
      note: "Snapper Charters",
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
      note: "Several people who've successfully caught their red snapper in orange beach with Navigator Charters.",
      image:
        "https://navigatorcharters.com/wp-content/uploads/2023/10/Orange-Beach-Red-Snapper-Charters-1024x1024.webp",
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
      <h2 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10 ">
        Popular Orange Beach Fishing Charter <br /> Packages
      </h2>

      <div className="flex flex-wrap gap-15 justify-center  mx-auto">
        {fishingCharters.map((charter) => (
          <div
            key={charter.title}
            className={`bg-[#010e1c] max-w-[560px] w-full ${
              charter.title === "Snapper Charters" &&
              "border-[#FF0000] bg-[#FF0000] border-2 animate-pulse"
            }`}
            style={
              charter.title === "Snapper Charters"
                ? { animation: "pulse 2s infinite" }
                : {}
            }
          >
            <img
              src={charter.image}
              alt="  "
              className="w-full h-[425px] object-cover"
            />
            <div className=" flex flex-col gap-4 p-6 text-white">
              <h3 className="text-xl md:text-2xl lg:text-4xl font-light text-center uppercase">
                {charter.title}
              </h3>
              <p className="text-2xl font-medium text-center uppercase">
                {charter.title === "Snapper Charters"
                  ? `Starts at $${charter.price} `
                  : `$${charter.price}`}
              </p>

              <div className="flex flex-col gap-2 font-light mb-5 ">
                <div className="flex items-center gap-2">
                  <FaClock className="text-xl" />
                  {charter.duration}
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-xl" />
                  Starts at {charter.startTimes[0]}
                  {charter.startTimes[1] && ` or ${charter.startTimes[1]}`}
                </div>

                <div className="flex items-center gap-2">
                  <FaUsers className="text-xl" />
                  Includes {charter.includes}{" "}
                  {charter.maxPeople && `(Max ${charter.maxPeople})`}
                </div>

                {charter.additionalPersonPrice && (
                  <div className="flex items-center gap-2">
                    <FaDollarSign className="text-xl" />$
                    {charter.additionalPersonPrice} each Additional Person
                  </div>
                )}

                {charter.limitedAvailability && (
                  <div className="flex items-center gap-2">
                    <FaExclamationTriangle className="text-xl" />
                    Limited Availability
                  </div>
                )}
              </div>

              <a
                href="#"
                className={`bg-white text-black px-4 py-2 uppercas mx-auto text-xl uppercase  ${
                  charter.title === "Snapper Charters" && " !text-[#FF0000]"
                }`}
              >
                {charter.booking}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
