import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
const SocialLinks = () => {
  const socials = [
    {
      id: 1,
      child: (
        <>
          Facebook
          <span>
            <FaFacebookSquare size={20} />
          </span>
        </>
      ),
      href: "https://www.facebook.com/swamhtet.aung.52/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Git Hub
          <span>
            <FaGithubSquare size={20} />
          </span>
        </>
      ),
      href: "https://github.com/swamhtetaung8?fbclid=IwAR0m0G514Basufv5GAORcMj4tQ9E3oDxhBH3v1Sl7kqfhICTtcxZ15e7qZc",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn
          <span>
            <FaLinkedin size={20} />
          </span>
        </>
      ),

      href: "https://www.linkedin.com/in/swamhtetaung/",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <span>
            <FaFileAlt size={20} />
          </span>
        </>
      ),
      href: "/Resume - Swam Htet Aung.pdf",
      download: true,
      style: "rounded-br-md",
    },
  ];
  return (
    <div>
      <motion.ul
        animate={{ y: 0 }}
        initial={{ y: "100vh" }}
        transition={{ delay: 1, duration: 1 }}
        className=" fixed lg:top-[35%] hidden lg:block">
        {socials.map((social) => (
          <li
            key={social.id}
            className={
              " bg-gray-300 px-3 py-3 flex items-center w-44 cursor-pointer lg:ml-[-135px] hover:ml-[0px] duration-300" +
              " " +
              social.style
            }>
            <a
              href={social.href}
              className=" w-full flex items-center justify-between"
              target="_blank"
              download={social.download}>
              {social.child}
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SocialLinks;
