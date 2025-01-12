import React from "react";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opcaity: 0, y: 100 }}
      whileInView={{ opacity: 100, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-screen min-w-full items-center justify-center"
    >
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light"
          >
            Contact
          </motion.h1>
          <p className="text-center text-lg font-semibold text-gray-500">
            Want to chat? Send me an E-mail through this button and I'll respond
            whenever I can.
          </p>
          <a
            href="mailto:benasjoshuac@gmail.com"
            target="_blank"
            className="text-nowrap rounded-lg border border-indigo-800 bg-gray-700 px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
          >
            Contact Me
          </a>
        </div>
        <ul className="gap-5 flex items-center justify-center">
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
      </ScrollReveal>
    </div>
  );
};

export default Contact;
