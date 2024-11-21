// src/components/Navbar.jsx
import { useState, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#24303f] text-white sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-4 px-6">
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold hover:scale-105 cursor-pointer"
            >
              Joshbakit
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="/"
              className="hover:bg-[#55E5A4] hover:text-[#000] px-3 py-2 rounded cursor-pointer"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:bg-[#55E5A4] hover:text-[#000] px-3 py-2 rounded cursor-pointer"
            >
              Projects
            </a>

            <a
              href="#about"
              className="hover:bg-[#55E5A4] hover:text-[#000] px-3 py-2 rounded"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:bg-[#55E5A4] hover:text-[#000] px-3 py-2 rounded"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* {isOpen && ( */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-40 opacity-100 flex flex-col items-center"
            : "max-h-0 opacity-0 flex flex-col items-center"
        } overflow-hidden`}
      >
        <a
          to="/"
          className="block px-4 py-2 hover:bg-[#55E5A4] hover:text-[#000] rounded"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          to="/projects"
          className="block px-4 py-2 hover:bg-[#55E5A4] hover:text-[#000] rounded"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>

        <a
          to="/about"
          className="block px-4 py-2 hover:bg-[#55E5A4] hover:text-[#000] rounded"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          to="/contact"
          className="block px-4 py-2 hover:bg-[#55E5A4] hover:text-[#000] rounded"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
