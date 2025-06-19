import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import Contact from "../ui/Contact";

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah L.",
      review:
        "Absolutely the best burgers in town! The Classic Haven Burger is juicy and full of flavor. The staff is super friendly and the atmosphere is cozy. Highly recommend!",
    },
    {
      name: "Mike D.",
      review:
        "Tried the Spicy BBQ Burger and it blew my mind. The fries are crispy and the milkshakes are a must-try. Will definitely be coming back!",
    },
    {
      name: "Jessica P.",
      review:
        "Burger Haven is my new go-to spot for lunch. Fast service, fresh ingredients, and the burgers are always cooked to perfection.",
    },
    {
      name: "Tom R.",
      review:
        "Great place for families! My kids loved the cheeseburgers and the play area. The staff made us feel right at home.",
    },
    {
      name: "Emily W.",
      review:
        "The Veggie Burger is delicious and satisfying. So glad to have a place with great vegetarian options!",
    },
    {
      name: "Carlos M.",
      review:
        "Stopped by for a quick bite and was impressed by the quality and taste. The buns are fresh and the toppings are generous.",
    },
    {
      name: "Priya S.",
      review:
        "Love the variety on the menu. The staff is always smiling and the restaurant is spotless. Five stars!",
    },
    {
      name: "James K.",
      review:
        "Tried the double bacon burger and it was amazing. The portion sizes are great and the prices are reasonable.",
    },
  ];

  return (
    <>
      <div className="container py-15 px-4">
        <h1 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10">
          Burger Haven Reviews <br /> From Our Happy Customers
        </h1>

        <div className="flex flex-col gap-8 ">
          {reviews.map((review) => (
            <div className="flex flex-col gap-4 border-b-1 pb-8 last:border-b-0">
              <div className="text-xl  lg:text-2xl font-light ">
                {review.review}
              </div>

              <div className="text-lg lg:text-xl font-bold">
                – {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" py-15 px-4 bg-navy-black-gradient text-white">
        <h1 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10 uppercase">
          More Burger Haven Reviews
        </h1>
        <div className="flex justify-center gap-7 md:gap-10">
          <a
            href="https://www.facebook.com/navigatorcharters/reviews"
            className="text-4xl max-w-[100px] md:max-w-[300px] w-full "
          >
            <img
              src="https://via.placeholder.com/100x100?text=FB"
              alt="facebook logo"
              className="w-full h-full"
            />{" "}
          </a>
          <a
            href="https://www.google.com/maps/place/Navigator+Charters/@30.2753617,-87.5691303,15z/data=!4m6!3m5!1s0x889a07a7fdc55555:0x7a36b643eae53c89!8m2!3d30.2753617!4d-87.5691303!16s%2Fg%2F11hcyypk0w?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
            className="text-4xl max-w-[100px] md:max-w-[300px] w-full "
          >
            <img
              src="https://via.placeholder.com/100x100?text=Google"
              alt="google logo"
              className="w-full h-full"
            />
          </a>
        </div>
      </div>

      <Contact />
    </>
  );
}
