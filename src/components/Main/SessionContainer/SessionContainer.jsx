import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router";
import * as S from "../style";

function SessionContainer({ course }) {
  const history = useHistory();
  const imageRender = () => {
    if (course.language === "javascript") {
      return (
        <img
          style={{ borderRadius: "50%", width: "60px" }}
          src="/img/icon/Javascript.png"
        />
      );
    } else if (course.language === "python") {
      return (
        <img
          style={{ borderRadius: "50%", width: "60px" }}
          src="/img/icon/Python.png"
        />
      );
    } else if (course.language === "react") {
      return (
        <img
          style={{ borderRadius: "50%", width: "60px" }}
          src="/img/icon/React.png"
        />
      );
    } else if (course.language === "c") {
      return (
        <img
          style={{ borderRadius: "50%", width: "60px" }}
          src="/img/icon/C.png"
        />
      );
    }
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
      <S.SessionContainer
      //onClick={() => history.push(`/detail/${category}/${id}`)}
      >
        <S.SessionImg>{imageRender()}</S.SessionImg>
        <S.SessionExplainWrapper>
          <S.SessionText>
            <S.SessionTitle>
              <div>{course.courseName}</div>
            </S.SessionTitle>
            <S.SessionExplain>{renderCourseLeader()}</S.SessionExplain>
          </S.SessionText>
          <S.SessionLevel>
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
          <S.SessionApplication type="danger">신청하기</S.SessionApplication>
          {/* {props.check ? (
            <S.SessionFavorite>수강중</S.SessionFavorite>
          ) : (
            <S.SessionFavorite>신청하기</S.SessionFavorite>
          )} */}
        </S.SessionExplainWrapper>
      </S.SessionContainer>
    </>
  );
}

export default SessionContainer;
