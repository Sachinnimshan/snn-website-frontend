import { useGetAcademicListQuery } from "../api/webApiSlice";
import PageWrapper from "../components/pagewrapper/PageWrapper";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Loader from "../components/loader/Loader";
import { APP_COLORS } from "../utils/theme";
import { SlLocationPin } from "react-icons/sl";
import { IoMedalOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Academic = () => {
  const selectedColor = useSelector(
    (state: RootState) => state.theme.secondaryColor
  );
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
                background: selectedColor,
                color: APP_COLORS.PRIMARY_WHITE_COLOR,
              }}
              icon={<FaGraduationCap />}
              contentStyle={{
                background: APP_COLORS.MAIN_BG_COLOR,
                color: APP_COLORS.PRIMARY_TEXT_COLOR,
                borderTop: `0.25rem solid ${selectedColor}`,
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${APP_COLORS.MAIN_BG_COLOR}`,
              }}
              className="dark:bg-gray-800 dark:text-gray-100"
              dateClassName="text-primaryTextColor dark:text-secondaryColor"
            >
              <span className="flex items-center gap-2 text-base font-semibold text-primaryTextColor dark:text-yellow-300">
                {item.title}
              </span>
              <span className="flex items-center gap-2 text-base mt-2 block text-sm text-secondaryTextColor dark:text-gray-300 uppercase font-semibold">
                <IoMedalOutline size={20} className="text-secondaryColor" />
                {item.grade}
              </span>
              <span className="flex items-center gap-2 text-md font-semibold text-secondaryTextColor dark:text-yellow-400 mt-2">
                <SlLocationPin size={20} className="text-secondaryColor" />
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
