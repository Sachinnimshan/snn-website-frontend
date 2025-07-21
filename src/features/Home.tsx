import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ...imports

export default function Home() {
  return (
    <div className="relative text-white min-h-screen flex items-center justify-center px-4 sm:px-4 py-8">
      <motion.div
        className="w-full max-w-3xl bg-black/30 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 shadow-lg z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-yellow-400 font-semibold text-xs sm:text-sm tracking-wide uppercase mb-1 sm:mb-2">
            Hello, I'm
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-100">
            Sachin Nimshan
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-2xl font-medium text-gray-300 mt-1 sm:mt-2">
            Frontend Engineer ( React | TypeScript | UI/UX )
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl sm:max-w-2xl">
            Passionate software engineer building modern, intuitive, and
            scalable web apps. Expert in React, TypeScript, and clean UI
            development. Dedicated to delivering smooth, high-performance user
            experiences.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full">
            <Link
              to="/projects"
              className="bg-yellow-400 text-black font-semibold px-4 py-2.5 rounded-lg shadow hover:bg-yellow-300 transition w-full sm:w-auto"
            >
              View Projects
            </Link>
            <a
              href="/Sachin_Resume.pdf"
              download
              className="border border-yellow-400 text-yellow-400 px-4 py-2.5 rounded-lg hover:bg-yellow-400 hover:text-black transition flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaDownload className="h-5 w-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
