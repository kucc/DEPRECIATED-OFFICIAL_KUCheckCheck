import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { firestoreService } from "../../../firebase";
import TimeTableSave from "./TimeTableSave";

function CourseChange() {
  const location = useLocation();
  const [courseInfo, setcourseInfo] = useState();

  useEffect(() => {
    firestoreService
      .collection("courses")
      .doc(location.pathname.split("/")[3])
      .get()
      .then((doc) => {
        setcourseInfo(doc.data());
      });
  }, []);

  return (
    <div>
      {/* save 버튼 클릭시 timeTableInfo를 출력, course 정보 저장시 timeTableInfo 또한 함께 저장해야 함. */}
      <TimeTableSave
        courseInfo={courseInfo}
        courseId={location.pathname.split("/")[3]}
        timeTableInfo={(timeTableInfo) => console.log(timeTableInfo)}
      />
    </div>
  );
}

export default CourseChange;
