import React from "react";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  py-15  ">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="https://navigatorcharters.com/wp-content/uploads/2023/10/Captain-Mike-Weaver-of-Navigator-Charters-in-Orange-Beach-AL.webp"
        alt="Captain Mike Weaver of Navigator Charters in Orange Beach AL"
        className=" w-full object-cover h-[310px] sm:h-[620px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center flex-col gap-4  max-w-[800px] p-5"
      >
        <h2 className="text-3xl xl:text-5xl leading-10 xl:leading-15  uppercase font-medium">
          Orange Beach Fishing Charter <br /> Captain Mike weaver of <br />{" "}
          Navigator Charters
        </h2>

        <p className="text-2xl xl:text-3xl font-light uppercase tracking-widest">
          Orange beach fishing charter captain
        </p>

        <p className="font-light">
          Navigator Charters is a fishing guide service owned and operated by
          Captain Mike Weaver. He is located at Zekes Marina in beautiful Orange
          Beach Alabama and fishes the surrounding waters of Alabama and the
          Florida Panhandle along the coast of the Gulf of Mexico. Capt. Mike is
          a USCG Licensed Captain that has decades of experience on the local
          area waters and loves to share his years of knowledge with all his
          guests. Book your orange beach fishing charter today!
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="text-xl xl:text-2xl font-light uppercase tracking-widest  px-4 py-2 w-fit bg-[#002347] text-white "
        >
          book now
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center lg:text-right  lg:ml-auto flex-col gap-4  max-w-[800px] row-start-4 lg:row-start-2 p-5"
      >
        <h2 className="text-3xl xl:text-5xl leading-15  uppercase font-medium">
          The Boat
        </h2>

        <p className="text-2xl xl:text-3xl font-light uppercase tracking-widest">
          Your Charter Chariot Awaits
        </p>

        <p className="font-light">
          You'll be fishing aboard a very dry and comfortable riding 24' Blazer
          Bay center console. The boat is equipped with GPS / Fish Finder to
          locate the targeted species and a Trolling Motor to hold you on their
          position. The vessel also has plenty of safety equipment, dry storage,
          and seating for a great day on the water. Book your Orange Beach
          fishing charter today!
        </p>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="https://navigatorcharters.com/wp-content/uploads/2024/03/Captain-Mike-Weaver-of-Navigator-Charters-Boat-in-Orange-Beach-AL.webp"
        alt="Captain Mike Weaver of Navigator Charters Boat in Orange Beach AL"
        className=" w-full object-cover h-[310px] sm:h-[620px]"
      />
    </div>
  );
}
