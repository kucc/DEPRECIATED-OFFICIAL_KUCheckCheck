import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { firestoreService } from '@/firebase';

import UserCourseCard from './UserCourseCard';
import UserCourseTop from './UserCourseTop';

function UserCourse({ userData }) {
  const [currentSemester, setCurrentSemester] = useState('');
  const [currentCourses, setCurrentCourses] = useState([]);
  const [pastCourses, setPastCourses] = useState([]);
  const currentUser = useSelector(state => state.user.currentUser);
  console.log(userData);
  useEffect(() => {
    async function fetchCurrentSemester() {
      const commonInfoData = await firestoreService
        .collection('common')
        .doc('commonInfo')
        .get();
      setCurrentSemester(commonInfoData.data().currentSemester);
    }
    fetchCurrentSemester();
  }, []);

  useEffect(() => {
    if (currentSemester && userData) {
      let currentCourseArr = [];
      let pastCourseArr = [];
      userData.courseHistory?.reverse().map(course => {
        if (course.semester === currentSemester) currentCourseArr.push(course);
        else pastCourseArr.push(course);
      });

      setCurrentCourses(currentCourseArr);
      setPastCourses(pastCourseArr);
    }
  }, [userData, currentSemester]);
  // option
  // active : 수강 신청 할 수 있는 상태
  // cancel : 취소할 수 있는 상태
  // nonActive : 없는 상태
  return (
    <>
      {currentUser && (
        <>
          <UserCourseTop mode='current' />
          <UserCourseCard
            courses={currentCourses}
            option={
              currentUser.uid === userData.userId ? 'cancel' : 'nonActive'
            }
            userData={userData}
          />
          <UserCourseTop mode='past' />
          <UserCourseCard
            courses={pastCourses}
            option='nonActive'
            userData={userData}
          />
        </>
      )}
    </>
  );
}

export default UserCourse;

UserCourse.propTypes = {
  userData: PropTypes.object,
};
