import { useGetProjectListQuery } from "../api/webApiSlice";
import Loader from "../components/loader/Loader";
import PageWrapper from "../components/pagewrapper/PageWrapper";
import ProjectCard from "../components/projectcard/ProjectCard";
import type { Project } from "../types/projects";

export default function Projects() {
  const { data: projects, isLoading } = useGetProjectListQuery(undefined);

  return (
    <PageWrapper title="Personal Projects" description="Explore my projects">
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {projects?.map((project: Project, i: number) => (
            <ProjectCard project={project} i={i} />
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
