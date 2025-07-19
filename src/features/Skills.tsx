import PageWrapper from "../components/pagewrapper/PageWrapper";
import { skills } from "../components/skills/skills";

const Skills = () => {
  return (
    <PageWrapper
      title="Skills"
      description="My skills and technologies I work with"
    >
      <div className="flex flex-wrap gap-4">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex items-center gap-2 border p-5 rounded-xl shadow border-gray-400 hover:bg-yellow-400/10 transition-colors cursor-pointer"
          >
            <Icon size={24} className="text-yellow-400" />
            <span className="text-gray-400">{name}</span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Skills;
