import { FaDownload } from "react-icons/fa";

import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <>
      <section className="bg-[url('/assets/portfolio-bg.jpg')] bg-cover bg-center h-[645px] text-white container mx-auto place-content-center">
        <div className="flex flex-col-reverse content-center  justify-center md:flex-row sm:px-6 lg:px-8">
          <div className="context md:w-[600px] p-8 md:p-0  ">
            <h3 className="text-base">hello I&apos;m Joshua,</h3>
            <h1 className="text-4xl sm:text-8xl text-[#55E5A4] font-bold uppercase">
              Web Developer
            </h1>
            <p className="text-base text-left tracking-tight subpixel-antialiased">
              I build web application and passionate about learning and
              improving my skills with each new project.
            </p>

            <div className="cta-links mt-4 text-sm flex flex-col md:flex-row gap-2 sm:gap-4">
              <a
                href="#projects"
                className="bg-[#55E5A4] text-[#000] hover:bg-gray-500  py-2 px-4 rounded-full"
              >
                See my projects
              </a>
              <a
                href="/assets/JoshuaBenas-Resume.pdf"
                download
                className="bg-[#55E5A4] text-[#000] hover:bg-gray-500 py-2 px-4 rounded-full flex gap-2"
              >
                Download Resume
                <FaDownload size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default Home;
