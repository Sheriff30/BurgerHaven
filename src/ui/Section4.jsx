/* eslint-disable no-unused-vars */
import React from "react";
import { FaHamburger, FaGift } from "react-icons/fa";
import { GiFrenchFries, GiChickenOven, GiChiliPepper } from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";
import { motion } from "framer-motion";

export default function Section4({ isPricing }) {
  const burgerCombos = [
    {
      title: "Classic Cheeseburger Combo",
      price: 12,
      duration: "Ready in 10 min",
      startTimes: ["11:00 AM", "9:00 PM"],
      includes: "Burger, Fries & Drink",
      maxPeople: 1,
      additionalPersonPrice: 10,
      booking: "Order Now",
      note: "Our signature juicy beef patty topped with melted cheddar, fresh lettuce, tomato, pickles, and our house sauce. Served with crispy fries and a drink.",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Double Bacon BBQ Combo",
      price: 15,
      duration: "Ready in 12 min",
      startTimes: ["11:00 AM"],
      includes: "Double Burger, Fries & Drink",
      maxPeople: 1,
      additionalPersonPrice: 12,
      booking: "Order Now",
      note: "Two flame-grilled beef patties, crispy bacon, cheddar cheese, onion rings, and smoky BBQ sauce. Comes with golden fries and a drink.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Veggie Delight Combo",
      price: 11,
      duration: "Ready in 8 min",
      startTimes: ["11:00 AM"],
      includes: "Veggie Burger, Fries & Drink",
      maxPeople: 1,
      limitedAvailability: true,
      booking: "Order Now",
      note: "A delicious plant-based patty with lettuce, tomato, avocado, and vegan mayo. Served with fries and a drink. Limited daily availability!",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Spicy Chicken Burger Combo",
      price: 13,
      duration: "Ready in 10 min",
      startTimes: ["11:00 AM"],
      includes: "Chicken Burger, Fries & Drink",
      limitedAvailability: true,
      booking: "Order Now",
      note: "Crispy fried chicken breast tossed in spicy sauce, topped with slaw and pickles. Served with fries and a drink. Limited time only!",
      image:
        "https://images.unsplash.com/photo-1588258127600-adcd8cf614dd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Burger Haven Gift Cards!",
      note: "Give the gift of flavor! Gift cards now available for any combo.",
      price: "$10 - $100",
      booking: "Buy Gift Card",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Helper to pick icons based on combo
  const getComboIcons = (combo) => {
    if (combo.title === "Classic Cheeseburger Combo") {
      return [
        <FaHamburger key="burger" />,
        <GiFrenchFries key="fries" />,
        <MdLocalDrink key="drink" />,
      ];
    }
    if (combo.title === "Double Bacon BBQ Combo") {
      return [
        <FaHamburger key="burger" />,
        <GiFrenchFries key="fries" />,
        <MdLocalDrink key="drink" />,
      ];
    }
    if (combo.title === "Veggie Delight Combo") {
      return [
        <FaHamburger key="burger" />,
        <GiFrenchFries key="fries" />,
        <MdLocalDrink key="drink" />,
      ];
    }
    if (combo.title === "Spicy Chicken Burger Combo") {
      return [
        <GiChickenOven key="chicken" />,
        <GiFrenchFries key="fries" />,
        <MdLocalDrink key="drink" />,
        <GiChiliPepper key="spicy" />,
      ];
    }
    if (combo.title === "Burger Haven Gift Cards!") {
      return [<FaGift key="gift" />];
    }
    return [];
  };

  return (
    <div className="py-15 px-4 bg-white text-[#b3541e]">
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
        Popular Burger Haven Combos
      </motion.h2>

      <div
        className={`flex flex-wrap gap-10 justify-center mx-auto ${
          isPricing ? "flex-col" : "flex-row"
        }`}
      >
        {burgerCombos.map((combo, index) => (
          <motion.div
            key={combo.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`bg-[#010e1c] ${
              isPricing
                ? "max-full flex flex-col lg:flex-row container"
                : "max-w-[460px]"
            } w-full`}
            style={{}}
          >
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={combo.image}
                alt={combo.title}
                className={`l ${
                  isPricing
                    ? `h-[425px] lg:h-full w-full ${
                        combo.title === "Burger Haven Gift Cards!" && isPricing
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
                {combo.title}
              </h3>

              <div className="flex gap-2 text-2xl mb-2 justify-center">
                {getComboIcons(combo)}
              </div>

              {isPricing && <div>{combo.note}</div>}
              {!isPricing && (
                <p className="text-2xl font-medium text-center uppercase">
                  {combo.title === "Burger Haven Gift Cards!"
                    ? `${combo.price}`
                    : `$${combo.price}`}
                </p>
              )}

              <div className="flex flex-col gap-2 font-light mb-5">
                {combo?.duration && (
                  <div className="flex items-center gap-2">
                    <FaHamburger className="text-xl" />
                    {combo?.duration}
                  </div>
                )}

                {combo?.startTimes && (
                  <div className="flex items-center gap-2">
                    <MdLocalDrink className="text-xl" />
                    Available {combo?.startTimes[0]}
                    {combo?.startTimes[1] && ` - ${combo?.startTimes[1]}`}
                  </div>
                )}

                {combo?.includes && (
                  <div className="flex items-center gap-2">
                    <GiFrenchFries className="text-xl" />
                    Includes {combo?.includes}
                  </div>
                )}

                {combo?.additionalPersonPrice && (
                  <div className="flex items-center gap-2">
                    <FaGift className="text-xl" />$
                    {combo?.additionalPersonPrice} for extra combo
                  </div>
                )}

                {combo?.limitedAvailability && (
                  <div className="flex items-center gap-2">
                    <GiChiliPepper className="text-xl" />
                    Limited Availability
                  </div>
                )}
              </div>

              {isPricing ? (
                <div className="flex justify-between gap-2 mt-auto border-t-2 pt-6">
                  <div className="text-2xl font-medium text-center uppercase">
                    {combo.title === "Burger Haven Gift Cards!"
                      ? `${combo.price}`
                      : `$${combo.price}`}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className={`bg-white text-black px-4 py-2 uppercas  text-xl uppercase`}
                  >
                    {combo.booking}
                  </motion.a>
                </div>
              ) : (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className={`bg-white text-black px-4 py-2 uppercas mx-auto text-xl uppercase`}
                >
                  {combo.booking}
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
