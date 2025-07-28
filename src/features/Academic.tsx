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
              icon={<FaGraduationCap />}
              contentStyle={{
                background: APP_COLORS.MAIN_BG_COLOR,
                color: APP_COLORS.PRIMARY_TEXT_COLOR,
                borderTop: `0.3rem solid ${selectedColor}`,
              }}
              contentArrowStyle={{
                borderRight: `8px solid ${APP_COLORS.MAIN_BG_COLOR}`,
              }}
              className="dark:bg-gray-900 dark:text-gray-100 "
              dateClassName="text-primaryTextColor dark:text-secondaryColor font-semibold"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold text-primaryTextColor dark:text-yellow-400 mb-3">
                {item.title}
              </h3>

              <ul className="text-base text-thirdTextColor dark:text-gray-300 space-y-2 mb-5 ">
                {item.syllabus.map(
                  (point, idx) =>
                    point && (
                      <li
                        key={idx}
                        className="flex items-start gap-2"
                        aria-label={`Syllabus point: ${point}`}
                      >
                        <IoMdArrowDropright
                          className="text-secondaryColor flex-shrink-0 mt-1"
                          size={18}
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    )
                )}
              </ul>

              <div className="flex flex-wrap gap-3 mt-3">
                <span
                  className="bg-secondaryColor text-primaryWhiteColor inline-flex items-center gap-1 px-4 py-1.5 rounded-full font-semibold uppercase text-sm cursor-default 
                border border-transparent"
                >
                  <GiGraduateCap size={18} aria-hidden="true" />
                  {item.grade}
                </span>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.cardiffmet.ac.uk/"
                  className="bg-secondaryColor text-primaryWhiteColor inline-flex items-center gap-1 px-4 py-1.5 rounded-full font-semibold uppercase text-sm cursor-default 
                border border-transparent"
                >
                  <IoMedalOutline size={18} aria-hidden="true" />
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
