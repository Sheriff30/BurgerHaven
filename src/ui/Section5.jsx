import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

export default function Section5() {
  const testimonials = [
    {
      name: "Jason W.",
      text: `The Burger Haven Double Stack is a game changer! Juicy patties, melty cheese, and that secret sauce... wow. Mike behind the grill made sure every bite was perfect. Can't wait to come back for more!`,
      rating: 5,
    },
    {
      name: "Jake P",
      text: `Had the best burger experience ever! The buns were soft, the beef was flavorful, and the fries were crispy. Mike even recommended the Chilli Cheese Burger—absolutely delicious. 🍔 Highly recommend!`,
      rating: 5,
    },
    {
      name: "Chad S.",
      text: `Tried the BBQ Bacon Burger and it was love at first bite. The smoky flavor, crunchy bacon, and fresh toppings made it unforgettable. The staff was super friendly and the vibe is classic burger joint!`,
      rating: 5,
    },
    {
      name: "Andrea F.",
      text: `I'm not usually a burger person, but Burger Haven changed my mind! The Veggie Burger was packed with flavor and the milkshake was the cherry on top. Mike made us feel right at home.`,
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: "slick-dots",
    customPaging: function () {
      return (
        <div className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity" />
      );
    },
  };

  return (
    <div className="py-16 px-4 relative pb-24 overflow-hidden bg-gradient-to-br from-yellow-300 via-orange-200 to-red-200 font-sans">
      <h2 className="text-center leading-snug font-extrabold text-3xl md:text-5xl lg:text-7xl tracking-widest mb-12 uppercase text-yellow-900 drop-shadow-lg burger-font">
        Burger Haven Reviews
      </h2>
      <div className="max-w-4xl mx-auto">
        <style jsx global>{`
          .slick-dots {
            bottom: -40px;
            margin-left: -20px;
          }
          .slick-dots li {
            margin: 0 8px;
          }
          .slick-dots li button:before {
            display: none;
          }
          @import url("https://fonts.googleapis.com/css2?family=Chewy&display=swap");
          .burger-font {
            font-family: "Chewy", cursive;
          }
        `}</style>
        <Slider
          {...settings}
          className="bg-white/70 p-8 rounded-3xl shadow-2xl backdrop-blur-md"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4 ">
              <div className="rounded-2xl bg-yellow-50/90 shadow-lg p-8 border-2 border-yellow-200 relative">
                <StarRating rating={testimonial.rating} />
                <p className="text-xl mb-6 italic text-yellow-900 burger-font">
                  {testimonial.text}
                </p>
                <p className="text-right font-bold text-orange-700 text-lg flex items-center justify-end gap-2 burger-font">
                  <span role="img" aria-label="burger">
                    🍔
                  </span>{" "}
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
