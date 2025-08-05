import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { personalInfo } from "../configs/common";

export default function Home() {
  return (
    <div className="bg-triangle-bg bg-no-repeat bg-cover bg-center relative text-white min-h-screen flex items-center justify-center px-4 sm:px-4 py-8">
      <div className="w-full max-w-6xl  p-4 sm:p-6 md:p-8 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-2xl md:text-6xl font-bold leading-tight text-primaryTextColor uppercase drop-shadow-lg tracking-wider">
            Hey, I'm {personalInfo.name}
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mt-2 sm:mt-5 text-gray-700 drop-shadow-md">
            <span className="text-secondaryColor drop-shadow-xs uppercase">
              {personalInfo.title}
            </span>
            <br className="block sm:hidden" />
            <span className="block sm:inline"> {personalInfo.subtitle}</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-base md:text-xl leading-relaxed max-w-xl sm:max-w-5xl">
            {personalInfo.description}
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full font-semibold uppercase">
            <Link
              to="/projects"
              className="bg-secondaryColor uppercase text-white px-10 py-2.5 rounded-lg shadow transition w-full sm:w-auto"
            >
              View Projects
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1QIXuvfhIHMChaDn__nbjb1fJPLYr2PUi/view?usp=sharing"
              download
              className="border-2 border-secondaryColor text-secondaryColor rounded-lg px-4 py-2.5 transition flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaDownload className="h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
