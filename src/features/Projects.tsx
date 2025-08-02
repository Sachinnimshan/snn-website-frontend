import { useState } from "react";
import { useGetProjectListQuery } from "../api/webApiSlice";
import Loader from "../components/loader/Loader";
import PageWrapper from "../components/page-wrapper/PageWrapper";
import ProjectCard from "../components/project-card/ProjectCard";
import IndustryProjectCard from "../components/industry-project-card/IndustryProjectCard";
import ProjectsToggle from "../components/projects-toggle/ProjectsToggle";

import { commercialProjects } from "../configs/industryProjects";
import IotProjectCard from "../components/iot-card/IotProjectCard";
import { iotProjects } from "../configs/iot";

export default function Projects() {
  const { data: personalProjects, isLoading } =
    useGetProjectListQuery(undefined);
  const [projectCategory, setProjectCategory] = useState<
    "commercial" | "personal" | "iot"
  >("commercial");

  return (
    <PageWrapper
      title={
        (projectCategory === "commercial"
          ? "Commercial"
          : projectCategory === "personal"
          ? "Personal"
          : "IoT") + " Projects"
      }
      description="Explore my projects"
    >
      <ProjectsToggle
        options={[
          { label: "Commercial", value: "commercial" },
          { label: "Personal", value: "personal" },
          { label: "IoT", value: "iot" },
        ]}
        selectedValue={projectCategory}
        onChange={setProjectCategory}
      />

      {isLoading && projectCategory === "personal" ? (
        <Loader loading={isLoading} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {projectCategory === "commercial" &&
            commercialProjects.map((project, i) => (
              <IndustryProjectCard key={project.id} project={project} i={i} />
            ))}

          {projectCategory === "personal" &&
            personalProjects?.map((project, i) => (
              <ProjectCard key={project._id} project={project} i={i} />
            ))}

          {projectCategory === "iot" &&
            iotProjects.map((project, i) => (
              <IotProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>
      )}
    </PageWrapper>
  );
}
