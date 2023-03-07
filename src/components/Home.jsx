import React from "react";
import { BsChevronRight } from "react-icons/bs";
import profile from "../assets/profile.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section
      name="home"
      className=" w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-24 md:pt-0">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5, delay: 0.5 }}
        className=" w-full min-h-screen flex md:flex-row flex-col justify-center items-center gap-20 px-10">
        <div className=" flex flex-col gap-10 items-start">
          <h1 className="text-4xl text-white font-bold capitalize">
            I am Swam Htet Aung
            <br />
            <span className=" text-gray-200 my-3 border-b-4 pb-3 border-gray-500 text-lg">
              A Front End Developer
            </span>
          </h1>
          <p className=" text-gray-500 max-w-md text-lg">
            Studied Computer Science for three years at University of
            Information Technology with a passion for software engineering and
            web development. Working as a Japanese lecturer for more than 3
            years. Currently studying full stack web development to become a web
            developer.
          </p>
          <Link to="portfolio" smooth duration={500}>
            <button className="group text-white bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 rounded-md flex items-center gap-2">
              Portfolio
              <span className=" group-hover:rotate-90 duration-200">
                <BsChevronRight size={18} />
              </span>
            </button>
          </Link>
        </div>
        <div className="">
          <img src={profile} alt="" className=" h-96 rounded-md object-cover" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
