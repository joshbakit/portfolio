import React from 'react'

const Home = () => {
  return (
    <section className="bg-[url('/assets/bg-hero-section.jpg')] bg-cover bg-center  text-white min-h-screen flex items-center">
      <div className="container flex flex-col-reverse md:flex-row mx-auto px-4 py-4 sm:px-6 lg:px-8 gap-10 ">
        <div className="context flex-1 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl">hello I'm Joshua,</h3>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold uppercase">Web Developer</h1>
          <p className="text-sm sm:text-base text-left tracking-tight subpixel-antialiased">As a beginner in web development, I’m passionate about learning and improving my skills with each new project.
            <a href="/assets/JoshuaBenas-Resume.pdf" className="text-blue-300 underline" download>donwload resume</a>
          </p>

          <div className="cta-links mt-4 text-sm flex flex-col md:flex-row gap-2 sm:gap-4">
            <a href="/projects" className='bg-gray-400 hover:bg-gray-500  py-2 px-4 rounded-full'>See my projects</a>
            <a href="/contact" className='bg-gray-400 hover:bg-gray-500 py-2 px-4 rounded-full'>Contact me</a>
          </div>
        </div>

        <div className="image flex-1 flex justify-center">
          <img src="/assets/avatar-profile.png" alt="profile" className="w-3/4 h-auto rounded-full max-w-xs sm:max-w-md lg:max-w-lg border-r-8 border-blue-200" />
        </div>
      </div>
    </section>
  )
}

export default Home