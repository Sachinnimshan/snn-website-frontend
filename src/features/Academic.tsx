import { useGetAcademicListQuery } from "../api/webApiSlice";
import PageWrapper from "../components/pagewrapper/PageWrapper";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaMedal } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Academic = () => {
  const { data } = useGetAcademicListQuery();

  return (
    <PageWrapper
      title="Academic Qualifications"
      description="My academic background and qualifications"
    >
      <VerticalTimeline>
        {data?.map((item) => (
          <VerticalTimelineElement
            key={item._id}
            date={`${new Date(item.start).getFullYear()} - ${new Date(
              item.ends
            ).getFullYear()}`}
            iconStyle={{
              background: "#facc15",
              color: "#1f2937",
            }}
            icon={<FaGraduationCap />}
            contentStyle={{
              background: "#f3f4f6",
              color: "#1f2937", // gray-400
              borderTop: "0.5rem solid #facc15",
            }}
            className="dark:bg-gray-800 dark:text-gray-100"
            dateClassName="text-gray-100 dark:text-gray-200"
          >
            <span className="flex align-center gap-2 text-base font-bold dark:text-yellow-300">
              <FaMedal size={20} className="text-gray-400" />
              {item.title}
            </span>
            <span className="flex align-center gap-2 text-md font-medium text-yellow-500 dark:text-yellow-400 mt-2">
              <FaLocationDot size={20} className="text-gray-400" />
              {item.university}
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Grade: {item.grade}
            </p>
            <ul className="list-disc pl-4 text-sm text-gray-700 dark:text-gray-300">
              {item.syllabus.map(
                (point, idx) => point && <li key={idx}>{point}</li>
              )}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </PageWrapper>
  );
};

export default Academic;
