import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const charterInfo = [
    {
      question: "What are your opening hours?",
      answer: `We are open every day from 11am to 10pm. Join us for lunch, dinner, or a late-night burger craving!`,
    },
    {
      question: "Do you offer vegetarian or vegan options?",
      answer: `Yes! We have a delicious Veggie Burger and can customize most burgers to be vegetarian or vegan. Just ask our staff for options.`,
    },
    {
      question: "Can I order online or for delivery?",
      answer: `Absolutely! You can order online for pickup or delivery through our website or popular delivery apps.`,
    },
    {
      question: "Do you have gluten-free buns?",
      answer: `Yes, we offer gluten-free buns for all our burgers. Please let us know your preference when ordering.`,
    },
    {
      question: "Where are you located?",
      answer: `You'll find us at 123 Burger Lane, Food City, USA 12345. We can't wait to serve you!`,
    },
  ];

  return (
    <div className="py-15 grid gap-5 text-black px-4 max-w-4xl mx-auto">
      <h2 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-8">
        Burger Haven FAQ
      </h2>

      <div className="space-y-4">
        {charterInfo.map((item, index) => (
          <div key={index} className="border-b  overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-white  transition-colors duration-200 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider">
                {item.question}
              </span>
              <span className="text-[#000000] text-lg md:text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <div className="prose prose-sm max-w-none text-lg md:text-xl ">
                  {item.answer.split("\n\n").map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
