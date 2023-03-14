import React from "react";
import { BsChevronRight } from "react-icons/bs";
import profile from "../assets/profile.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const headerVariant = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
const buttonVariant = {
  offscreen: { x: -200, opacity: 0 },
  onscreen: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};
const imageVariant = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { delay: 1, duration: 1 } },
};

const Home = () => {
  return (
    <section
      name="home"
      className=" w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-24 md:pt-0">
      <div className=" w-full min-h-screen flex md:flex-row flex-col justify-center items-center gap-20 px-10">
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          transition={{ staggerChildren: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className=" flex flex-col gap-10 items-start">
          <motion.h1
            variants={headerVariant}
            className="text-4xl text-white font-bold capitalize">
            I am Swam Htet Aung
            <br />
            <span className=" text-gray-200 my-3 border-b-4 pb-3 border-gray-500 text-lg">
              A Front End Developer
            </span>
          </motion.h1>
          <motion.p
            variants={headerVariant}
            className=" text-gray-500 max-w-md text-lg">
            Studied Computer Science for three years at University of
            Information Technology with a passion for software engineering and
            web development. Working as a Japanese lecturer for more than 3
            years. Currently studying full stack web development to become a web
            developer.
          </motion.p>
          <Link to="portfolio" smooth duration={500}>
            <motion.button
              variants={buttonVariant}
              className="group text-white bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 rounded-md flex items-center gap-2">
              Portfolio
              <span className=" group-hover:rotate-90 duration-200">
                <BsChevronRight size={18} />
              </span>
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          transition={{ staggerChildren: 0 }}
          className="">
          <motion.img
            src={profile}
            variants={imageVariant}
            alt=""
            className=" h-96 rounded-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
