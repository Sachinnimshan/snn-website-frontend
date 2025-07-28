import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import PageWrapper from "../components/pagewrapper/PageWrapper";

const certifications = [
  {
    id: 1,
    title: "React Basics",
    issuer: "Coursera / Meta",
    date: "January 2024",
    description:
      "Mastered the essentials of React—including components, props, state, events, JSX, and hooks. Built dynamic user interfaces using declarative programming patterns, learned about component composition, and gained an understanding of React's rendering lifecycle.",
    link: "https://www.coursera.org/account/accomplishments/certificate/UCNP272ACFPD",
  },
  {
    id: 2,
    title: "Interactivity with JavaScript",
    issuer: "Coursera / University of Michigan",
    date: "June 2024",
    description:
      "Focused on using modern JavaScript to add interactivity to web pages. Practiced manipulating the DOM, handling user events, managing form validation, working with functions, arrays, objects, and designing real-time, responsive experiences on the web.",
    link: "https://www.coursera.org/account/accomplishments/certificate/4ZL575CQZZR4",
  },
  {
    id: 3,
    title: "React Design Patterns",
    issuer: "Linkedin Learning",
    date: "June 2023",
    description:
      "Explored advanced React concepts and best practices, including common patterns such as container/presentation separation, higher order components, render props, compound components, and hooks. Improved code maintainability and scalability in React applications through effective design strategies.",
    link: "https://www.linkedin.com/learning/certificates/648fe14a59bf23f4bf6fab6db451c49568bf834dd6072f6f3c3cbdf526f3e62f",
  },
  {
    id: 4,
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    date: "January 2022",
    description:
      "Completed a comprehensive training in digital marketing, covering SEO, search and display ads, email marketing, analytics, social media, mobile marketing, content strategy, and building effective digital presence for brands and businesses.",
    link: "https://www.linkedin.com/in/sachin-nimshan/details/certifications/1714966899279/single-media-viewer/?profileId=ACoAACRIRHcBHppWnU3qDTngRkV8RfX1HmPSe2k",
  },
];

const Certifications = () => {
  return (
    <PageWrapper
      title="Certifications"
      description="Explore my certifications in web development and digital marketing."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="cursor-pointer bg-contentBgColor border border-primaryWhiteColor rounded-xl shadow-sm  transition duration-300 p-6 flex flex-col gap-4 relative"
          >
            <div className="mt-3">
              <h2 className="text-lg font-semibold text-primaryTextColor mb-1">
                {cert.title}
              </h2>
              <p className="text-sm font-semibold text-secondaryColor uppercase">
                {cert.issuer}
              </p>
              <p className="text-sm text-thirdTextColor font-semibold mb-2 mt-1">
                {cert.date}
              </p>
              <p className="text-thirdTextColor text-sm mb-4">
                {cert.description}
              </p>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase inline-flex items-center gap-2 px-4 py-2 mt-2 bg-secondaryColor shadow hover:bg-secondaryTextColor text-primaryWhiteColor  font-semibold rounded-lg transition shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  View Certificate
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-block text-xs text-gray-400 italic mt-2">
                  Certificate unavailable
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Certifications;
