import React, { useEffect } from "react";
import { firestoreService } from "../../../firebase";
import CourseAttendanceTop from "./CourseAttendanceTop";

function CourseAttendace() {
  // prop으로 courseID 불러오기
  // 2fQb80nV3z3JsMzPu8uW 라고 가정
  useEffect(() => {
    // firestoreService
    //   .collection("courses")
    //   .get()
    //   .then((querySnapshot) => {
    //     let noticesArray = [];
    //     querySnapshot.forEach((doc) => {
    //       noticesArray.push(doc.data());
    //     });
    //     setNotices(noticesArray);
    //   });
  }, []);

  return (
    <div>
      코스 출석!
      <CourseAttendanceTop />
      {/* map 함수로 render하기
      <CourseAttendanceCard /> */}
    </div>
  );
}

export default CourseAttendace;
