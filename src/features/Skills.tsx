import PageWrapper from "../components/pagewrapper/PageWrapper";
import { skills } from "../components/skills/skills";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Skills = () => (
  <PageWrapper
    title="Skills"
    description="My skills and technologies I work with"
  >
    <motion.div
      className="flex flex-wrap gap-4 sm:gap-5 md:gap-2 justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map(({ name, icon: Icon }) => (
        <motion.div
          key={name}
          className="
            bg-mainBgColor
            flex items-center gap-2 sm:gap-3
            border-2 p-3 sm:p-4 md:p-5
            rounded-full shadow-sm border-primaryWhiteColor
            hover:border-secondaryColor
            transition-colors cursor-pointer
            min-w-[130px] sm:min-w-[155px] md:min-w-[180px]
            justify-center
          "
          variants={chipVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon
            className="text-secondaryColor"
            size={22}
            style={{ minWidth: 22, minHeight: 22 }}
          />
          <span className="text-thirdTextColor text-xs sm:text-sm md:text-base font-semibold">
            {name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </PageWrapper>
);

export default Skills;
