import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const projects = [
  {
    title: "Movie Directory Clone",
    description:
      "It's a fun project where I cloned a basic movie database, allowing users to view details about each movie, such as the title, release date, genre, and a brief description.",
    techStack: [
      { name: "ReactJs", icon: <FaReact size={30} /> },
      { name: "JavaScript", icon: <SiJavascript size={30} /> },
    ],
    githubLink: "https://github.com/joshbakit/movie_clone",
    demoLink: "https://joshbakit-movie-clone.netlify.app/",
    image: "/assets/movie_clone.JPG",
  },
  {
    title: "Todo Task List",
    description:
      "A simple todo task list I built to practice CRUD with reactjs, nodejs, express and mongodb",
    techStack: [
      { name: "ReactJs", icon: <FaReact size={30} /> },
      { name: "JavaScript", icon: <SiJavascript size={30} /> },
      { name: "NodeJs", icon: <FaNodeJs size={30} /> },
      { name: "NodeJs", icon: <SiMongodb size={30} /> },
    ],
    githubLink: "https://github.com/joshbakit/frontend-todotask",
    demoLink: "https://frontend-todotask.vercel.app/",
    image: "/assets/todo-list.jpg",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="container mx-auto h-auto items-center p-4 md:pt-20 "
    >
      <div className="">
        <h1 className="text-center text-lg md:text-2xl font-bold">
          My Projects
        </h1>
      </div>
      <div className="projects_list justify-center flex flex-wrap gap-4 py-2 px-4">
        {projects.map((p, index) => (
          <div
            className="card text-black bg-[#26313F] w-[300px] h-auto p-2 border-2 border-black rounded shadow-xl flex flex-col items-center"
            key={index}
          >
            <a href={p.demoLink} target="true">
              <img
                src={p.image}
                alt="p.title"
                className="border border-black rounded-md w-full h-auto"
              />
            </a>
            <div className="content flex flex-col gap-2 pt-4 text-[#fff]">
              <h1 className="text-2xl text-center font-bold mb-4">{p.title}</h1>
              <p className="hidden md:block text-xs tracking-tighter leading-tight text-center text-slate-400">
                {p.description}
              </p>
              <div className="text-sm text-center mb-6">
                <p>Tech Stack:</p>
                <div className="flex justify-center mt-1">
                  {p.techStack.map((tech, idx) => (
                    <div key={idx} className="flex flex-col items-center mx-2">
                      <span>{tech.icon}</span>
                      <p className="text-xs">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cta-buttons flex flex-col md:flex-row justify-center gap-4">
                <a
                  href={p.demoLink}
                  target="true"
                  className="text-sm py-2 px-4 rounded bg-[#55E5A4] text-[#000] hover:bg-[#5bf4af]"
                >
                  View Project
                </a>
                <a
                  href={p.githubLink}
                  target="true"
                  className="text-sm py-2 px-4 rounded bg-[#55E5A4] text-[#000] hover:bg-[#5bf4af]"
                >
                  View Source code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
