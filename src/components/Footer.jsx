import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white h-auto">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8 flex justify-center">

        <div className="flex items-center w-full justify-between">
          <Link to="/" className="text-xl font-bold">
            Joshbakit
          </Link>
          <div className="social-media flex gap-5">
            <a href="#">
              <AiFillGithub size={20} className='hover:border-b' />
            </a>
            <a href="#">
              <FaLinkedin size={20} className='hover:border-b' />
            </a>
            <a href="#">
              <BiLogoGmail size={20} className='hover:border-b' />
            </a>
          </div>
          <div className=" hidden md:block contact-number text-sm">
            <p>Contact me:</p>
            <p className='underline'>966 947 0915</p>
            <p className='underline'>967 087 5807</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
