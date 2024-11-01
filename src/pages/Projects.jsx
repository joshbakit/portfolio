import React from 'react'

const projects = [
  {
    title: "Movie Directory Clone",
    description: "It's a fun project where I cloned a basic movie database, allowing users to view details about each movie, such as the title, release date, genre, and a brief description.",
    techStack: "Reactjs, API and Tailwind CSS ",
    githubLink: "https://github.com/joshbakit/movie_clone",
    demoLink: "https://joshbakit-movie-clone.netlify.app/",
    image: '/assets/movie_clone.JPG'
  },
  {
    title: "Todo Task List",
    description: "A simple todo task list I build to practice CRUD with reactjs, nodejs, express and mongodb",
    techStack: "MongoDB, Express js, React js and Node js",
    githubLink: "https://github.com/joshbakit/frontend-todotask",
    demoLink: "https://frontend-todotask.vercel.app/",
    image: '/assets/todo-list.png'
  },
]

const Projects = () => {
  return (
    <div className="container mx-auto min-h-screen items-center">
      <div className='py-4 border-b'><h1 className='text-center text-2xl font-bold'>My Projects</h1></div>
      <div className="projects_list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {projects.map((p, index) => (
          <div className="card text-black w-92 h-full p-4 bg-[#fff] border-2 border-black rounded shadow-xl flex flex-col" key={index}>
            <a href="https://joshbakit-movie-clone.netlify.app/" target='_blank'>
              <img src={p.image} alt="p.title" className='border border-black rounded-md' />
            </a>
            <div className="content flex flex-col gap-2">
              <h1 className="text-2xl text-center font-bold underline">{p.title}</h1>
              <p className="hidden md:block text-sm tracking-tighter italic leading-tight text-center">{p.description}</p>
              <p className="text-sm text-center">Tech Stack: {p.techStack}</p>
              <div className="cta-buttons flex flex-col md:flex-row justify-center gap-4">
                <a href={p.demoLink} target='true' className='text-sm py-2 px-4 rounded bg-blue-400 hover:bg-blue-600 border border-blue-600'>View Project</a>
                <a href={p.githubLink} target='true' className='text-sm py-2 px-4 rounded bg-blue-400 hover:bg-blue-600 border border-blue-600'>View Source code</a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
