import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { FullWidthButton } from '@components/Buttons';
import { CourseApplication } from '@components/CourseContainer/CourseApplication';
import { NavBar } from '@components/NavBar';

import { firestoreService } from '@/firebase';
import { MAIN_COLOR } from '@utility/COLORS';
import { StyledBackground } from '@utility/COMMON_STYLE';

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
          console.error(leaderDataFetchError);
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
            onClick={() =>
              history.push(`/course/session/${courseId}/attendance`)
            }>
            <FullWidthButton
              text='출결보기'
              style={{
                height: '64px',
                backgroundColor: MAIN_COLOR,
                cursor: 'pointer',
              }}
            />
          </StyledAttendanceButton>
          <StyledRegisterButton className='out-shadow-middle'>
            <CourseApplication course={courseData} courseId={courseId} />
          </StyledRegisterButton>
        </>
      )}
    </StyledBackground>
  );
};

CoursePage.propTypes = {
  courseData: PropTypes.object,
};
