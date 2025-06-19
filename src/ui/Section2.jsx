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
        src="https://images.unsplash.com/photo-1588258127600-adcd8cf614dd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Chef at Burger Haven preparing burgers"
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
          Welcome to Burger Haven
          <br />
          Home of the Juiciest Burgers
        </h2>

        <p className="text-2xl xl:text-3xl font-light uppercase tracking-widest">
          Meet Our Burger Chef
        </p>

        <p className="font-light">
          Burger Haven is your go-to destination for mouthwatering burgers,
          crispy fries, and creamy shakes. Our chef brings years of experience
          and a passion for crafting the perfect burger, using only the freshest
          ingredients. Join us for a burger experience you won't forget!
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="text-xl xl:text-2xl font-light uppercase tracking-widest  px-4 py-2 w-fit bg-[#b3541e] text-white "
        >
          order now
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
          Our Restaurant
        </h2>

        <p className="text-2xl xl:text-3xl font-light uppercase tracking-widest">
          A Place for Burger Lovers
        </p>

        <p className="font-light">
          Enjoy your meal in our cozy, family-friendly restaurant. Whether
          you're dining in or taking out, Burger Haven is dedicated to serving
          you the best burgers in town. Come taste the difference today!
        </p>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
        alt="Burger Haven restaurant interior"
        className=" w-full object-cover h-[310px] sm:h-[620px]"
      />
    </div>
  );
}
