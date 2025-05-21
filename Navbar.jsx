import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">
                  MB
                </span>
              </div>
              <div className="md:block hidden ml-4">
                <span className="text-white font-semibold text-lg">
                  Mukesh Bala
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#about" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">About</a></li>
                <li><a href="#skills" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">Skills</a></li>
                <li><a href="#projects" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">Projects</a></li>
                <li><a href="#contact" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a></li>
                <li><a href="#footer" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">Footer</a></li>

              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="text- hover:text-teal-200 focus:outline-none transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-indigo-700 via-purple-700 to-teal-700">
            <div className="px-4 pt-4 pb-4 space-y-2">
              <a href="#about" onClick={closeMenu} className="block text-white hover:text-teal-300 font-medium text-base px-3 py-2 rounded-md transition-colors duration-200">About</a>
              <a href="#skills" onClick={closeMenu} className="block text-white hover:text-teal-300 font-medium text-base px-3 py-2 rounded-md transition-colors duration-200">Skills</a>
              <a href="#projects" onClick={closeMenu} className="block text-white hover:text-teal-300 font-medium text-base px-3 py-2 rounded-md transition-colors duration-200">Projects</a>
              <a href="#contact" onClick={closeMenu} className="block text-white hover:text-teal-300 font-medium text-base px-3 py-2 rounded-md transition-colors duration-200">Contact</a>
              <a href="#footer" onClick={closeMenu} className="block text-white hover:text-teal-300 font-medium text-base px-3 py-2 rounded-md transition-colors duration-200">Footer</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
