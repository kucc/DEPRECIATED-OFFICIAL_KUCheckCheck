import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { CourseApplication, FullWidthButton, NavBar } from '@components';

import { firestoreService } from '@/firebase';
import { FAILED_TO_LOAD_DATA, MAIN_COLOR, StyledBackground } from '@utility';

import CourseBottom from './CourseBottom';
import CourseTop from './CourseTop';
import {
  StyledAttendanceButton,
  StyledCoursePageContainer,
  StyledRegisterButton,
} from './style';

export const CoursePage = ({ courseData }) => {
  const [leaderData, setLeaderData] = useState({});
  const history = useHistory();
  const { courseId } = courseData;
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  useEffect(() => {
    // courseLeader setUp
    async function fetchLeaderData() {
      if (courseData.courseLeader) {
        const leaderId = courseData.courseLeader.id;
        try {
          const leaderData = await firestoreService
            .collection('users')
            .doc(leaderId)
            .get();
          setLeaderData({
            ...leaderData.data(),
            id: courseData.courseLeader.id,
          });
        } catch (error) {
          alert(FAILED_TO_LOAD_DATA);
        }
      }
    }
    fetchLeaderData();
  }, [courseData]);

  return (
    <StyledBackground>
      <NavBar />
      <StyledCoursePageContainer>
        {leaderData && <CourseTop leaderData={leaderData} />}
        {/* 세션 소개 | 커리큘럼 선택버튼 */}
        <CourseBottom courseData={courseData} />
      </StyledCoursePageContainer>
      {courseId && (
        <>
          <StyledAttendanceButton
            className='out-shadow-middle'
            onClick={() => history.push(`/course/${courseId}/attendance`)}>
            <FullWidthButton
              text='출결보기'
              style={{
                height: isMobile ? '48px' : '56px',
                backgroundColor: MAIN_COLOR,
                cursor: 'pointer',
              }}
            />
          </StyledAttendanceButton>
          <StyledRegisterButton className='out-shadow-middle'>
            <CourseApplication
              isMainScreen={false}
              course={courseData}
              courseId={courseId}
            />
          </StyledRegisterButton>
        </>
      )}
    </StyledBackground>
  );
};

CoursePage.propTypes = {
  courseData: PropTypes.object,
};
