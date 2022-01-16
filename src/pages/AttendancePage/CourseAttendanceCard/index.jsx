import React, { useEffect, useState } from 'react';

import { Select } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { firestoreService } from '@/firebase';

import {
  StyledAbsent,
  StyledAttend,
  StyledAttendanceBox,
  StyledBox,
  StyledContainer,
  StyledEmoji,
  StyledLate,
} from './style';

const { Option } = Select;

function CourseAttendanceCard({ userData, isEditMode, editedAttendance }) {
  const [userName, setuserName] = useState();
  const [userEmoji, setuserEmoji] = useState();
  const [courseAttendanceData, setCourseAttendanceData] = useState(userData);
  const history = useHistory();
  const word = { absent: '결석', attend: '출석', late: '지각' };

  useEffect(() => {
    async function fetchUserData() {
      //user의 이름과 Emoji를 가져옴
      const userRef = await firestoreService
        .collection('users')
        .doc(userData.id)
        .get();
      setuserName(userRef.data().name);
      setuserEmoji(userRef.data().emoji);
    }
    fetchUserData();
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

  const setDefaultValue = state => {
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
        <StyledBox onClick={() => history.push(`/userpage/${userData.id}`)}>
          <StyledEmoji>{userEmoji}</StyledEmoji>
          <p>{userName}</p>
        </StyledBox>
        <StyledAttendanceBox>
          {courseAttendanceData &&
            courseAttendanceData.attendance.map((state, index) => {
              if (isEditMode === false) {
                //출석 수정 모드가 아닐 때
                if (state === 0)
                  return <StyledAttend key={index}>{word.attend}</StyledAttend>;
                else if (state === 1)
                  return <StyledAbsent key={index}>{word.absent}</StyledAbsent>;
                else if (state === 2)
                  return <StyledLate key={index}>{word.late}</StyledLate>;
              } else {
                //출석 수정 모드일 때
                return (
                  <Select
                    key={index}
                    defaultValue={setDefaultValue(state)}
                    style={{ width: 100 }}
                    onChange={handleSelected}>
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

CourseAttendanceCard.propTypes = {
  userData: PropTypes.object,
  isEditMode: PropTypes.bool,
  editedAttendance: PropTypes.func,
};
