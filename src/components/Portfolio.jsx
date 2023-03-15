import React from "react";
import todo from "../assets/todo.png";
import gpt3 from "../assets/gpt3.png";
import bookmark from "../assets/bookmark.png";
import invoice from "../assets/invoice.png";
import inori from "../assets/inori.png";
import sushi from "../assets/sushi.png";
import recipe from "../assets/recipe.png";
import cart from "../assets/cart.png";
import simpuru from "../assets/simpuru.png";
import expensetracker from "../assets/expensetracker.png";
import { motion } from "framer-motion";

const headerVariant = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 0.8 } },
};
const cardVariant = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 1.5 } },
};

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      demo: "https://sushi-sha.netlify.app/",
      code: "https://github.com/swamhtetaung8/sushi",
      title: "Sushi website with Bootstrap",
      img: sushi,
    },
    {
      id: 2,
      demo: "https://simpuru.vercel.app/",
      code: "https://github.com/swamhtetaung8/rtk-cart",
      title: "E-commerce cart management with Redux toolkit",
      img: simpuru,
    },
    {
      id: 3,
      demo: "https://bookmarkwebsitebyswamhtetaung.netlify.app/",
      code: "https://github.com/swamhtetaung8/Bookmarklandingpage",
      title: "Bookmark Landing Page with Bootstrap",
      img: bookmark,
    },
    {
      id: 4,
      demo: "https://money-tracker-sha.vercel.app/",
      code: "https://github.com/swamhtetaung8/Money-tracker-react",
      title: "Expense tracker App with React",
      img: expensetracker,
    },
    {
      id: 5,
      demo: "https://gpt3withreactbyswamhtetaung.netlify.app/",
      code: "https://github.com/swamhtetaung8/gpt3",
      title: "GPT3 Website with React",
      img: gpt3,
    },
    {
      id: 6,
      demo: "https://themealdb-practice-sha.vercel.app/",
      code: "https://github.com/swamhtetaung8/themealdb-practice-react",
      title: "Food recipe website with React and themealdb API",
      img: recipe,
    },
  ];
  return (
    <section
      name="portfolio"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 py-10">
      <div className="container mx-auto">
        <div className=" w-full min-h-screen flex justify-center items-center ">
          <div className="md:w-full p-10 w-auto">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              transition={{ staggerChildren: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}>
              <motion.h1
                variants={headerVariant}
                className="text-4xl border-b-4 mb-10 border-gray-500 inline-block text-white">
                Portfolio
              </motion.h1>
              <motion.p
                variants={headerVariant}
                className=" text-gray-500 text-xl mb-10">
                Check out some of my works below.
              </motion.p>
            </motion.div>

            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={cardVariant}
              viewport={{ once: false, amount: 0.1 }}
              className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              {portfolio.map((indi) => (
                <div
                  variants={cardVariant}
                  key={"project" + indi.id}
                  className=" max-w-sm  rounded-lg shadow-lg shadow-black/60 bg-gray-800 dark:border-gray-700 hover:scale-105 duration-200 hover:shadow-sm hover:shadow-slate-200">
                  <a href={indi.demo} target="_blank">
                    <img
                      className="rounded-t-lg w-full "
                      src={indi.img}
                      alt="project-thumbnail"
                    />
                  </a>
                  <div className="p-5">
                    <h5 className=" mb-8 text-2xl font-bold tracking-tight text-white text-center h-auto md:h-20">
                      {indi.title}
                    </h5>

                    <div className=" flex px-10 justify-center gap-5">
                      <a
                        href={indi.demo}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800">
                        Website
                      </a>
                      <a
                        href={indi.code}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
