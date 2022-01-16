import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { firestoreService } from '@/firebase';
import { SUCCESS_APPLICATION } from '@utility/ALERT_MESSAGE';

import CourseRegisterBox from './CourseRegisterBox';

export default function CourseUpdate() {
  // CourseUpdate는 CourseRegisterBox로 정보를 받아와서 firebase로 정보를 update하는 함수.
  const history = useHistory();
  const currentUser = useSelector(state => state.user.currentUser);
  const [currentSemester, setcurrentSemester] = useState('');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    firestoreService
      .collection('common')
      .doc('commonInfo')
      .get()
      .then(doc => {
        setcurrentSemester(doc.data().currentSemester);
      });
  }, []);

  const enrollHandler = async sessionInfo => {
    setloading(true);
    const {
      courseName,
      courseInfo,
      courseGoal,
      language,
      difficulty,
      requireTime,
      courseType,
      courseDate,
      coursePlace,
      courseNotice,
      courseMember,
      courseCurriculum,
    } = sessionInfo;

    const course = {
      courseType,
      language,
      difficulty,
      requireTime,
      courseName,
      courseInfo,
      courseGoal,
      courseDate,
      coursePlace,
      courseNotice,
      courseCurriculum,
      maxMemberNum: Number(courseMember),
      courseMember: [currentUser.uid],
      courseLeader: {
        name: currentUser.displayName,
        id: currentUser.uid,
      },
      courseAttendance: [
        {
          id: currentUser.uid,
          // number로 attendance 구현, 0 : 출석, 1 : 지각, 2 : 결석
          attendance: [0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
      semester: currentSemester,
      courseCheckAdmin: [currentUser.uid],
    };

    try {
      // 중복 입력을 막기 위한 loading
      if (!loading) {
        let courseId = '';
        // course 정보에 추가
        await firestoreService
          .collection('courses')
          .add(course)
          .then(docRef => {
            // id 값 저장
            courseId = docRef.id;
          });

        // userHistory에 추가
        // 새로운 course History 배열을 생성
        let newCourseHistory = [];
        await firestoreService
          .collection('users')
          .doc(currentUser.uid)
          .get()
          .then(querySnapshot => {
            newCourseHistory = querySnapshot.data().courseHistory;
          });

        // 유저 history에 course를 등록
        // memory 절약을 위해 render하는데 필요한 정보만 course에 담음
        await firestoreService
          .collection('users')
          .doc(currentUser.uid)
          .update({
            courseHistory: [
              ...newCourseHistory,
              {
                courseType,
                language,
                difficulty,
                requireTime,
                courseName,
                courseInfo,
                courseLeader: {
                  name: currentUser.displayName,
                  id: currentUser.uid,
                },
                semester: currentSemester,
                id: courseId,
              },
            ],
          });

        // 성공 시 알림
        alert(SUCCESS_APPLICATION);
        history.push('/');
      }
    } catch (error) {
      alert('Error adding document: ', error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <CourseRegisterBox enrollHandler={enrollHandler} />
    </>
  );
}
