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
} from "./style";
import { AiOutlineLeft } from "react-icons/ai";

function CourseAttendanceTop({ courseName, userData, courseId }) {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "rgb(245, 245, 245" }}>
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
            <StyledTextBox>
              <div
                style={{
                  fontSize: "20px",
                  fontFamily: "NexonBo",
                }}
              >
                출결 확인하기
              </div>
              <div style={{ fontSize: "16px" }}>{courseName && courseName}</div>
            </StyledTextBox>
            <StyledEditButton
              onClick={() => {
                history.push({
                  pathname: `${location.pathname}/edit`,
                  state: { userData: userData, courseId: courseId },
                });
              }}
            >
              수정하기
            </StyledEditButton>
          </StyledLeftBox>
        </StyledTopBox>
        <div>1주차</div>
      </div>
    </>
  );
}

export default CourseAttendanceTop;
