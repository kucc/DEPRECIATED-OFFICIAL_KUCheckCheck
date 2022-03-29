/* eslint-disable react/prop-types */
// TODO: hoc의 prop-types는 어떻게 설정해줘야될까 생각해보기
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { authService, firestoreService } from '@/firebase';
import { NEED_TO_LOGIN } from '@utility';

export const CourseHoc = (SpecificComponent, option) => {
  // option : 0 => 모든 사람이 출입할 수 있음
  // option : 1 => 로그인된 사람만이 출입할 수 있음

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
        if (!data.exists) props.history.push('/course/not-found');

        // attach courseId to data
        setCourseData({ ...data.data(), courseId });
        const user = authService.currentUser;

        if (option === 1) {
          if (!user) {
            alert(NEED_TO_LOGIN);
            props.history.push('/login');
          }
        }
      }
      fetchCourseData();
    }, [props.history, props.match.params.id]);
    // 해당 Component로 courseData prop을 보내줌.
    // courseLeader 정보도 함께 보내주기
    return <SpecificComponent {...props} courseData={courseData} />;
  };
  CourseCheck.propTypes = {
    props: PropTypes.object,
  };
  return CourseCheck;
};

CourseHoc.propTypes = {
  SpecificComponent: PropTypes.element.isRequired,
  option: PropTypes.number.isRequired,
};
