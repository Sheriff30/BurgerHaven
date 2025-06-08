import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import Contact from "../ui/Contact";

export default function Reviews() {
  const reviews = [
    {
      name: "Chad S.",
      review:
        "Had a fantastic day on the water with captain Mike!! He was very knowledgeable in his craft to find fish and explaining how to fish and what to expect when boarding his boat. He was very honest with my wife and I letting us know how the day before went, which we appreciated. Mike was by far one of the best charter captains I have ever had very easy to get along with. Easy to talk with and spent all day answering every question we had. Thanks for everything!!!",
    },
    {
      name: "Andrea F.",
      review:
        "Captain Mike was very friendly and helpful. He was hilarious and very easy to talk to. I have little experience and he was very great at showing me the ropes. I would definitely recommend fishing with Captain Mike!",
    },
    {
      name: "Jason W.",
      review:
        "Today was my third fishing trip guided by Mike Weaver with Navigator Charters. Mike, who is the owner and guide, is extremely knowledgeable and professional. Not only is he a wonderful guide, he also is very professional and he tries his HARDEST to make sure you are pleased and that you have every chance possible to catch fish. Today we chased Redfish in the bay of Gulf Shores, Alabama. It was an awesome day of fishing for my friend (Todd Fetter) and I were able to catch several of those big boys. I also landed one that was 37 inches long!!! Great Day!!! Thank you Mike for a wonderful day of fishing!!! We’ll see you again next year. Jason Wilds of Winfield, Alabama.",
    },
    {
      name: "Jake P.",
      review:
        "Captain Mike took us Arkansas guys on an amazing trip. The wind was really crazy the day we went, but that did not stop us from catching fish. The boat is top of the line, and the dual power poles on the back make this rig unstoppable. One of the guys from our group is extremely allergic to shell fish, so Captain Mike handled the situation very well by baiting his hook, so he never had to worry about touching the shrimp. The trip was really fun and Captain Mike will help you with any situation whether you are an experienced angler or a beginner, you can expect to catch some fish.",
    },
    {
      name: "Jeremy K.",
      review:
        "Captain Mike was great. It was tough for most captains to find bait the day we went out but Captain Mike did a fine job of making sure we still managed to have a great experience. We caught several fish and had a great time. We will certainly go out with him again next year.",
    },
    {
      name: "Jeff H.",
      review:
        "What a great fishing experience with Mike!! He is a great captain, fisherman, and an even greater person. Mike is extremely knowledgeable, personable, and fun to be around. He worked hard to find the perfect location and we ended up with a great catch. My wife went along but did not fish and she had a great time on the boat. Can’t wait to fish again with Mike.",
    },
    {
      name: "Brant F.",
      review:
        "My friend Delores and I went fishing with Mike on an afternoon booking. Neither of us have any experience with salt water fishing. Mike put us on fish and gave excellent instruction on how to feel the bites, set the hook and land the fish. We caught more fish than we ever expected, had a wonderful time and would book with Mike in the future. He proved to be an excellent and considerate Captain.",
    },
    {
      name: "Tony M.",
      review:
        "Amazing trip with 4 family members. Mike was a fantastic captain and extremely helpful. We caught our limit with everyone on the boat catching multiple fish and species. Best charter experience we’ve ever had. Mike is very laid back, personable, and knowledgeable. Great experience and plan on using him again in the future.",
    },
  ];

  return (
    <>
      <div className="container py-15 px-4">
        <h1 className="text-center leading-snug font-bold text-2xl md:text-4xl lg:text-6xl tracking-widest mb-10">
          Navigator Charters Reviews <br /> From Past Charter Trips
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
          More navigator charters Reviews
        </h1>
        <div className="flex justify-center gap-7 md:gap-10">
          <a
            href="https://www.facebook.com/navigatorcharters/reviews"
            className="text-4xl max-w-[100px] md:max-w-[300px] w-full "
          >
            <img
              src="https://navigatorcharters.com/wp-content/uploads/2023/10/Facebook-Logo.svg"
              alt="facebook logo"
              className="w-full h-full"
            />{" "}
          </a>
          <a
            href="https://www.google.com/maps/place/Navigator+Charters/@30.2753617,-87.5691303,15z/data=!4m6!3m5!1s0x889a07a7fdc55555:0x7a36b643eae53c89!8m2!3d30.2753617!4d-87.5691303!16s%2Fg%2F11hcyypk0w?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
            className="text-4xl max-w-[100px] md:max-w-[300px] w-full "
          >
            <img
              src="https://navigatorcharters.com/wp-content/uploads/2023/10/Google-Logo.svg"
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
