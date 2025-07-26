import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-triangle-bg bg-no-repeat bg-cover bg-center relative text-white min-h-screen flex items-center justify-center px-4 sm:px-4 py-8">
      <motion.div
        className="w-full max-w-6xl  p-4 sm:p-6 md:p-8 z-10"
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
          <h1 className="text-5xl sm:text-2xl md:text-6xl font-bold leading-tight text-primaryTextColor uppercase drop-shadow-lg tracking-wider">
            Hey, I'm Sachin Nimshan
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mt-2 sm:mt-5 text-gray-700 drop-shadow-md">
            Frontend Engineer ( React | TypeScript | UI/UX )
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-base md:text-lg leading-relaxed max-w-xl sm:max-w-5xl">
            Passionate software engineer building modern, intuitive, and
            scalable web apps. Expert in React, TypeScript, and clean UI
            development. Dedicated to delivering smooth, high-performance user
            experiences.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full font-semibold uppercase">
            <Link
              to="/projects"
              className="bg-secondaryColor uppercase text-white px-10 py-2.5 rounded-sm shadow transition w-full sm:w-auto"
            >
              View Projects
            </Link>
            <a
              href="/Sachin_Resume.pdf"
              download
              className="border-2 border-secondaryColor text-secondaryColor rounded-sm px-4 py-2.5 transition flex items-center justify-center gap-2 w-full sm:w-auto"
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
