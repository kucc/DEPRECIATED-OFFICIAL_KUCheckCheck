import React from "react";
import { useHistory } from "react-router";
import * as S from "../style";
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
      return <p>{course.courseLeader} 세션장</p>;
    } else if (course.courseType === 2) {
      return <p>{course.courseLeader} 스터디장</p>;
    }
  };

  return (
    <>
      <S.SessionContainer>
        <S.SessionImg>{imageRender()}</S.SessionImg>
        <S.SessionExplainWrapper
          style={{
            display: "grid",
            gridTemplateColumns: CourseApplicationState
              ? "auto 250px 180px"
              : "auto 250px",
          }}
        >
          <S.SessionText
            onClick={() => history.push(`/course/session/${course.id}`)}
          >
            <S.SessionTitle>
              <div>{course.courseName}</div>
            </S.SessionTitle>
            <S.SessionExplain>{renderCourseLeader()}</S.SessionExplain>
          </S.SessionText>
          <S.SessionLevel
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
          </S.SessionLevel>
          {CourseApplicationState && (
            <CourseApplication
              maxMemberNum={course.maxMemberNum}
              courseMember={course.courseMember}
              courseId={course.id}
            />
          )}
        </S.SessionExplainWrapper>
      </S.SessionContainer>
    </>
  );
}

export default CourseContainer;
