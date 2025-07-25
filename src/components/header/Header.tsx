import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
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
    <header className="fixed top-0 left-0 w-full z-50 bg-primaryWhiteColor shadow-xs">
      <div className="max-w-8xl mx-auto px-4 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-primaryTextColor font-signature"
        >
          Sachin Nimshan
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-700 uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative pb-1 transition duration-200 ${
                isActive(link.path)
                  ? "text-secondaryColor after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:bg-secondaryColor"
                  : "hover:text-secondaryColor"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-secondaryColor transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <AiOutlineClose className="h-6 w-6" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[70px] right-0 h-full max-w-xs overflow-y-auto bg-primaryWhiteColor px-6 py-8 space-y-6 text-primaryTextColor z-40 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm text-right font-semibold uppercase transition ${
                isActive(link.path)
                  ? "text-secondaryColor font-bold"
                  : "hover:text-secondaryColor"
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
