import React, { useEffect, useState } from "react";
import { firestoreService } from "../../../firebase";
import CourseAttendanceCard from "./CourseAttendanceCard";
import CourseAttendanceTop from "./CourseAttendanceTop";

function CourseAttendace() {
  const courseId = document.location.href.split("/")[5];
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    const courseId = document.location.href.split("/")[5];
    firestoreService
      .collection("courses")
      .doc(courseId)
      .get()
      .then((querySnapshot) => {
        setuserData(querySnapshot.data().attendance);
      });
  }, []);

  return (
    <div>
      코스 출석!
      <CourseAttendanceTop />
      {userData &&
        userData.map((userData, key) => {
          return (
            <CourseAttendanceCard
              key={key}
              userData={userData}
              courseId={courseId}
            />
          );
        })}
    </div>
  );
}

export default CourseAttendace;
