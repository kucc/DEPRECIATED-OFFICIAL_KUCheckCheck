import React from "react";
import { useHistory } from "react-router";
import {
  StyledCourseContainer,
  StyledCourseExplain,
  StyledCourseExplainWrapper,
  StyledCourseImg,
  StyledCourseLevel,
  StyledCourseText,
  StyledCourseTitle,
} from "./style";
import CourseApplication from "./CourseApplication";

function CourseContainer({ course, CourseApplicationState }) {
  const history = useHistory();
  const imageRender = () => {
    return (
      <img
        style={{ borderRadius: "50%", width: "60px" }}
        src={`/img/icon/${course.language}.png`}
      />
    );
  };

  const renderCourseLeader = () => {
    if (course.courseType === 1) {
      return <p>{course.courseLeader.name} 세션장</p>;
    } else if (course.courseType === 2) {
      return <p>{course.courseLeader.name} 스터디장</p>;
    } else if (course.courseType === 3) {
      return <p>{course.courseLeader.name} 프로젝트장</p>;
    }
  };

  return (
    <>
      <StyledCourseContainer>
        <StyledCourseImg>{imageRender()}</StyledCourseImg>
        <StyledCourseExplainWrapper
          style={{
            display: "grid",
            gridTemplateColumns: CourseApplicationState
              ? "auto 250px 180px"
              : "auto 250px",
          }}
        >
          <StyledCourseText
            onClick={() => history.push(`/course/session/${course.id}`)}
          >
            <StyledCourseTitle>
              <div>{course.courseName}</div>
            </StyledCourseTitle>
            <StyledCourseExplain>{renderCourseLeader()}</StyledCourseExplain>
          </StyledCourseText>
          <StyledCourseLevel
            onClick={() => history.push(`/course/session/${course.id}`)}
          >
            <div
              style={{ display: "flex", placeContent: "center", gap: "3px" }}
            >
              <div style={{ display: "flex" }}>
                <div>난이도 : &nbsp;</div>
                <div style={{ color: "red" }}>{course.difficulty}</div>
                <div>&nbsp;/</div>
              </div>
              <div style={{ fontFamily: "NexonBo" }}>
                {course.requireTime}학점
              </div>
            </div>
          </StyledCourseLevel>
          {CourseApplicationState && (
            <CourseApplication courseId={course.id} course={course} />
          )}
        </StyledCourseExplainWrapper>
      </StyledCourseContainer>
    </>
  );
}

export default CourseContainer;
