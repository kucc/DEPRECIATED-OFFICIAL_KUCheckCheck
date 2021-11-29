import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  StyledCourseContainer,
  StyledCourseExplain,
  StyledCourseExplainWrapper,
  StyledCourseImgContainer,
  StyledCourseLevel,
  StyledCourseText,
  StyledCourseTitle,
} from "./style";
import CourseApplication from "./CourseApplication";

function CourseContainer({ course, CourseApplicationState }) {
  const history = useHistory();
  const [onImageHover, setonImageHover] = useState(false);

  const renderCouresImage = () =>
    // 이미지 최대 3개까지 표시
    // styled component의 prop에 key를 넣으면 인식을 못하여
    // 불가피하게 jsx의 style 사용
    course.language.slice(0, 3).map((image, key) => {
      // 첫 번째 이미지를 hover 했을 때 이미지가 펼쳐짐.
      if (key === 0) {
        return (
          <img
            onMouseEnter={() => setonImageHover(true)}
            onMouseLeave={() => setonImageHover(false)}
            style={{
              position: "absolute",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "60px",
              zIndex: 3,
              cursor: "pointer",
            }}
            key={key}
            src={`/img/icon/${image}.png`}
            onClick={() => history.push(`/course/session/${course.id}`)}
          />
        );
      } else {
        return (
          <img
            style={{
              position: "absolute",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "60px",
              zIndex: 3 - key,
              left: onImageHover ? 45 + key * 70 : 45 + key * 20,
              transition: "all .2s ease",
            }}
            key={key}
            src={`/img/icon/${image}.png`}
          />
        );
      }
    });

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
        <StyledCourseImgContainer>
          {renderCouresImage()}
        </StyledCourseImgContainer>
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
