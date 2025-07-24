import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Academic", path: "/academic" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export const socialMediaLinks = [
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
