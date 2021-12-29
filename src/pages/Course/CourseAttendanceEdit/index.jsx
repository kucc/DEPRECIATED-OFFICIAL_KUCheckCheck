import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { firestoreService } from "../../../firebase";
import CourseAttendanceCard from "../CourseAttendance/CourseAttendanceCard";

import CourseAttendanceTop from "../CourseAttendance/CourseAttendanceTop";

function CourseAttendanceEdit() {
  const [courseAttendance, setcourseAttendance] = useState();
  const [courseUser, setcourseUser] = useState([]);
  const location = useLocation();

  const userData = location.state.userData ? location.state.userData : "";
  const courseId = location.state.courseId ? location.state.courseId : "";
  const courseName = location.state.courseName ? location.state.courseName : "";

  useEffect(() => {
    let courseRef = firestoreService.collection("courses").doc(courseId);
    courseRef.get().then((doc) => {
      if (doc.exists) {
        setcourseAttendance(doc.data().courseAttendance);
      }
    });

    userData &&
      userData.map((user) => {
        setcourseUser([...courseUser, user]);
      });
  }, []);

  const onEditedAttendance = (data) => {
    let newcourseAttendance = courseAttendance;
    courseAttendance.map((course, key) => {
      if (course.id === data.id) {
        newcourseAttendance[key] = data;
      }
    });
    setcourseAttendance(newcourseAttendance);
  };

  // console.log("업데이트할 데이터:", editedAttendance);

  return (
    <>
      {userData && (
        <CourseAttendanceTop
          courseName={courseName}
          userData={userData}
          courseId={courseId}
          isEditMode={true}
          courseAttendance={courseAttendance}
        />
      )}

      {userData &&
        userData.map((userData, key) => {
          return (
            <CourseAttendanceCard
              userData={userData}
              courseId={courseId}
              isEditPage={"true"}
              key={key}
              indexKey={key}
              editedAttendance={(data) => onEditedAttendance(data)}
            />
          );
        })}
    </>
  );
}

export default CourseAttendanceEdit;

//해야할 것 : 화면 선택하면 다 지각으로 나오는것, state 자식에서 부모로 업데이트해서 그 데이터를 map해서 파이어베이스 데이터 업데이트하려했는데 우선 state 업데이트가 안됨.
// 그래서 코드 Card 두개 통합하면 되나? 지금 화면에 나오는 컴포넌트는 EditCard가 아니라 그냥 Card 같은데..
