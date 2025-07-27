import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
import { Outlet } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";

const MainLayout = () => {
  const socialMediaLinks = [
    {
      icon: <FaGithub className="w-8 h-8" />,
      url: "https://github.com/your-username",
    },
    {
      icon: <FaLinkedin className="w-8 h-8" />,
      url: "https://www.linkedin.com/in/sachin-nimshan/",
    },
    {
      icon: <FaFacebook className="w-8 h-8" />,
      url: "https://www.facebook.com/sachin.nimshan",
    },
    {
      icon: <FaYoutube className="w-8 h-8" />,
      url: "https://www.youtube.com/@sachinnimshan/featured",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
      <ScrollToTop />
      <Header />

      <main>
        <Outlet />
      </main>

      <div className="rounded-r-lg bg-primaryWhiteColor hidden md:flex fixed left-0 top-1/3 z-50 flex-col items-center gap-4 text-primaryTextColor  p-3  mr-2 shadow-lg">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondaryColor hover:border-secondaryColor transition  p-2"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <ThemeToggle />
      <Footer />
    </div>
  );
};

export default MainLayout;
