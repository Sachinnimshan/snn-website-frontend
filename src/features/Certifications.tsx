import PageWrapper from "../components/page-wrapper/PageWrapper";
import CertificationCard from "../components/certification-card/CertificationCard";
import { useGetCertificationListQuery } from "../api/webApiSlice";
import Loader from "../components/loader/Loader";

const Certifications = () => {
  const { data, isLoading } = useGetCertificationListQuery();
  return (
    <PageWrapper
      title="Certifications"
      description="Explore my certifications in web development and digital marketing."
    >
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map((cert, idx) => (
            <CertificationCard certificate={cert} idx={idx} />
          ))}
        </div>
      )}
    </PageWrapper>
  );
};

export default Certifications;
