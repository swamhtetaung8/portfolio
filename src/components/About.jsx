import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className=" py-10 min-h-screen w-full flex justify-center items-center bg-gradient-to-b from-gray-800 to-black">
      <div className=" container p-10">
        <h1 className="text-4xl border-b-4 mb-16 border-gray-500 inline-block text-white">
          About
        </h1>
        <p className=" py-3 text-xl text-gray-500 whitespace-normal">
          Hi, my name is Swam Htet Aung and I use Shinji as my nickname across
          social medias. I’m a front end web developer from Myanmar. Aside from
          coding, I’m also passionate about sports and gaming. Currently, I’m
          focused on more about React, NextJs and PHP.
        </p>
        <br />
        <p className=" py-3 text-xl text-gray-500  break-words">
          My interest in web development started back in 2017 when I was in
          University and started building websites for the first time using HTML
          and CSS. Fast forward to 2023 and I’ve tried it all, from Learning
          Japanese, Digital Art, Streaming, Graphic Design, UI/UX with Figma and
          HTML/CSS/JavaScript/Bootstrap/Tailwind/React for frontend web
          development. Everything I have done, small or big, has been a vital
          stepping stone for where I am today.
        </p>
      </div>
    </section>
  );
};

export default About;
