import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { personalInfo } from "../configs/common";

export default function Home() {
  return (
    <div className="bg-triangle-bg bg-no-repeat bg-cover bg-center relative text-white min-h-screen flex items-center text-center justify-center px-4 sm:px-6 py-8">
      <div className="w-full max-w-6xl p-4 sm:p-6 md:p-8 z-10">
        <h1
          className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-bold leading-tight text-primaryTextColor uppercase tracking-wide
          "
        >
          Hey, I'm {personalInfo.name}
        </h1>

        <h2
          className="
          text-base sm:text-xl md:text-2xl lg:text-3xl
          font-semibold mt-3 sm:mt-5 text-gray-700 
          "
        >
          <span className="text-secondaryColor uppercase tracking-wide">
            {personalInfo.title}
          </span>
          <br className="block sm:hidden" />
          <span className="block sm:inline"> {personalInfo.subtitle}</span>
        </h2>

        <p
          className="
          mt-4 sm:mt-5 text-gray-600
          text-sm sm:text-base md:text-lg lg:text-xl
          leading-relaxed max-w-xl sm:max-w-3xl md:max-w-5xl mx-auto
          "
        >
          {personalInfo.description}
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full font-semibold uppercase">
          <Link
            to="/projects"
            className="
              bg-secondaryColor text-white uppercase
              px-8 sm:px-10 py-3 rounded-lg shadow 
              transition w-full sm:w-auto text-base sm:text-lg
            "
          >
            View Projects
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1QIXuvfhIHMChaDn__nbjb1fJPLYr2PUi/view?usp=sharing"
            download
            className="
              border-2 border-secondaryColor text-secondaryColor rounded-lg
              px-6 sm:px-8 py-3 transition flex items-center justify-center gap-2
              w-full sm:w-auto text-base sm:text-lg
            "
          >
            <FaDownload className="h-5 w-5" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
