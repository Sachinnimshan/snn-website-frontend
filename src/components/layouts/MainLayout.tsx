import { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Github, Linkedin } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

import Home from "../../features/Home";
import About from "../../features/About";
import Projects from "../../features/Projects";
import Skills from "../../features/Skills";
import Contact from "../../features/Contact";
import Experience from "../../features/Experience";

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

  return (
    <div
      ref={vantaRef}
      className="min-h-screen flex flex-col text-white relative"
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

        {/* Fixed Side Icons */}
        <div className="hidden md:flex fixed right-4 top-1/3 z-50 flex-col items-center gap-4 text-yellow-400 bg-black/10 backdrop-blur-md p-5 border border-yellow-400 rounded-lg shadow-lg mr-2">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition border border-yellow-400 p-2 rounded-full hover:bg-yellow-400 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sachin-nimshan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition border border-yellow-400 p-2 rounded-full hover:bg-yellow-400 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
