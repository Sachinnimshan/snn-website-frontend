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
import { APP_COLORS } from "../utils/theme";
import { RiShieldStarLine } from "react-icons/ri";

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
        <VerticalTimeline lineColor={APP_COLORS.PRIMARY_WHITE_COLOR}>
          {data?.map((item) => (
            <VerticalTimelineElement
              key={item._id}
              date={`${new Date(item.start).getFullYear()} - ${new Date(
                item.ends
              ).getFullYear()}`}
              iconStyle={{
                background: APP_COLORS.SECONDARY_TEXT_COLOR,
                color: APP_COLORS.PRIMARY_WHITE_COLOR,
              }}
              icon={<FaGraduationCap />}
              contentStyle={{
                background: APP_COLORS.MAIN_BG_COLOR,
                color: APP_COLORS.PRIMARY_TEXT_COLOR,
                borderTop: `0.25rem solid ${APP_COLORS.SECONDARY_COLOR}`,
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${APP_COLORS.SECONDARY_COLOR}`,
              }}
              className="dark:bg-gray-800 dark:text-gray-100"
              dateClassName="text-primaryTextColor dark:text-secondaryColor"
            >
              <span className="flex items-center gap-2 text-base font-semibold text-primaryTextColor dark:text-yellow-300">
                <FaMedal size={20} className="text-secondaryColor" />
                {item.title}
              </span>
              <span className="flex items-center gap-2 text-base mt-4 block text-sm text-secondaryTextColor dark:text-gray-300 uppercase font-semibold">
                <RiShieldStarLine size={20} className="text-secondaryColor" />
                {item.grade}
              </span>
              <span className="flex items-center gap-2 text-md font-semibold text-secondaryTextColor dark:text-yellow-400 mt-2">
                <FaLocationDot size={20} className="text-secondaryColor" />
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
