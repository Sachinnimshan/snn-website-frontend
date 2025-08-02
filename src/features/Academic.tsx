import { useGetAcademicListQuery } from "../api/webApiSlice";
import PageWrapper from "../components/page-wrapper/PageWrapper";
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
import { IoMdArrowDropright } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";

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
              icon={<FaGraduationCap aria-label="Graduation cap icon" />}
              contentStyle={{
                background: APP_COLORS.CONTENT_BACKGROUND_COLOR,
                color: APP_COLORS.PRIMARY_TEXT_COLOR,
                borderTop: `0.5rem solid ${selectedColor}`,
                borderRadius: "12px",
                padding: "1.5rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: `8px solid ${APP_COLORS.MAIN_BG_COLOR}`,
              }}
              className="dark:bg-gray-900 dark:text-gray-100"
              dateClassName="text-primaryTextColor dark:text-secondaryColor font-semibold"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-primaryTextColor">
                {item.title}
              </h3>

              <ul className="text-base text-thirdTextColor dark:text-gray-300 space-y-3 mb-6">
                {item.syllabus.map(
                  (point, idx) =>
                    point && (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                        aria-label={`Syllabus point: ${point}`}
                      >
                        <IoMdArrowDropright
                          className="text-secondaryColor flex-shrink-0 mt-1"
                          size={20}
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    )
                )}
              </ul>

              <div className="flex flex-wrap gap-4 mt-4">
                <span
                  className="bg-secondaryColor text-primaryWhiteColor inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold uppercase text-sm cursor-default select-none border border-transparent shadow-md"
                  aria-label={`Grade: ${item.grade}`}
                  style={{ userSelect: "none" }}
                >
                  <GiGraduateCap size={20} aria-hidden="true" />
                  {item.grade}
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.cardiffmet.ac.uk/"
                  className="bg-primaryWhiteColor text-secondaryColor inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold uppercase text-sm cursor-pointer border-2 border-secondaryColor shadow-md transition-colors duration-200 ease-in-out hover:bg-secondaryColor hover:text-primaryWhiteColor focus:outline-none focus:ring-4 focus:ring-secondaryColor dark:focus:ring-yellow-500"
                  aria-label={`University: ${item.university}`}
                >
                  <IoMedalOutline size={20} aria-hidden="true" />
                  {item.university}
                </a>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
    </PageWrapper>
  );
};

export default Academic;
