import React from "react";
import { motion } from "framer-motion";
import coding from "../assets/coding.svg";
const paraVariant = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <section
      name="about"
      className=" py-10 min-h-screen w-full flex justify-center items-center bg-gradient-to-b from-gray-800 to-black">
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className=" container p-10">
        <motion.h1
          variants={paraVariant}
          className="text-4xl border-b-4 mb-16 border-gray-500 inline-block text-white">
          About
        </motion.h1>
        <div className=" flex gap-20 py-10 lg:flex-row flex-col">
          <motion.img
            variants={paraVariant}
            src={coding}
            width="600px"
            alt=""
          />
          <motion.div variants={paraVariant}>
            <p className=" py-3 text-xl text-gray-500 leading-8 tracking-wide">
              Hi, my name is Swam Htet Aung and I use Shinji as my nickname
              across social medias. I’m a front end web developer from Myanmar.
              Aside from coding, I’m also passionate about sports and gaming.
              Currently, I’m learning more about Redux toolkit, NextJs and PHP.
            </p>
            <br />
            <p className=" py-3 text-xl text-gray-500 leading-8 tracking-wide">
              My interest in web development started back in 2017 when I was in
              University and started building websites for the first time using
              HTML and CSS. Fast forward to 2023 and I’ve tried it all, from
              Learning Japanese, Digital Art, Streaming, Graphic Design, UI/UX
              with Figma and HTML, CSS, JavaScript, Bootstrap, Tailwind, React
              for frontend web development. Everything I have done, small or
              big, has been a vital stepping stone for where I am today.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
