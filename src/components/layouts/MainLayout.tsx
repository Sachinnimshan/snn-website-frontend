import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const socialMediaLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/your-username",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/sachin-nimshan/",
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      url: "https://www.facebook.com/sachin.nimshan",
    },
    {
      icon: <FaYoutube className="w-6 h-6" />,
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

      <div className="hidden md:flex fixed right-4 top-1/3 z-50 flex-col items-center gap-4 text-primaryTextColor  p-3  mr-2">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondaryColor hover:border-secondaryColor transition border-2 border-primaryTextColor p-2 rounded-full"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
