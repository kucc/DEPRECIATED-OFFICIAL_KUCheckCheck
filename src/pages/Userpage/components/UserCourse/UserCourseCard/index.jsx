import { Timeline } from "antd";
import React, { useEffect, useState } from "react";
import CourseContainer from "../../../../../components/CourseContainer/CourseContainer";
import EmptyBox from "../../../../../components/EmptyBox";
import {
  StyledCourseCardContainer,
  StyledCourseItemContainer,
  StyledCourseSemester,
  StyledTimelineItem,
} from "./style";

function UserCourseCard({ userData }) {
  const [courseContainerArray, setcourseContainerArray] = useState([]);
  useEffect(() => {
    userData.courseHistory &&
      setcourseContainerArray(userData.courseHistory.reverse());
  }, [userData]);

  return (
    <StyledCourseCardContainer>
      <Timeline>
        {courseContainerArray.length > 0 ? (
          // courseHistory가 있으면 목록을 출력
          courseContainerArray.map((course, key) => {
            return (
              <StyledCourseItemContainer key={key}>
                <StyledCourseSemester>{course.semester}</StyledCourseSemester>
                <StyledTimelineItem>
                  <CourseContainer
                    key={course.id}
                    course={course}
                    CourseApplicationState={false}
                  />
                </StyledTimelineItem>
              </StyledCourseItemContainer>
            );
          })
        ) : (
          // 없으면 Empty Box를 출력
          <EmptyBox />
        )}
      </Timeline>
    </StyledCourseCardContainer>
  );
}

export default UserCourseCard;