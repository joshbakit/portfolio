import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white h-auto">
      <div className="container mx-auto px-6 py-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex md:flex-col md:gap-8 items-center w-full justify-between">
          <a href="/" className="text-xl font-bold">
            Joshbakit
          </a>
          <div className="social-media flex gap-5">
            <a href="https://github.com/joshbakit/" target="_blank ">
              <AiFillGithub size={20} className="hover:border-b" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-benas-7a68b8207/"
              target="_blank"
            >
              <FaLinkedin size={20} className="hover:border-b" />
            </a>
            <a href="/contact">
              <BiLogoGmail size={20} className="hover:border-b" />
            </a>
          </div>
          <div className=" hidden contact-number text-sm md:flex gap-4">
            <p>Contact me:</p>
            <p className="underline">966 947 0915</p>
            <span>|</span>
            <p className="underline">967 087 5807</p>
            <span>|</span>
            <p className="underline">benasjoshuac@gmail.com</p>
            <span>|</span>
            <p className="underline">joshbakit3@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
