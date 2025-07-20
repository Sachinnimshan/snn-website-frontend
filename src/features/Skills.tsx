import PageWrapper from "../components/pagewrapper/PageWrapper";
import { skills } from "../components/skills/skills";

const Skills = () => {
  return (
    <PageWrapper
      title="Skills"
      description="My skills and technologies I work with"
    >
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="bg-[#131921] flex items-center gap-2 border p-3 rounded-xl shadow border-gray-800 hover:bg-yellow-400/10 hover:border-yellow-400 transition-colors cursor-pointer"
          >
            <Icon size={24} className="text-yellow-400" />
            <span className="text-gray-400 text-sm">{name}</span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Skills;
