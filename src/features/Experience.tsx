import { useGetExperienceListQuery } from "../api/webApiSlice";
import PageWrapper from "../components/pagewrapper/PageWrapper";
import { FaBriefcase } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const {
    data: experiences,
    isLoading,
    isError,
  } = useGetExperienceListQuery(undefined);

  return (
    <PageWrapper
      title="Work Experience"
      description="Professional roles and experiences over time"
    >
      {isLoading && <p className="text-gray-400">Loading...</p>}
      {isError && (
        <p className="text-red-500">Failed to load experience data.</p>
      )}
      {!isLoading && experiences?.length === 0 && (
        <p className="text-gray-400">No experiences found.</p>
      )}

      <VerticalTimeline lineColor="#d1d5db">
        {experiences
          ?.slice() // Create a shallow copy to avoid mutating the original data
          .sort(
            (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime() // Sort descending (latest first)
          )
          .map((item) => (
            <VerticalTimelineElement
              key={item._id}
              date={`${new Date(item.start).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })} - ${
                item.current
                  ? "Present"
                  : item.ends
                  ? new Date(item.ends).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })
                  : "Present"
              }`}
              iconStyle={{ background: "#facc15", color: "#1f2937" }} // yellow-400
              icon={<FaBriefcase />}
              contentStyle={{
                background: "#f3f4f6",
                color: "#1f2937", // gray-800
                borderTop: item.current ? "0.5rem solid #facc15" : "none",
              }}
              contentArrowStyle={{ borderRight: "7px solid #e5e7eb" }} // gray-200
              dateClassName="text-gray-100 dark:text-gray-200"
            >
              <h3 className="text-lg font-bold">{item.jobTitle}</h3>
              <h4 className="text-md font-medium text-yellow-500">
                {item.companyName}
              </h4>
              <ul className="list-disc pl-4 text-sm mt-2 text-gray-600">
                {item.keyroles?.map(
                  (point: string, idx: number) =>
                    point && <li key={idx}>{point}</li>
                )}
              </ul>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </PageWrapper>
  );
};

export default Experience;
