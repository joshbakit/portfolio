import { FaHtml5, FaCss3, FaNodeJs, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  SiExpress,
  SiMongodb,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="container mx-auto h-auto items-center lg:pt-16">
      <div className="py-4 border-b">
        <h1 className="text-center text-2xl font-bold">About me</h1>
      </div>
      <div className="flex flex-col gap-6 md:gap-4 p-2 md:p-8">
        <div className="about flex flex-col lg:flex-row justify-center h-auto px-4 py-4 gap-4 mb-4">
          <div className="about_img flex-1 flex justify-center items-center">
            <img
              src="/assets/avatar-profile.png"
              alt="avatar_profile"
              className="w-[350px] h-[350px] rounded-full max-w-xs border-l-8 border-blue-200 object-cover"
            />
          </div>
          <div className="about_context flex-1 place-self-center">
            <p className="text-center tracking-tight mx-auto text-gray-300 text-xs w-auto sm:w-full md:text-lg font-thin">
              {" "}
              &quot; I have a diverse background in tech and creativity,
              starting as an IT tech support specialist in an advertising
              company, where I honed my troubleshooting skills and gained
              insight into how technology supports business functions. I also
              worked as a video editor for a vlogger, where I developed an eye
              for detail and creativity. Currently, I’m focused on transitioning
              to web development, specifically the MERN stack, and have been
              deepening my expertise in React.js to build dynamic and
              user-friendly web applications.&quot;
            </p>
            <div className="techSkills flex flex-col flex-wrap gap-2 items-center mt-4 w-auto">
              <p className="font-bold text-2xl uppercase">Skills</p>
              <div className="flex gap-2 flex-wrap justify-center">
                <div className="flex flex-col items-center mx-2">
                  <FaHtml5 size={40} />
                  <p>HTML5</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <FaCss3 size={40} />
                  <p>CSS3</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <IoLogoJavascript size={40} />
                  <p>JAVASCRIPT</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <BiLogoTailwindCss size={40} />
                  <p>TAILWIND</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <FaNodeJs size={40} />
                  <p>NODEJS</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiExpress size={40} />
                  <p>EXPRESSJS</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiMongodb size={40} />
                  <p>MONGODB</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiAdobepremierepro size={40} />
                  <p>ADOBE PREMIER</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <FaFigma size={40} />
                  <p>FIGMA</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiAdobephotoshop size={40} />
                  <p>ADOBE PHOTOSHOP</p>
                </div>
                <div className="flex flex-col items-center mx-2">
                  <SiCanva size={40} />
                  <p>CANVA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="education mt-8 px-auto md:px-10 py-6 rounded-md shadow-md shadow-slate-800">
          <div className="education_title text-center text-2xl font-bold">
            Education
          </div>
          <div className="edu p-8 flex flex-col gap-4">
            <div className="flex justify-between">
              <div>
                <h1 className="text-md md:text-2xl font-bold">
                  Bachelor of Science in Information and Technology
                </h1>
                <p>Access Computer College</p>
              </div>
              <h1 className="text-md md:text-2xl font-bold">2017</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="text-md md:text-2xl font-bold">
                  Computer Programming and Hardware Servicing NCII
                </h1>
                <p>CLaret Tech Vocational School</p>
              </div>
              <h1 className="text-md md:text-2xl font-bold">2013</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="text-md md:text-2xl font-bold">
                  MERN Stack Course
                </h1>
                <p>Udemy Online Course</p>
              </div>
              <h1 className="text-md md:text-2xl font-bold">2024</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="text-md md:text-2xl font-bold">
                  C# .NET CORE API with MS SQL Course
                </h1>
                <p>Udemy Online Course</p>
              </div>
              <h1 className="text-md md:text-2xl font-bold">2024</h1>
            </div>
          </div>
        </div>
        <div className="certifcates"></div>
      </div>
    </div>
  );
};

export default About;
