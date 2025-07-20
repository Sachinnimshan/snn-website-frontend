import { useGetProjectListQuery } from "../api/webApiSlice";
import PageWrapper from "../components/pagewrapper/PageWrapper";
import SkeletonCard from "../components/skeloton/SkeletonCard";
import type { Project } from "../types/projects";
import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function Projects() {
  const { data: projects, isLoading } = useGetProjectListQuery(undefined);

  if (isLoading)
    return (
      <PageWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </PageWrapper>
    );

  return (
    <PageWrapper title="Personal Projects" description="Explore my projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects?.map((project: Project, i: number) => (
          <motion.div
            key={project._id}
            className="bg-[#131921]/90 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col border border-gray-800 hover:border-yellow-400 border-4 hover:bg-yellow-400/10"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold text-gray-300 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 dark:text-gray-300 text-sm">
                {project.description}
              </p>
            </div>
            <div className="p-4 pt-0 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg border border-green-300 text-green-500 dark:border-green-600 hover:bg-green-100 dark:hover:bg-gray-700 transition"
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
                  className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg border border-red-400 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 transition"
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
                  className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg border border-blue-400 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                >
                  <FaGlobe size={16} />
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
