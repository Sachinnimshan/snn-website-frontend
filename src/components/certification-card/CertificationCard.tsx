import { motion } from "framer-motion";
import type { Certificate } from "../../types/certificate";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CertificationCardProps {
  certificate: Certificate;
  idx: number; // Index for animation delay
}

const CertificationCard = ({ certificate, idx }: CertificationCardProps) => {
  return (
    <div>
      <motion.div
        key={certificate.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.15 }}
        className="cursor-pointer bg-contentBgColor border border-primaryWhiteColor rounded-xl shadow-sm  transition duration-300 p-6 flex flex-col gap-4 relative"
      >
        <div className="mt-3">
          <h2 className="text-xl font-semibold text-primaryTextColor mb-1">
            {certificate.title}
          </h2>
          <p className="text-sm font-semibold text-secondaryColor uppercase">
            {certificate.issuer}
          </p>
          <p className="text-sm text-thirdTextColor font-medium mb-2 mt-1 uppercase">
            {certificate.date}
          </p>
          <p className="text-thirdTextColor text-base mb-4">
            {certificate.description}
          </p>
          {certificate.link ? (
            <a
              href={certificate.link}
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
    </div>
  );
};

export default CertificationCard;
