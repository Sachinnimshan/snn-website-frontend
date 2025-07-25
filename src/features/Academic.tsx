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
import Loader from "../components/loader/Loader";
import { THEME_COLORS } from "../utils/theme";

const Academic = () => {
  const { data, isLoading } = useGetAcademicListQuery();

  return (
    <PageWrapper
      title="Academic Qualifications"
      description="My academic background and qualifications"
    >
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <VerticalTimeline>
          {data?.map((item) => (
            <VerticalTimelineElement
              key={item._id}
              date={`${new Date(item.start).getFullYear()} - ${new Date(
                item.ends
              ).getFullYear()}`}
              iconStyle={{
                background: THEME_COLORS.PRIMARY_YELLOW_COLOR,
                color: THEME_COLORS.PRIMARY_TEXT_COLOR,
              }}
              icon={<FaGraduationCap />}
              contentStyle={{
                background: THEME_COLORS.MAIN_BG_COLOR,
                color: THEME_COLORS.PRIMARY_TEXT_COLOR, // gray-400
                borderTop: `0.5rem solid ${THEME_COLORS.PRIMARY_YELLOW_COLOR}`,
                border: `1px solid ${THEME_COLORS.PRIMARY_WHITE_COLOR}`,
              }}
              className="dark:bg-gray-800 dark:text-gray-100"
              dateClassName="text-gray-100 dark:text-gray-200"
            >
              <span className="flex align-center gap-2 text-lg font-semibold text-primaryTextColor dark:text-yellow-300">
                <FaMedal size={20} className="text-gray-500" />
                {item.title}
              </span>
              <span className="mt-15 text-sm text-primaryTextColor dark:text-gray-300 uppercase font-semibold">
                Grade: {item.grade}
              </span>
              <span className="flex align-center gap-2 text-md font-medium text-secondaryTextColor dark:text-yellow-400 mt-2">
                <FaLocationDot size={20} className="text-yellow-600" />
                {item.university}
              </span>
              <ul className="list-disc pl-4 text-sm text-primaryTextColor dark:text-gray-300">
                {item.syllabus.map(
                  (point, idx) => point && <li key={idx}>{point}</li>
                )}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
    </PageWrapper>
  );
};

export default Academic;
