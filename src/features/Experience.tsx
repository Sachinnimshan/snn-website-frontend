import { useGetExperienceListQuery } from "../api/webApiSlice";
import PageWrapper from "../components/pagewrapper/PageWrapper";
import { FaBriefcase } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Loader from "../components/loader/Loader";
import { APP_COLORS } from "../utils/theme";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Experience = () => {
  const selectedColor = useSelector(
    (state: RootState) => state.theme.secondaryColor
  );
  const { data: experiences, isLoading } = useGetExperienceListQuery(undefined);

  return (
    <PageWrapper
      title="Work Experience"
      description="Professional roles and experiences over time"
    >
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <VerticalTimeline lineColor={APP_COLORS.PRIMARY_WHITE_COLOR}>
          {experiences
            ?.slice() // Create a shallow copy to avoid mutating the original data
            .sort(
              (a, b) =>
                new Date(b.start).getTime() - new Date(a.start).getTime() // Sort descending (latest first)
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
                iconStyle={{
                  background: selectedColor,
                  color: APP_COLORS.PRIMARY_WHITE_COLOR,
                }} // yellow-400
                icon={<FaBriefcase />}
                contentStyle={{
                  background: APP_COLORS.MAIN_BG_COLOR,
                  color: APP_COLORS.PRIMARY_TEXT_COLOR,
                  borderTop: item.current
                    ? `0.5rem solid ${selectedColor}`
                    : "none",
                }}
                contentArrowStyle={{
                  borderRight: `5px solid ${APP_COLORS.MAIN_BG_COLOR}`,
                }}
                dateClassName="text-primaryTextColor font-bold dark:text-gray-200"
              >
                <h3 className="text-lg font-bold text-primaryTextColor">
                  {item.jobTitle}
                </h3>
                <h4 className="text-md font-semibold text-secondaryColor">
                  {item.companyName}
                </h4>
                <ul className="list-disc pl-4 text-sm mt-2 text-gray-700">
                  {item.keyroles?.map(
                    (point: string, idx: number) =>
                      point && <li key={idx}>{point}</li>
                  )}
                </ul>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      )}
    </PageWrapper>
  );
};

export default Experience;
