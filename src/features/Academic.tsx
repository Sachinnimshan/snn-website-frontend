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
import { IoMedalOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { FiCheckCircle } from "react-icons/fi";

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

              <ul className="text-sm text-primaryTextColor dark:text-gray-300 space-y-1 mt-2 mb-5">
                {item.syllabus.map(
                  (point, idx) =>
                    point && (
                      <li key={idx} className="flex items-center gap-2">
                        <FiCheckCircle className="text-secondaryColor flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    )
                )}
              </ul>
              <span className="flex flex-wrap gap-2 mt-2">
                <span className="border-2 border-primaryWhiteColor inline-flex items-center gap-1 px-3 py-1 bg-secondaryColor  text-primaryWhiteColor text-sm font-medium rounded-lg uppercase">
                  <IoMedalOutline size={16} />
                  {item.grade}
                </span>
                <span className="border-2 border-primaryWhiteColor inline-flex items-center gap-1 px-3 py-1 bg-secondaryColor  text-primaryWhiteColor text-sm font-medium rounded-lg uppercase">
                  {item.university}
                </span>
              </span>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
    </PageWrapper>
  );
};

export default Academic;
