import React, { useEffect, useState } from 'react';

import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { firestoreService } from '@/firebase';
import { word } from '@utility';

import MCourseAttendanceCard from './MCourseAttendanceCard';
import PCourseAttendanceCard from './PCourseAttendanceCard';

function CourseAttendanceCard({ userData, isEditMode, editedAttendance }) {
  const [userName, setuserName] = useState();
  const [userEmoji, setuserEmoji] = useState();
  const [courseAttendanceData, setCourseAttendanceData] = useState(userData);
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
  }, [userData.id]);

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
    } else if (value === word.null) {
      stateNum = 3;
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
    } else if (state === 3) {
      return word.null;
    }
  };

  return (
    <>
      {isMobile ? (
        <MCourseAttendanceCard
          userEmoji={userEmoji}
          userName={userName}
          courseAttendanceData={courseAttendanceData}
          isEditMode={isEditMode}
          setDefaultValue={setDefaultValue}
          handleSelected={handleSelected}
        />
      ) : (
        <PCourseAttendanceCard
          userEmoji={userEmoji}
          userName={userName}
          courseAttendanceData={courseAttendanceData}
          isEditMode={isEditMode}
          setDefaultValue={setDefaultValue}
          handleSelected={handleSelected}
        />
      )}
    </>
  );
}

export default CourseAttendanceCard;

CourseAttendanceCard.propTypes = {
  userData: PropTypes.object,
  isEditMode: PropTypes.bool,
  editedAttendance: PropTypes.func,
};
