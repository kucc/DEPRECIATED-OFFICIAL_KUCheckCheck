import { Button } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { firestoreService } from "../../firebase";

function CoursePage() {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {}, []);
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
