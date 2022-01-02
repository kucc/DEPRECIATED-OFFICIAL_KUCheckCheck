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

function CourseAttendanceCard({ userData, isEditMode, editedAttendance }) {
  const [userName, setuserName] = useState();
  const [userEmoji, setuserEmoji] = useState();
  const [courseAttendanceData, setCourseAttendanceData] = useState(userData);

  const word = { no: "결석", yes: "출석", late: "지각" };

  useEffect(() => {
    async function loadUserData() {
      const userRef = await firestoreService
        .collection("users")
        .doc(userData.id)
        .get();
      setuserName(userRef.data().name);
      setuserEmoji(userRef.data().emoji);
    }
    loadUserData();
  }, []);

  const handleSelected = (value, key) => {
    let stateNum = 0;
    let newCourseAttendanceData = courseAttendanceData;
    let newArray = courseAttendanceData.attendance;
    if (value === "출석") {
      stateNum = 0;
    } else if (value === "결석") {
      stateNum = 1;
    } else if (value === "지각") {
      stateNum = 2;
    }
    newArray[key.key[2]] = stateNum;
    newCourseAttendanceData.attendance = newArray;
    setCourseAttendanceData(newCourseAttendanceData);
    editedAttendance(newCourseAttendanceData);
  };

  const setDefaultValue = (state) => {
    if (state === 0) {
      return word.yes;
    } else if (state === 1) {
      return word.no;
    } else if (state === 2) {
      return word.late;
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledBox>
          <StyledEmogi>{userEmoji}</StyledEmogi>
          <p>{userName}</p>
        </StyledBox>
        <StyledAttendanceBox>
          {courseAttendanceData &&
            courseAttendanceData.attendance.map((state, index) => {
              //[0,1,2]
              if (isEditMode === false) {
                //출석 관리 페이지에서 들어올때
                if (state === 0)
                  return (
                    <StyledAttendance key={index}>{word.yes}</StyledAttendance>
                  );
                else if (state === 1)
                  return <StyledAbsence key={index}>{word.no}</StyledAbsence>;
                else if (state === 2)
                  return <StyledLate key={index}>{word.late}</StyledLate>;
              } else {
                //출석편집에서 들어올때.
                return (
                  <Select
                    key={index}
                    defaultValue={setDefaultValue(state)}
                    style={{ width: 100 }}
                    onChange={handleSelected}
                  >
                    <Option key={`0_${index}`} value={word.yes}>
                      {word.yes}
                    </Option>
                    <Option key={`1_${index}`} value={word.no}>
                      {word.no}
                    </Option>
                    <Option key={`2_${index}`} value={word.late}>
                      {word.late}
                    </Option>
                  </Select>
                );
              }
            })}
        </StyledAttendanceBox>
      </StyledContainer>
    </>
  );
}

export default CourseAttendanceCard;
