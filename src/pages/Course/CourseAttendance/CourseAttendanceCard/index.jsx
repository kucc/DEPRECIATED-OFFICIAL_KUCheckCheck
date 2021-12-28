import React, { useEffect, useState } from "react";
import { firestoreService } from "../../../../firebase";
import { Select } from "antd";
import "antd/dist/antd.css";
import {
  StyledAttendanceBox,
  StyledBox,
  StyledContainer,
  StyledEmogi,
  StyledAbsence,
  StyledAttendance,
  StyledLate,
} from "./style";
const { Option } = Select;

function CourseAttendanceCard({
  userData,
  courseId,
  isEditPage,
  seteditedAttendance,
  editedAttendance,
}) {
  //console.log(userData, courseId);
  const [userName, setuserName] = useState();
  const [userEmoji, setuserEmoji] = useState();
  const [courseAttendance, setcourseAttendance] = useState();
  const [test, settest] = useState([]);

  const word = { no: "결석", yes: "출석", late: "지각" };

  useEffect(() => {
    let userRef = firestoreService.collection("users").doc(userData.id);
    userRef.get().then((doc) => {
      if (doc.exists) {
        setuserName(doc.data().name);
        setuserEmoji(doc.data().emoji);
        // console.log("data : ", doc.data());
      }
    });

    let courseRef = firestoreService.collection("courses").doc(courseId);
    courseRef.get().then((doc) => {
      if (doc.exists) {
        console.log("data : ", doc.data().courseAttendance);

        doc.data().courseAttendance.map((courseUser) => {
          if (courseUser.id == userData.id) {
            setcourseAttendance(courseUser.attendance);
          }
        });
      }
    });
  }, []);

  const handleSelected = (value, key) => {
    const reqArray = [userData.id, value, key.key];
    //const reqopbject = {};
    // reqopbject[value] = [userData.id, value, key.key];
    // seteditedAttendance([...editedAttendance, reqopbject]);
    seteditedAttendance([...editedAttendance, reqArray]);
    console.log("유저아이디 : ", userData.id);
  };

  return (
    <div>
      <StyledContainer>
        <StyledBox>
          <StyledEmogi>{userEmoji}</StyledEmogi>
          <p>{userName}</p>
        </StyledBox>
        <StyledAttendanceBox>
          {courseAttendance &&
            courseAttendance.map((state, index) => {
              //[0,1,2]
              if (isEditPage == "false") {
                //출석 관리 페이지에서 들어올때
                if (state === 0)
                  return <StyledAttendance>{word.yes}</StyledAttendance>;
                else if (state === 1)
                  return <StyledAbsence>{word.no}</StyledAbsence>;
                else if (state === 2)
                  return <StyledLate>{word.late}</StyledLate>;
              } else {
                //출석편집에서 들어올때.
                if (state === 0)
                  return (
                    <Select
                      defaultValue={word.yes}
                      style={{ width: 100 }}
                      onChange={handleSelected}
                    >
                      <Option key={"0"} value={index}>
                        {word.yes}
                      </Option>
                      <Option key={"1"} value={index}>
                        {word.no}
                      </Option>
                      <Option key={"2"} value={index}>
                        {word.late}
                      </Option>
                    </Select>
                  );
                else if (state === 1)
                  return (
                    <Select
                      defaultValue={word.no}
                      style={{ width: 100 }}
                      onChange={handleSelected}
                    >
                      <Option key={"0"} value={index}>
                        {word.yes}
                      </Option>
                      <Option key={"1"} value={index}>
                        {word.no}
                      </Option>
                      <Option key={"2"} value={index}>
                        {word.late}
                      </Option>
                    </Select>
                  );
                else if (state === 2)
                  return (
                    <Select
                      defaultValue={word.late}
                      style={{ width: 100 }}
                      onChange={handleSelected}
                    >
                      <Option key={"0"} value={index}>
                        {word.yes}
                      </Option>
                      <Option key={"1"} value={index}>
                        {word.no}
                      </Option>
                      <Option key={"2"} value={index}>
                        {word.late}
                      </Option>
                    </Select>
                  );
              }
            })}
        </StyledAttendanceBox>
      </StyledContainer>
    </div>
  );
}

export default CourseAttendanceCard;
