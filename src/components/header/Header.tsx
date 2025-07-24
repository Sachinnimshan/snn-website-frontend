import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "./navLinks";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-200 bg-clip-text text-transparent  font-signature"
        >
          Sachin Nimshan
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative pb-1 transition duration-200 ${
                isActive(link.path)
                  ? "text-yellow-500 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-yellow-500"
                  : "hover:text-yellow-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-yellow-500 transition"
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
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium transition ${
                isActive(link.path)
                  ? "text-yellow-500 font-bold"
                  : "hover:text-yellow-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
