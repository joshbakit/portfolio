import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiFramer,
  SiCanva,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiSocketdotio,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { motion } from "motion/react";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-screen w-full flex-col items-center pt-20 md:pt-32 justify-center gap-2 md:gap-16"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl md:text-6xl font-light"
      >
        Technology Stacks
      </motion.h1>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap max-w-5xl gap-10 p-8 md:p-5 items-center justify-center"
      >
        <div>
          <FaHtml5
            data-twe-toggle="tooltip"
            title="HTML"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-red-500  hover:-translate-y-5"
          />
        </div>
        <div>
          <FaCss3Alt
            data-twe-toggle="tooltip"
            title="Css"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-blue-500  hover:-translate-y-5"
          />
        </div>
        <div>
          <FaJsSquare
            data-twe-toggle="tooltip"
            title="Javascript"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-yellow-500  hover:-translate-y-5"
          />
        </div>
        <div>
          <FaReact
            data-twe-toggle="tooltip"
            title="React.Js"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-blue-500  hover:-translate-y-5"
          />
        </div>
        <div>
          <SiTailwindcss
            data-twe-toggle="tooltip"
            title="TailwindCss"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-blue-500  hover:-translate-y-5"
          />
        </div>
        <div>
          <FaNodeJs
            data-twe-toggle="tooltip"
            title="Node.Js"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-green-500  hover:-translate-y-5"
          />
        </div>
        <div>
          <DiMongodb
            data-twe-toggle="tooltip"
            title="MongoDb"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-green-500  hover:-translate-y-5"
          />
        </div>
        <div>
          <SiDaisyui
            data-twe-toggle="tooltip"
            title="DaisyUi"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-pink-500  hover:-translate-y-5"
          />
        </div>
        <div>
          <FaFigma
            data-twe-toggle="tooltip"
            title="Figma"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-black  hover:-translate-y-5"
          />
        </div>
        <div>
          <SiFramer
            data-twe-toggle="tooltip"
            title="Framer Motion"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-teal-200  hover:-translate-y-5"
          />
        </div>
        <div>
          <SiSocketdotio
            data-twe-toggle="tooltip"
            title="Socket.io"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-black  hover:-translate-y-5"
          />
        </div>
        <div>
          <SiCanva
            data-twe-toggle="tooltip"
            title="Canva"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-blue-500  hover:-translate-y-5"
          />
        </div>
        <div>
          <SiAdobepremierepro
            data-twe-toggle="tooltip"
            title="Premiere Pro"
            className="cursor-pointer text-6xl md:text-8xl transition-all duration-300 text-violet-500  hover:-translate-y-5"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
