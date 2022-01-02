import { Empty, Timeline } from "antd";
import React, { useEffect, useState } from "react";
import CourseContainer from "../../../../../components/CourseContainer/CourseContainer";
import { StyledTimelineItem } from "../../../style";

function UserCoursePageCard({ userData }) {
  const [courseContainerArray, setcourseContainerArray] = useState([]);
  useEffect(() => {
    userData.courseHistory &&
      setcourseContainerArray(userData.courseHistory.reverse());
  }, [userData]);

  return (
    <div style={{ marginTop: "80px" }}>
      <Timeline>
        {courseContainerArray.length > 0 ? (
          courseContainerArray.map((course, key) => {
            return (
              <div
                style={{ display: "grid", gridTemplateColumns: "50px auto" }}
                key={key}
              >
                <div style={{ marginTop: "-3px" }}>{course.semester}</div>
                <StyledTimelineItem>
                  <CourseContainer
                    key={course.id}
                    course={course}
                    CourseApplicationState={false}
                  />
                </StyledTimelineItem>
              </div>
            );
          })
        ) : (
          <Empty />
        )}
      </Timeline>
    </div>
  );
}

export default UserCoursePageCard;
