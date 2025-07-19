import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Experience", path: "#experience" },
  { name: "Academic", path: "#academic" },
  { name: "Certifications", path: "#certifications" },
  { name: "Contact", path: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <a
          href="#home"
          className="md:text-3xl font-bold text-yellow-400 tracking-tight font-signature"
        >
          Sachin Nimshan
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`relative pb-1 transition duration-200 ${
                isActive(link.path)
                  ? "text-yellow-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-yellow-400 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <AiOutlineClose className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] overflow-y-auto bg-black/90 px-6 py-8 space-y-6 text-gray-300 z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium transition ${
                isActive(link.path)
                  ? "text-yellow-400 font-bold"
                  : "hover:text-yellow-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
