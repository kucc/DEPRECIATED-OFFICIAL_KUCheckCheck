import { Button } from "antd";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import NavBar from "../../../../components/NavBar/NavBar";
import {
  StyledBackButton,
  StyledBackground,
  StyledEditButton,
  StyledLeftBox,
  StyledNavBarContainer,
  StyledTextBox,
  StyledTopBox,
  StyledWeekBox,
} from "./style";
import { AiOutlineLeft } from "react-icons/ai";
import { firestoreService } from "../../../../firebase";

function CourseAttendanceTop({
  courseName,
  userData,
  courseId,
  isEditMode,
  courseAttendance,
}) {
  const location = useLocation();
  const history = useHistory();

  const handleClick = async () => {
    if (isEditMode) {
      let courseRef = firestoreService.collection("courses").doc(courseId);
      await courseRef.update({ courseAttendance: courseAttendance });
      history.go(-1);
    } else {
      history.push({
        pathname: `${location.pathname}/edit`,
        state: {
          userData: userData,
          courseId: courseId,
          courseName: courseName,
        },
      });
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245" }}>
      <NavBar />
      <div style={{ marginTop: "50px" }}>
        <StyledTopBox>
          <StyledBackButton
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              marginLeft: "-5px",
            }}
            onClick={() => history.goBack()}
          >
            <AiOutlineLeft style={{ strokeWidth: "50", fontSize: "20px" }} />
          </StyledBackButton>
          <StyledLeftBox>
            <div>
              <div
                style={{
                  fontSize: "24px",
                  fontFamily: "NexonBo",
                }}
              >
                출결 확인하기
              </div>
              <div style={{ fontSize: "20px" }}>{courseName && courseName}</div>
            </div>
            <StyledEditButton
              // style={{
              //   backgroundColor: isEditMode ? "#C32020" : "white",
              //   color: isEditMode ? "white" : "black",
              // }}
              type={isEditMode ? "danger" : ""}
              onClick={handleClick}
            >
              {isEditMode ? "수정완료" : "수정하기"}
            </StyledEditButton>
          </StyledLeftBox>
        </StyledTopBox>
        <StyledWeekBox>
          <StyledTextBox>1주차</StyledTextBox>
          <StyledTextBox>2주차</StyledTextBox>
          <StyledTextBox>3주차</StyledTextBox>
          <StyledTextBox>4주차</StyledTextBox>
          <StyledTextBox>5주차</StyledTextBox>
          <StyledTextBox>6주차</StyledTextBox>
          <StyledTextBox>7주차</StyledTextBox>
          <StyledTextBox>8주차</StyledTextBox>
        </StyledWeekBox>
      </div>
    </div>
  );
}

export default CourseAttendanceTop;
