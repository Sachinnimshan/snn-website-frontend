// src/components/industryProjectCard/IndustryProjectCard.tsx
import { motion } from "framer-motion";
import type { CommercialProject } from "../../configs/industryProjects";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

interface IndustryProjectCardProps {
  project: CommercialProject;
  i: number;
}

function truncateText(text: string) {
  if (!text) return "";
  if (text.length <= 150) return text;
  return text.slice(0, 150) + "...";
}

const IndustryProjectCard = ({ project, i }: IndustryProjectCardProps) => {
  return (
    <motion.div
      className="bg-contentBgColor rounded-lg border-2 border-primaryWhiteColor shadow-md p-6 cursor-default flex flex-col"
      custom={i}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      tabIndex={0}
      role="article"
      aria-label={`${project.title} commercial project`}
    >
      <h3 className="text-xl font-semibold text-primaryTextColor mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-secondaryColor mb-1 font-semibold">
        {project.client}
      </p>
      <p className="text-secondaryTextColor text-sm mb-3">{project.period}</p>
      <p className="text-secondaryTextColor text-base leading-relaxed flex-grow mb-4">
        {truncateText(project.description)}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs uppercase bg-secondaryBgColor text-thirdTextColor px-3 py-1 rounded-full font-semibold shadow-sm transition hover:bg-secondaryColor hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default IndustryProjectCard;
