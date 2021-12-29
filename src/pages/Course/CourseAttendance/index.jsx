import React, { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { firestoreService } from "../../../firebase";
import { StyledBackground, StyledNavBarContainer } from "../../Rules/style";
import CourseAttendanceCard from "./CourseAttendanceCard";
import CourseAttendanceTop from "./CourseAttendanceTop";

function CourseAttendace() {
  const courseId = document.location.href.split("/")[5];
  const [userData, setuserData] = useState([]);
  const [courseName, setCourseName] = useState("");
  useEffect(() => {
    const courseId = document.location.href.split("/")[5];
    firestoreService
      .collection("courses")
      .doc(courseId)
      .get()
      .then((querySnapshot) => {
        setCourseName(querySnapshot.data().courseName);
        setuserData(querySnapshot.data().courseAttendance);
      });
  }, []);

  return (
    <>
      {userData && (
        <CourseAttendanceTop
          courseName={courseName}
          userData={userData}
          courseId={courseId}
          isEditMode={false}
        />
      )}
      {userData &&
        userData.map((userData, key) => {
          return (
            <CourseAttendanceCard
              key={key}
              indexKey={key}
              userData={userData}
              courseId={courseId}
              isEditPage={"false"}
            />
          );
        })}
    </>
  );
}

export default CourseAttendace;
