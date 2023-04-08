import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import bootstrap from "../assets/skills/bootstrap.png";
import tailwind from "../assets/skills/tailwind.png";
import git from "../assets/skills/git.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.svg";
import php from "../assets/skills/php.png";
import { motion } from "framer-motion";
const headerVariant = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 0.8 } },
};
const cardVariant = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 1.5 } },
};

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      img: html,
      shadow: "shadow-orange-500",
    },
    {
      id: 2,
      name: "CSS",
      img: css,
      shadow: "shadow-blue-500",
    },
    {
      id: 3,
      name: "JavaScript",
      img: js,
      shadow: "shadow-yellow-500",
    },
    {
      id: 4,
      name: "React",
      img: react,
      shadow: "shadow-blue-300",
    },
    {
      id: 5,
      name: "Bootstrap",
      img: bootstrap,
      shadow: "shadow-purple-500",
    },
    {
      id: 6,
      name: "Tailwind",
      img: tailwind,
      shadow: "shadow-sky-500",
    },
    {
      id: 7,
      name: "PHP",
      img: php,
      shadow: "shadow-purple-300",
    },
    {
      id: 8,
      name: "Redux Toolkit",
      img: redux,
      shadow: "shadow-purple-400",
    },
  ];
  return (
    <section
      name="skills"
      className=" w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black py-20">
      <div className="container mx-auto">
        <div className=" w-full min-h-screen flex justify-center items-center ">
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="md:w-full p-10 w-auto">
            <motion.h1
              variants={headerVariant}
              className="text-4xl border-b-4 mb-10 border-gray-500 inline-block text-white">
              Skills
            </motion.h1>
            <motion.p
              variants={headerVariant}
              className=" text-gray-500 text-xl mb-10">
              These are the languages and skills I've worked with so far.
            </motion.p>

            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={cardVariant}
              viewport={{ once: false, amount: 0.1 }}
              className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
              {skills.map((indi) => (
                <div
                  key={indi.id}
                  className={
                    " max-w-sm md:hover:scale-105  rounded-lg bg-gray-800  duration-200  shadow-md " +
                    indi.shadow
                  }>
                  <img
                    className=" h-28 text-center w-full object-contain mt-5 md:mt-10 p-4 md:p-0 "
                    src={indi.img}
                    alt="skill-logo"
                  />

                  <div className="md:pt-10 pt-5">
                    <h5 className=" mb-8 md:text-2xl text-xl font-bold tracking-tight text-white text-center ">
                      {indi.name}
                    </h5>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
