import { useParams } from "react-router-dom";
import { useGetProjectDetailsQuery } from "../api/webApiSlice";
import PageWrapper from "../components/pagewrapper/PageWrapper";
import Loader from "../components/loader/Loader";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams<string>();
  const projectId = id ?? "";
  const { data: project, isLoading } = useGetProjectDetailsQuery(projectId);

  return (
    <PageWrapper title={project?.title} description={project?.description}>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 mb-6">
            <span className="text-sm sm:text-base font-semibold bg-secondaryColor text-white px-3 py-1 rounded-full">
              Technology: {project?.technology}
            </span>
            <div className="flex flex-wrap gap-2 justify-center">
              {project?.languages.map((lang: string) => (
                <span
                  key={lang}
                  className="px-3 py-1 bg-mainBgColor dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs sm:text-base font-medium shadow-xs"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery - show first image if multiple */}
          {project?.gallery && project.gallery.length > 0 && (
            <div className="mb-8">
              <img
                src={project.gallery[0]}
                alt={`${project.title} screenshot`}
                className="w-full rounded-lg shadow-lg object-cover max-h-[400px] mx-auto"
              />
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {project?.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-md border-2 border-green-500 dark:border-gray-300 text-green-600 dark:text-white hover:bg-green-100 dark:hover:bg-gray-700 transition font-semibold"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            )}
            {project?.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-md border-2 border-red-500 text-red-600 hover:bg-red-100 dark:hover:bg-red-800 transition font-semibold"
              >
                <FaYoutube size={20} />
                YouTube
              </a>
            )}
            {project?.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-md border-2 border-blue-500 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 transition font-semibold"
              >
                <FaGlobe size={20} />
                Live Demo
              </a>
            )}
          </div>
        </>
      )}
    </PageWrapper>
  );
};

export default ProjectDetails;
