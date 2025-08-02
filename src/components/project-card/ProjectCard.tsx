import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

function truncateText(text: string) {
  if (!text) return "";
  if (text.length <= 150) return text;
  return text.slice(0, 150) + "...";
}

interface ProjectCardProps {
  project: Project;
  i: number;
}

const ProjectCard = ({ project, i }: ProjectCardProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <motion.div
        key={project._id}
        className="shadow-sm bg-contentBgColor border-primaryWhiteColor rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col border hover:shadow-md border-2"
        initial="hidden"
        custom={i}
        animate="visible"
        variants={cardVariants}
        onClick={() => navigate(`/projects/${project._id}`)}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-semibold text-primaryTextColor dark:text-white mb-1">
            {project.title}
          </h2>
          <p className="text-secondaryTextColor font-base dark:text-gray-300 text-base leading-relaxed">
            {truncateText(project.description)}
          </p>
        </div>
        <div className="p-4 pt-0 flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondaryBgColor flex items-center gap-1 px-3 py-1 text-sm rounded-lg font-semibold border-2 border-blue-400 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              <FaGlobe size={16} />
              Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondaryBgColor flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-lg border-2 border-green-700 text-green-700 dark:border-green-600 hover:bg-green-100 dark:hover:bg-gray-700 transition"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          )}
          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondaryBgColor flex items-center gap-1 px-3 py-1 text-sm  font-semibold rounded-lg border-2 border-red-400 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 transition"
            >
              <FaYoutube size={16} />
              YouTube
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
