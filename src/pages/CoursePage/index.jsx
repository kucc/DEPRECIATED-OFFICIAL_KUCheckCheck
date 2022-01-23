import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import NavBar from '@components/NavBar';

import { firestoreService } from '@/firebase';
import { StyledBackground } from '@utility/COMMON_STYLE';

import CourseBottom from './components/CourseBottom';
import CourseTop from './components/CourseTop';
import { StyledCoursePageContainer } from './style';

function CoursePage({ courseData }) {
  const [leaderData, setLeaderData] = useState({});

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
    </StyledBackground>
  );
}

export default CoursePage;

CoursePage.propTypes = {
  courseData: PropTypes.object,
};
