import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import PageWrapper from "../components/pagewrapper/PageWrapper";

const certifications = [
  {
    id: 1,
    title: "Frontend Development with React",
    issuer: "Coursera / Meta",
    date: "Jan 2024",
    description:
      "Covered React fundamentals, hooks, routing, state management, and performance optimization techniques.",
  },
  {
    id: 2,
    title: "Full Stack Developer Program",
    issuer: "freeCodeCamp",
    date: "Aug 2023",
    description:
      "Learned MERN stack development, REST APIs, authentication, and deployment strategies.",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "Udemy",
    date: "Mar 2022",
    description:
      "Gained hands-on experience building mobile-first responsive layouts using HTML, CSS, and Flexbox/Grid.",
  },
];

const Certifications = () => {
  return (
    <PageWrapper
      title="Certifications"
      description="Explore my certifications in web development and design."
    >
      <div className="relative border-l border-yellow-500 pl-6 space-y-12">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: cert.id * 0.15 }}
            className="relative"
          >
            {/* Icon */}
            <span className="absolute -left-[22px] top-1 bg-yellow-500 p-2 rounded-full shadow-lg">
              <FaCertificate className="text-white w-5 h-5" />
            </span>

            {/* Card Content */}
            <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-yellow-400/40 transition duration-300">
              <h2 className="text-xl font-semibold text-yellow-400">
                {cert.title}
              </h2>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-xs text-gray-500 mb-2">{cert.date}</p>
              <p className="text-gray-300 text-sm">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Certifications;
