import { Button } from "antd";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Curriculum from "./components/Curriculum";

function CoursePage() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <Button onClick={() => history.push(`${location.pathname}/attendance`)}>
        출결관리
      </Button>
      <Button onClick={() => history.push(`${location.pathname}/change`)}>
        정보 수정
      </Button>
      <Curriculum />
    </div>
  );
}

export default CoursePage;
