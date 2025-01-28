import React from "react";
import movieCloneImg from "/public/Screenshot_movieclone.png";
import todoListImg from "/public//todo-list.jpg";
import quizAppImg from "/public/Screenshot_quizapp.png";
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
        className="flex flex-row flex-wrap w-full justify-center gap-4 text-white"
      >
        {projectsData.map((project, index) => (
          <ScrollReveal>
            <div className="w-[350px] overflow-hidden aspect-video cursor-pointer rounded-xl relative group">
              <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-4 pt-30 text-white flex items-end">
                <div>
                  <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                    <div className="font-[800px] uppercase">
                      {project.title}
                    </div>

                    <div className="flex gap-4 opacity-90 text-sm">
                      <a href={project.viewpage}>
                        <div className="flex gap-1 items-center">
                          <IoIosLink />
                          view page
                        </div>
                      </a>
                      <a href={project.sourceCode}>
                        <div className="flex gap-1 items-center">
                          <FaGithub />
                          view code
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt={project.title}
                className="object-cover object-bottom w-full aspect-square group-hover:scale-105 hover:opacity-70 transition duration-300 ease-in-out"
                src={project.image}
              />
            </div>
          </ScrollReveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
