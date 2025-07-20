import { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

import Home from "../../features/Home";
import About from "../../features/About";
import Projects from "../../features/Projects";
import Skills from "../../features/Skills";
import Contact from "../../features/Contact";
import Experience from "../../features/Experience";
import Academic from "../../features/Academic";

declare global {
  interface Window {
    VANTA: {
      NET: (options: Record<string, unknown>) => { destroy: () => void };
    };
  }
}

const MainLayout = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<{
    destroy: () => void;
  } | null>(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.NET) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfacc15,
          backgroundColor: 0x131921,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
    <div
      ref={vantaRef}
      className="min-h-screen flex flex-col text-white relative overflow-hidden"
    >
      <ScrollToTop />
      <Header />

      <main className="flex-grow z-10 relative scroll-smooth">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="academic">
          <Academic />
        </section>

        {/* Fixed Side Icons */}
        <div className="hidden md:flex fixed right-4 top-1/3 z-50 flex-col items-center gap-4 text-yellow-400 bg-black/10 backdrop-blur-md p-3 border border-yellow-400 rounded-lg shadow-lg mr-2">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition border-2 border-yellow-400 p-2 rounded-full hover:bg-yellow-400 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
