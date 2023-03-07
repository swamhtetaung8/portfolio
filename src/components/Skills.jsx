import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import bootstrap from "../assets/skills/bootstrap.png";
import tailwind from "../assets/skills/tailwind.png";
import git from "../assets/skills/git.png";
import react from "../assets/skills/react.png";
import php from "../assets/skills/php.png";
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
      name: "Git",
      img: git,
      shadow: "shadow-orange-700",
    },
    {
      id: 8,
      name: "PHP",
      img: php,
      shadow: "shadow-purple-400",
    },
  ];
  return (
    <section
      name="skills"
      className=" w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black py-20">
      <div className="container mx-auto">
        <div className=" w-full min-h-screen flex justify-center items-center ">
          <div className="md:w-full p-10 w-auto">
            <h1 className="text-4xl border-b-4 mb-10 border-gray-500 inline-block text-white">
              Skills
            </h1>
            <p className=" text-gray-500 text-xl mb-10">
              These are the languages and skills I've worked with so far.
            </p>

            <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
              {skills.map((indi) => (
                <div
                  key={indi.id}
                  className={
                    " max-w-sm  rounded-lg bg-gray-800 dark:border-gray-700 hover:scale-105 duration-200  shadow-md " +
                    indi.shadow
                  }>
                  <img
                    className=" h-28 text-center w-full object-contain mt-5 md:mt-10 p-4 md:p-0 "
                    src={indi.img}
                    alt="skill-logo"
                  />

                  <div className="pt-10">
                    <h5 className=" mb-8 text-2xl font-bold tracking-tight text-white text-center ">
                      {indi.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
