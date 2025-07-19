import StackIcon from "tech-stack-icons";
import { skills } from "../components/skills/skills";
import PageWrapper from "../components/pagewrapper/PageWrapper";

const Skills = () => {
  return (
    <PageWrapper
      title="Skills"
      description="My skills and technologies I work with"
    >
      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        {skills?.map((skill: string) => (
          <div
            key={skill}
            className="flex items-center gap-3 bg-[#131921]/60 px-4 py-2 rounded-full shadow text-sm font-medium border border-gray-400 hover:bg-gray-200 transition-colors cursor-pointer border-2"
          >
            <StackIcon name={skill} style={{ width: 28, height: 28 }} />
            <span className="text-gray-400">{skill.toLocaleUpperCase()}</span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Skills;
