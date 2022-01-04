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

  const word = { absent: "결석", attend: "출석", late: "지각" };

  useEffect(() => {
    async function loadUserData() {
      //user의 이름과 Emoji를 가져옴
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
    // selected 했을 때 Object를 만들어 Data를 바꿔줌
    let stateNum = 0;
    let newCourseAttendanceData = courseAttendanceData;
    let newArray = courseAttendanceData.attendance;
    // convert string to number (Data type)
    if (value === word.attend) {
      stateNum = 0;
    } else if (value === word.absent) {
      stateNum = 1;
    } else if (value === word.late) {
      stateNum = 2;
    }
    newArray[key.key[2]] = stateNum;
    newCourseAttendanceData.attendance = newArray;
    setCourseAttendanceData(newCourseAttendanceData);
    editedAttendance(newCourseAttendanceData);
  };

  const setDefaultValue = (state) => {
    // return Default Value on state
    if (state === 0) {
      return word.attend;
    } else if (state === 1) {
      return word.absent;
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
              if (isEditMode === false) {
                //출석 관리 페이지에서 들어올때
                if (state === 0)
                  return (
                    <StyledAttendance key={index}>
                      {word.attend}
                    </StyledAttendance>
                  );
                else if (state === 1)
                  return (
                    <StyledAbsence key={index}>{word.absent}</StyledAbsence>
                  );
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
                    <Option key={`0_${index}`} value={word.attend}>
                      {word.attend}
                    </Option>
                    <Option key={`1_${index}`} value={word.absent}>
                      {word.absent}
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
