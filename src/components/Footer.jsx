import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
const Footer = () => {
  const socials = [
    {
      id: 1,
      child: (
        <>
          <span>
            <FaFacebookSquare size={30} />
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
          <span>
            <FaGithubSquare size={30} />
          </span>
        </>
      ),
      href: "https://github.com/swamhtetaung8?fbclid=IwAR0m0G514Basufv5GAORcMj4tQ9E3oDxhBH3v1Sl7kqfhICTtcxZ15e7qZc",
    },
    {
      id: 3,
      child: (
        <>
          <span>
            <FaLinkedin size={30} />
          </span>
        </>
      ),

      href: "https://www.linkedin.com/in/swamhtetaung/",
    },
    {
      id: 4,
      child: (
        <>
          <span>
            <FaFileAlt size={30} />
          </span>
        </>
      ),
      href: "/Resume.pdf",
      download: true,
      style: "rounded-br-md",
    },
  ];
  return (
    <footer className=" bg-gray-300 py-10 lg:hidden">
      <p className=" text-center pb-6">My Socials</p>

      <div className="flex w-full justify-center gap-10">
        {socials.map((social) => (
          <p key={social.id} className={""}>
            <a
              href={social.href}
              className=" w-full"
              target="_blank"
              download={social.download}>
              {social.child}
            </a>
          </p>
        ))}
      </div>
      <p className=" text-center pt-5">&#169; Copyright @ swamhtetaung</p>
    </footer>
  );
};

export default Footer;
