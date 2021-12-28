import { COMPLETIONSTATEMENT_TYPES } from "@babel/types";
import { Button, Select } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import NavBar from "../../../components/NavBar/NavBar";
import { firestoreService } from "../../../firebase";
import CourseAttendanceCard from "../CourseAttendance/CourseAttendanceCard";
import {
  StyledAttendanceBox,
  StyledBox,
  StyledContainer,
  StyledEmogi,
  StyledAbsence,
  StyledAttendance,
  StyledLate,
} from "../CourseAttendance/CourseAttendanceCard/style";

function CourseAttendanceEdit() {
  const [userName, setuserName] = useState([]);
  const [userEmoji, setuserEmoji] = useState([]);
  const [courseAttendance, setcourseAttendance] = useState();
  const [courseUser, setcourseUser] = useState([]);
  const [editedAttendance, seteditedAttendance] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const word = { no: "결석", yes: "출석", late: "지각" };

  const userData = location.state.userData ? location.state.userData : "";
  const courseId = location.state.courseId ? location.state.courseId : "";

  useEffect(() => {
    let userRef = firestoreService.collection("users").doc(userData.id);
    userRef.get().then((doc) => {
      if (doc.exists) {
        setuserName([...userName, doc.data().name]);
        setuserEmoji([...userName, doc.data().emoji]);
      }
    });

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

  const handleClick = async () => {
    let courseRef = firestoreService.collection("courses").doc(courseId);
    courseRef.update({ courseAttendance: courseAttendance });
    history.go(-1);
  };

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
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          backgroundColor: "rgb(245, 245, 245)",
          padding: "30px",
        }}
      >
        <div>출결관리 </div>
        <Button type="danger" onClick={handleClick}>
          {" "}
          수정완료{" "}
        </Button>
      </div>

      {userData &&
        userData.map((userData, key) => {
          return (
            <CourseAttendanceCard
              userData={userData}
              courseId={courseId}
              isEditPage={"true"}
              key={key}
              indexKey={key}
              seteditedAttendance={seteditedAttendance}
              editedAttendance={(data) => onEditedAttendance(data)}
            />
          );
        })}
    </div>
  );
}

export default CourseAttendanceEdit;

//해야할 것 : 화면 선택하면 다 지각으로 나오는것, state 자식에서 부모로 업데이트해서 그 데이터를 map해서 파이어베이스 데이터 업데이트하려했는데 우선 state 업데이트가 안됨.
// 그래서 코드 Card 두개 통합하면 되나? 지금 화면에 나오는 컴포넌트는 EditCard가 아니라 그냥 Card 같은데..
