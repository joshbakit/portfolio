import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const menuOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between shadow-lg bg-black/70 px-16 py-6 text-white backdrop-blurd-md md:justify-evenly">
      <a
        href="/"
        className="bg-gradient-to-r from-green-400 to-slate-500 bg-clip-text text-transparent opacity-80 text-3xl font-[800] transition-all duration-300 hover:opacity-100"
        
      >
        JoshBakit
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>TechStack</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <a
          href="/"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opactiy-100"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/joshbakit?tab=repositories"
          target="_blank"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opactiy-100"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/@joshbakit"
          target="_blank"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opactiy-100"
        >
          <FaYoutube />
        </a>
      </ul>

      {isOpen ? (
        <IoClose
          className="block md:hidden cursor-pointer text-2xl"
          onClick={menuOpen}
        />
      ) : (
        <GiHamburgerMenu
          className="block md:hidden cursor-pointer text-2xl"
          onClick={menuOpen}
        />
      )}

      {isOpen && (
        <div
          className={`md:hidden fixed right-0 top-[80px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-100 bg-black/90 p-12 shadow-l-lg  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-5 border-b-slate-300">
            <a
              href="#tech"
              className="font-bold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={menuOpen}
            >
              <li>TechStack</li>
            </a>
            <a
              href="#projects"
              className="font-bold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={menuOpen}
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="font-bold cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={menuOpen}
            >
              <li>Contact</li>
            </a>
          </ul>
          <div className="w-full border"></div>
          <ul className="flex flex-wrap gap-5">
            <a
              href="/"
              className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opactiy-100"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/joshbakit?tab=repositories"
              target="_blank"
              className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opactiy-100"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/@joshbakit"
              target="_blank"
              className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opactiy-100"
            >
              <FaYoutube />
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
