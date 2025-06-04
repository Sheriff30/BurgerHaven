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
      text: `Today was my third fishing trip guided by Mike Weaver with Navigator Charters.  Mike, who is the owner and guide, is extremely knowledgeable and professional.  Not only is he a wonderful guide, he also is very professional and he tries his HARDEST to make sure you are pleased and that you have every chance possible to catch fish.  Today we chased Redfish in the bay of Gulf Shores, Alabama.  It was an awesome day of fishing for my friend (Todd Fetter) and I were able to catch several of those big boys.  I also landed one that was 37 inches long!!!  Great Day!!!  Thank you Mike for a wonderful day of fishing!!!  We'll see you again next year.  Jason Wilds of Winfield, Alabama.`,
      rating: 5,
    },
    {
      name: "Jake P",
      text: `Had a fantastic day on the water with captain Mike!! He was very knowledgeable in his craft to find fish and explaining how to fish and what to expect when boarding his boat. He was very honest with my wife and I letting us know how the day before went, which we appreciated. Mike was by far one of the best charter captains I have ever had very easy to get along with. Easy to talk with and spent all day answering every question we had.
      Thanks for everything!!!`,
      rating: 5,
    },
    {
      name: "Chad S.",
      text: `Captain Mike took us Arkansas guys on an amazing trip. The wind was really crazy the day we went, but that did not stop us from catching fish. The boat is top of the line, and the dual power poles on the back make this rig unstoppable. One of the guys from our group is extremely allergic to shell fish, so Captain Mike handled the situation very well by baiting his hook, so he never had to worry about touching the shrimp. The trip was really fun and Captain Mike will help you with any situation whether you are an experienced angler or a beginner, you can expect to catch some fish.`,
      rating: 5,
    },
    {
      name: "Andrea F.",
      text: `Captain Mike was very friendly and helpful. He was hilarious and very easy to talk to. I have little experience and he was very great at showing me the ropes. I would definitely recommend fishing with Captain Mike!`,
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
    <div className="py-15 bg-navy-black-gradient text-white px-4 relative pb-20 overflow-hidden">
      <h2 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10 uppercase">
        navigator charters Reviews
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
        `}</style>
        <Slider {...settings} className="bg-white/10 p-6  backdrop-blur-sm">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4 ">
              <div className="">
                <StarRating rating={testimonial.rating} />
                <p className="text-lg mb-4 italic">{testimonial.text}</p>
                <p className="text-right font-semibold">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
