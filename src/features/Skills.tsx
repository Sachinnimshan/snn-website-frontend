import PageWrapper from "../components/pagewrapper/PageWrapper";
import { skills } from "../components/skills/skills";

const Skills = () => (
  <PageWrapper
    title="Skills"
    description="My skills and technologies I work with"
  >
    <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-2 justify-center">
      {skills.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="
            bg-mainBgColor
            flex items-center gap-2 sm:gap-3
            border-2 p-3 sm:p-4 md:p-5
            rounded-xl shadow border-primaryWhiteColor
            hover:border-secondaryColor
            transition-colors cursor-pointer
            min-w-[130px] sm:min-w-[155px] md:min-w-[180px]
            justify-center
          "
        >
          <Icon
            className="text-secondaryColor"
            size={22}
            style={{ minWidth: 22, minHeight: 22 }}
          />
          <span className="text-primaryTextColor text-xs sm:text-sm md:text-lg font-medium">
            {name}
          </span>
        </div>
      ))}
    </div>
  </PageWrapper>
);

export default Skills;
