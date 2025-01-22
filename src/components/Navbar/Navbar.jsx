import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-40 text-white fixed w-full bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#presentation" className="text-2xl font-bold">
              <div className="flex justify-center items-end">
                <p>MyPortfolio</p>
                <p className="font-bold text-4xl text-[#FF6347]">.</p>
              </div>
            </a>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <a href="#presentation" className=" px-3 py-2 font-bold hover:text-[#FF6347]">
                Home
              </a>
              <a href="#experience" className=" px-3 py-2 font-bold hover:text-[#FF6347]">
                My Work
              </a>
              <a href="#proyects" className=" px-3 py-2 font-bold hover:text-[#FF6347]">
                My Proyects
              </a>
              <a href="#about-me" className=" px-3 py-2 font-bold hover:text-[#FF6347]">
                About Me
              </a>
              <a href="#skills" className=" px-3 py-2 font-bold hover:text-[#FF6347]">
                My Skills
              </a>
              <a href="#contact" className=" px-3 py-2 font-bold hover:text-[#FF6347]">
                Contact
              </a>
            </div>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil con duración de 75ms */}
      <div
        className={`md:hidden transform transition-all duration-150 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#080808]">
            <button className="block" onClick={()=>setIsOpen(false)}>
              <a href="#presentation" className="block px-3 py-2 font-bold hover:text-[#FF6347]">
                  Home
              </a>
            </button>
            <button className="block" onClick={()=>setIsOpen(false)}>
              <a href="#experience" className="block px-3 py-2 font-bold hover:text-[#FF6347]">
                  My Work
              </a>
            </button>
            <button className="block" onClick={()=>setIsOpen(false)}>
              <a href="#proyects" className="block px-3 py-2 font-bold hover:text-[#FF6347]">
                  My Proyects
              </a>
            </button>
            <button className="block" onClick={()=>setIsOpen(false)}>
              <a href="#about-me" className="block px-3 py-2 font-bold hover:text-[#FF6347]">
                About Me
              </a>
            </button>
            <button className="block" onClick={()=>setIsOpen(false)}>
              <a href="#skills" className="block px-3 py-2 font-bold hover:text-[#FF6347]">
                  My Skills
              </a>
            </button>
            <button className="block" onClick={()=>setIsOpen(false)}>
              <a href="#contact" className="block px-3 py-2 font-bold hover:text-[#FF6347]">
                  Contact
              </a>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
