import { Button } from "antd/lib/radio";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import NavBar from "../../../../components/NavBar/NavBar";

function CourseAttendanceTop({ userData, courseId }) {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          backgroundColor: "rgb(245, 245, 245)",
          padding: "30px",
        }}
      >
        <p style={{ float: "right" }}>출결관리</p>
        <Button
          color="red"
          onClick={() => {
            history.push({
              pathname: `${location.pathname}/edit`,
              state: { userData: userData, courseId: courseId },
            });
          }}
        >
          {" "}
          수정하기{" "}
        </Button>
      </div>
    </>
  );
}

export default CourseAttendanceTop;
