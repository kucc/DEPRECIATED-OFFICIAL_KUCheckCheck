import { Button } from "antd";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function CoursePage() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div>
      <Button onClick={() => history.push(`${location.pathname}/attendance`)}>
        {" "}
        출결관리{" "}
      </Button>
    </div>
  );
}

export default CoursePage;
