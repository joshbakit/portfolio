import React from 'react'
import { MdFormatQuote } from "react-icons/md";

const About = () => {
  return (
    <div className='container mx-auto min-h-screen items-center'>
      <div className='py-4 border-b'><h1 className='text-center text-2xl font-bold'>About me</h1></div>
      <div className='flex flex-col gap-6 md:gap-4 p-2 md:p-8'>
        <div className='about flex flex-col md:flex-row justify-center h-auto px-4 py-4 gap-4 mb-4'>
          <div className='about_img flex-1 flex justify-center'>
            <img src="/assets/avatar-profile.png" alt="avatar_profile" className='w-1/2 md:3/4 rounded-full max-w-xs border-l-8 border-blue-200 object-cover' />
          </div>
          <div className='about_context flex-1 place-self-center'>
            <p className='italic text-center tracking-wider text-gray-300 text-xs w-[250px] sm:w-full md:text-lg font-serif'> " I have a diverse background in tech and creativity, starting as an IT tech support specialist in an advertising company, where I honed my troubleshooting skills and gained insight into how technology supports business functions. I also worked as a video editor for a vlogger, where I developed an eye for detail and creativity. Currently, I’m focused on transitioning to web development, specifically the MERN stack, and have been deepening my expertise in React.js to build dynamic and user-friendly web applications."</p>
          </div>
        </div>
        <div className='skills bg-stone-900 rounded-md xs:p-2 md:p-8'>
          <div className='skills_title'><h1 className='text-center text-2xl font-bold'>Skills</h1></div>
          <div className='skills_context'>
            <div className="tech_stack flex justify-center p-2 md:p-6 lg:p-8 gap-8 flex-wrap ">
              <div className="front_end w-64 h-64 flex flex-col justify-center border-2 border-gray-200 rounded-full bg-slate-200 bg-opacity-10 p-4 items-center text-center">
                <h2 className='text-xl md:text-2xl font-bold'>Front End</h2>
                <ul className="text-xs md:text-base">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT JS</li>
                  <li>TAILWIND CSS</li>
                </ul>
              </div>
              <div className="backend w-64 h-64 flex flex-col justify-center border-2 border-gray-200 rounded-full bg-slate-200 bg-opacity-10 p-4 items-center text-center">
                <h2 className='text-xl md:text-2xl font-bold'>Back End</h2>
                <ul className="text-xs md:text-base">
                  <li>NODE JS</li>
                  <li>EXPRESS JS</li>
                  <li>MONGO DB</li>
                  <li>MS AZURE DATA STUDIO</li>
                </ul>
              </div>
              <div className="video_and_design w-64 h-64 flex flex-col justify-center border-2 border-gray-200 rounded-full bg-slate-200 bg-opacity-10 p-4 items-center text-center">
                <h2 className='text-xl md:text-2xl font-bold'>Video and Design</h2>
                <ul className="text-xs md:text-base">
                  <li>PS PHOTOSHOP</li>
                  <li>FIGMA</li>
                  <li>ADOBE PREMIERE</li>
                  <li>CAPCUT</li>
                  <li>CANVA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="education mt-8 px-auto md:px-10 py-6 rounded-md shadow-md shadow-slate-800">
          <div className="education_title text-center text-2xl font-bold">Education</div>
          <div className='edu p-8 flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div>
                <h1 className='text-md md:text-2xl font-bold'>Bachelor of Science in Information and Technology</h1>
                <p>Access Computer College</p>
              </div>
              <h1 className='text-md md:text-2xl font-bold'>2017</h1>
            </div>
            <div className='flex justify-between'>
              <div>
                <h1 className='text-md md:text-2xl font-bold'>Computer Programming and Hardware Servicing NCII</h1>
                <p>CLaret Tech Vocational School</p>
              </div>
              <h1 className='text-md md:text-2xl font-bold'>2013</h1>
            </div>
            <div className='flex justify-between'>
              <div>
                <h1 className='text-md md:text-2xl font-bold'>MERN Stack Course</h1>
                <p>Udemy Online Course</p>
              </div>
              <h1 className='text-md md:text-2xl font-bold'>2024</h1>
            </div>
            <div className='flex justify-between'>
              <div>
                <h1 className='text-md md:text-2xl font-bold'>C# .NET CORE API with MS SQL Course</h1>
                <p>Udemy Online Course</p>
              </div>
              <h1 className='text-md md:text-2xl font-bold'>2024</h1>
            </div>
          </div>
        </div>
        <div className="certifcates"></div>
      </div>
    </div>
  )
}

export default About