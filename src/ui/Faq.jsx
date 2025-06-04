import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const charterInfo = [
    {
      question: "What Should I Bring?",
      answer: `We recommend you bring sunglasses, sunscreen and a small cooler with your drinks.
      
      *(Please wear non marking shoes)*
      
      **(No Spray Sunscreen use on the boat).**`,
    },
    {
      question: "What is Included?",
      answer: `Each charter includes the bait, top-notch tackle setup for novices and expert fisherman, and the necessary licenses ensuring everything's above board.
      
      And once you've made your impressive catch? Sit back and relax; we've got the fish cleaning covered. We've taken care of all the fishing setup you need for your fishing adventure.`,
    },
    {
      question: "Do I need to Bring A Life Jacket?",
      answer: `There are adult and children life jackets on the boat, however they are very bulky so if you have one that your child likes feel free to bring it along. The life jackets must be Coast Guard approved.
      
      (Children under the age of 8 must wear a life jacket at all times.)`,
    },
    {
      question: "What About Tipping?",
      answer: `The tip is not included when you purchase your charter. The tip goes directly to the Captian and the recommended tip is typically 15%-20% of the charter fee based on your experience on the boat.`,
    },
    {
      question: "Where Are You Located?",
      answer: `You'll arrive at Zekes Marina and set out to sea on your orange beach fishing charter. The address is 26619 Perdido Beach Boulevard, Orange Beach, Alabama 36561, United States.`,
    },
  ];

  return (
    <div className="py-15 grid gap-5 text-black px-4 max-w-4xl mx-auto">
      <h2 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-8">
        Frequently Asked Questions
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
