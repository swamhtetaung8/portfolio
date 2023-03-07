import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoX } from "react-icons/go";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
const Navbar = () => {
  const menu = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const [nav, setNav] = useState(false);
  return (
    <nav className="h-20 bg-black px-5 text-white flex items-center justify-between fixed w-full z-50">
      <Link to="home" smooth duration={500}>
        <h1 className=" signature text-4xl cursor-pointer">Shinji</h1>
      </Link>
      <ul className=" hidden md:flex gap-8">
        {menu.map((item) => (
          <Link to={item.link} key={item.id} smooth duration={500}>
            <li className=" text-gray-400 hover:text-gray-50 cursor-pointer text-xl capitalize active:scale-105 duration-100">
              {item.link}
            </li>
          </Link>
        ))}
      </ul>
      <div
        className="md:hidden cursor-pointer  text-gray-400 hover:text-gray-50 z-10"
        onClick={() => setNav(!nav)}>
        {nav ? <GoX size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      {nav && (
        <ul className=" h-screen w-full bg-gradient-to-b from-black to-gray-600 absolute top-0 left-0 flex flex-col gap-12 justify-center items-center">
          {menu.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              smooth
              duration={500}
              onClick={() => setNav(!nav)}>
              <li className=" text-gray-400 hover:text-gray-50 cursor-pointer text-xl capitalize active:scale-105 duration-100">
                {item.link}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
