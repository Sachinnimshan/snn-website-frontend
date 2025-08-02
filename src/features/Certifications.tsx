import PageWrapper from "../components/page-wrapper/PageWrapper";
import { certifications } from "../configs/certifications";
import CertificationCard from "../components/certification-card/CertificationCard";

const Certifications = () => {
  return (
    <PageWrapper
      title="Certifications"
      description="Explore my certifications in web development and digital marketing."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, idx) => (
          <CertificationCard certificate={cert} idx={idx} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Certifications;
