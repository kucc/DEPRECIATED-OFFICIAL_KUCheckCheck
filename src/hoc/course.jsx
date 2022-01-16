/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { authService, firestoreService } from '@/firebase';
import {
  COURSE_CHECK_ADMIN_ONLY,
  COURSE_LEADER_ONLY,
  NEED_TO_LOGIN,
} from '@utility/ALERT_MESSAGE';

export default function (SpecificComponent, option) {
  // option : 0 => 모든 사람이 출입할 수 있음
  // option : 1 => 로그인된 사람만이 출입할 수 있음
  // option : 2 => 세션장만이 출입할 수 있음
  // option : 3 => 출석관리자만이 출입할 수 있음

  function CourseCheck(props) {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
      async function fetchCourseData() {
        // load course Data
        const courseId = props.match.params.id;
        // get course Data from firebase
        const data = await firestoreService
          .collection('courses')
          .doc(courseId)
          .get();
        // attach courseId to data
        setCourseData({ ...data.data(), courseId });
        const user = authService.currentUser;

        switch (option) {
          case 1:
            // 유저 정보가 없을 경우
            if (!user) {
              alert(NEED_TO_LOGIN);
              props.history.push('/login');
            }
            break;
          case 2:
            // 유저가 없거나, courseLeader가 아닐 경우
            if (!user || data.data().courseLeader.id !== user.uid) {
              alert(COURSE_LEADER_ONLY);
              props.history.push('/');
            }
            break;
          case 3:
            // 유저가 없거나, 출석 관리자가 아닐 경우
            if (!user || !data.data().courseCheckAdmin.includes(user.uid)) {
              alert(COURSE_CHECK_ADMIN_ONLY);
              props.history.push('/');
            }
            break;
        }
      }
      fetchCourseData();
    }, []);
    // 해당 Component로 courseData prop을 보내줌.
    return <SpecificComponent {...props} courseData={courseData} />;
  }
  return CourseCheck;
}
