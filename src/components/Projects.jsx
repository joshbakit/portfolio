import React from "react";
import movieCloneImg from "../../public/movie_clone.jpg";
import todoListImg from "../../public//todo-list.jpg";
import quizAppImg from "../../public/Screenshot_quizapp.png";
import { motion } from "motion/react";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    image: movieCloneImg,
    title: "Movie Explorer Hub",
    description:
      "A movie app built with React.js, fetching and displaying real-time movie information via an API, with a responsive layout powered by Tailwind CSS.",
    technologies: ["React.js", "TailwindCss", "API"],
    viewpage: "https://joshbakit-movie-clone.netlify.app/",
    sourceCode: "https://github.com/joshbakit/movie_clone",
  },
  {
    image: todoListImg,
    title: "MERN To-Do App",
    description:
      "A very basic yet functional to-do list app built with React.js and Node.js, featuring a real-time database using MongoDB, styled with Tailwind CSS for a clean and responsive interface.",
    technologies: ["React.js", "TailwindCss", "API", "Node.js", "MongoDb"],
    viewpage: "https://frontend-todotask.vercel.app/",
    sourceCode: "https://github.com/joshbakit/frontend-todotask",
  },
  {
    image: quizAppImg,
    title: "Quiz App",
    description:
      "Welcome to my Quiz App, where you can test your skills in different subjects. Select your category, answer questions within a 15-second timer, and receive immediate feedback. The app provides a summary of your performance at the end.",
    technologies: ["HTML", "CSS", "Javascript"],
    viewpage: "https://quizapp-eight-beta.vercel.app/",
    sourceCode: "https://github.com/joshbakit/quizapp",
  },
];

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

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center pt-24 gap-8 px-8 md:px-16 md:gap-16 p-4"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl md:text-6xl font-light"
      >
        Projects
      </motion.h1>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        className="flex w-full max-w-[1000px] flex-col gap-16 text-white"
      >
        {projectsData.map((project, index) => (
          <ScrollReveal>
            <div className="bg-slate-700 px-4 py-8 rounded-lg">
              <li
                key={index}
                className="flex flex-col md:flex-row gap-16 items-center justify-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
                />

                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl md:text-4xl uppercase">{project.title}</h1>
                  <h3 className="">{project.description}</h3>
                  <p className="flex flex-wrap space-x-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </p>
                  <div className=" flex gap-4">
                    <a
                      href={project.viewpage}
                      className="flex justify-center items-center gap-2 text-xs"
                      target="_blank"
                    >
                      <IoIosLink size={20} className="text-blue-500" />
                      View App
                    </a>
                    <a
                      href={project.sourceCode}
                      className="flex justify-center items-center gap-2 text-xs"
                      target="_blank"
                    >
                      <FaGithub size={20} className="text-black" />
                      View Code
                    </a>
                  </div>
                </div>
              </li>
            </div>
          </ScrollReveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
