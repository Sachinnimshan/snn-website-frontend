import { useState } from "react";
import { useGetProjectListQuery } from "../api/webApiSlice";
import Loader from "../components/loader/Loader";
import PageWrapper from "../components/page-wrapper/PageWrapper";
import ProjectCard from "../components/project-card/ProjectCard";
import { commercialProjects } from "../configs/industryProjects";
import IndustryProjectCard from "../components/industry-project-card/IndustryProjectCard";
import ProjectsToggle from "../components/projects-toggle/ProjectsToggle";

export default function Projects() {
  const { data: personalProjects, isLoading } =
    useGetProjectListQuery(undefined);
  const [showCommercial, setShowCommercial] = useState(true);

  return (
    <PageWrapper
      title={showCommercial ? "Commercial Projects" : "Personal Projects"}
      description="Explore my projects"
    >
      <ProjectsToggle
        options={[
          { label: "Commercial Projects", value: true },
          { label: "Personal Projects", value: false },
        ]}
        selectedValue={showCommercial}
        onChange={setShowCommercial}
      />

      {isLoading && !showCommercial ? (
        <Loader loading={isLoading} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {showCommercial
            ? commercialProjects.map((project, i) => (
                <IndustryProjectCard key={project.id} project={project} i={i} />
              ))
            : personalProjects?.map((project, i) => (
                <ProjectCard key={project._id} project={project} i={i} />
              ))}
        </div>
      )}
    </PageWrapper>
  );
}
