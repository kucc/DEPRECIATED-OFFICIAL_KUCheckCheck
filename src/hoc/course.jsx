/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

// TODO: hoc의 prop-types는 어떻게 설정해줘야될까 생각해보기
import { authService, firestoreService } from '@/firebase';
import {
  COURSE_CHECK_ADMIN_ONLY,
  COURSE_LEADER_ONLY,
  NEED_TO_LOGIN,
} from '@utility/ALERT_MESSAGE';

function CourseHoc(SpecificComponent, option) {
  // option : 0 => 모든 사람이 출입할 수 있음
  // option : 1 => 로그인된 사람만이 출입할 수 있음
  // option : 2 => 세션장만이 출입할 수 있음
  // option : 3 => 출석관리자만이 출입할 수 있음

  const CourseCheck = props => {
    const [courseData, setCourseData] = useState({});

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
          case 0:
            // pass
            break;
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
    // courseLeader 정보도 함께 보내주기
    if (courseData) {
      return <SpecificComponent {...props} courseData={courseData} />;
    }
  };
  CourseCheck.propTypes = {
    props: PropTypes.object.isRequired,
  };
  return CourseCheck;
}

CourseHoc.propTypes = {
  SpecificComponent: PropTypes.element.isRequired,
  option: PropTypes.number.isRequired,
};

export default CourseHoc;
