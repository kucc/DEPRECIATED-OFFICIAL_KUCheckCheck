import { Button } from "antd";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import NavBar from "../../../../components/NavBar/NavBar";
import {
  StyledBackButton,
  StyledEditButton,
  StyledLeftBox,
  StyledTextBox,
  StyledTopBox,
  StyledWeekBox,
} from "./style";
import { AiOutlineLeft } from "react-icons/ai";
import { firestoreService } from "../../../../firebase";
import { useSelector } from "react-redux";
import WhiteShadowButton from "../../../../components/Buttons/WhiteShadowButton";

function CourseAttendanceTop({
  courseName,
  courseId,
  isEditMode,
  courseAttendance,
  courseCheckAdmin,
}) {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const history = useHistory();

  const handleClick = async () => {
    if (isEditMode) {
      // course 정보 update
      await firestoreService
        .collection("courses")
        .doc(courseId)
        .update({ courseAttendance: courseAttendance });
      history.goBack();
    } else {
      history.push({
        pathname: `${location.pathname}/edit`,
      });
    }
  };

  const renderEditButton = () => {
    // 출석 체크 담당자가 맞는지 확인
    if (courseCheckAdmin && user && courseCheckAdmin.includes(user.uid)) {
      return (
        <StyledEditButton>
          <WhiteShadowButton
            type={isEditMode ? "danger" : ""}
            text={isEditMode ? "수정완료" : "수정하기"}
            onClick={handleClick}
          />
        </StyledEditButton>
      );
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
            {renderEditButton()}
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
