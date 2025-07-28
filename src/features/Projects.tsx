import { useGetProjectListQuery } from "../api/webApiSlice";
import Loader from "../components/loader/Loader";
import PageWrapper from "../components/pagewrapper/PageWrapper";
import type { Project } from "../types/projects";
import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  if (text.length <= 200) return text;
  return text.slice(0, 200) + "...";
}

export default function Projects() {
  const { data: projects, isLoading } = useGetProjectListQuery(undefined);
  const navigate = useNavigate();

  return (
    <PageWrapper title="Personal Projects" description="Explore my projects">
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {projects?.map((project: Project, i: number) => (
            <motion.div
              key={project._id}
              className="shadow-sm bg-contentBgColor border-primaryWhiteColor rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col border hover:shadow-md border-2"
              custom={i}
              initial="hidden"
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
                <p className="text-secondaryTextColor font-base dark:text-gray-300 text-base">
                  {truncateText(project.description)}
                </p>
              </div>
              <div className="p-4 pt-0 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 text-sm rounded-full border-2 border-green-500 text-green-500 dark:border-green-600 hover:bg-green-100 dark:hover:bg-gray-700 transition"
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
                    className="flex items-center gap-1 px-3 py-1 text-sm rounded-full border-2 border-red-400 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 transition"
                  >
                    <FaYoutube size={16} />
                    YouTube
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 text-sm rounded-full border-2 border-blue-400 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                  >
                    <FaGlobe size={16} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
