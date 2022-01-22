import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import NavBar from '@components/NavBar';

import { firestoreService } from '@/firebase';
import { StyledBackground } from '@utility/COMMON_STYLE';

import CourseCurriculum from './components/CourseCurriculum';
import CourseTop from './components/CourseTop';
import { StyledCoursePageContainer } from './style';

function CoursePage({ courseData }) {
  const location = useLocation();
  const history = useHistory();
  const [selected, setSelected] = useState('introduction');
  const [leaderInfo, setLeaderInfo] = useState({});
  const courseInfo = courseData;

  useEffect(() => {
    // courseLeader setUp
    async function fetchLeaderData() {
      const leaderId = courseData.courseLeader.id;
      try {
        const leaderInfo = await firestoreService
          .collection('users')
          .doc(leaderId)
          .get();

        setLeaderInfo({ ...leaderInfo.data(), id: courseData.courseLeader.id });
      } catch (error) {
        console.error(leaderInfoFetchError);
      }
    }
    fetchLeaderData();
  }, [courseData]);

  return (
    <StyledBackground>
      <NavBar />
      <StyledCoursePageContainer>
        {leaderInfo && <CourseTop leaderInfo={leaderInfo} />}
        <ToggleButton setSelected={setSelected} />
        {/* 세션 소개 | 커리큘럼 선택버튼 */}
        {selected === 'introduction' ? (
          <CourseIntroduction
            name={courseInfo.name}
            introduction={courseInfo.introduction}
            goal={courseInfo.goal}
            date={courseInfo.date}
            maxMemberNum={courseInfo.maxMemberNum}
          />
        ) : (
          <CourseCurriculum curriculum={courseInfo.curriculum} />
        )}
        <Button onClick={() => history.push(`${location.pathname}/attendance`)}>
          {' '}
          출결관리{' '}
        </Button>
      </StyledCoursePageContainer>
    </StyledBackground>
  );
}

function ToggleButton({ setSelected }) {
  return (
    <div>
      <button
        onClick={() => {
          setSelected('introduction');
        }}>
        세션 소개
      </button>
      <button
        onClick={() => {
          setSelected('curriculum');
        }}>
        커리 큘럼
      </button>
    </div>
  );
}

function CourseIntroduction({ name, introduction, goal, date, maxMemberNum }) {
  return (
    <div>
      <h1>{name}</h1>
      <div>세션 소개: {introduction}</div>
      <div>세션 목표: {goal}</div>
      <div>진행 요일: {date}</div>
      <div>참여 인원: {maxMemberNum}</div>
      <div>진행 장소 및 방법</div>
      <div>유의 사항</div>
    </div>
  );
}

// function CourseCurriculum() {
//   return <div></div>;
// }

export default CoursePage;

CoursePage.propTypes = {
  name: PropTypes.string,
  introduction: PropTypes.string,
  goal: PropTypes.string,
  date: PropTypes.string,
  maxMemberNum: PropTypes.number,
  curriculum: PropTypes.array,
  courseData: PropTypes.object,
};

ToggleButton.propTypes = {
  setSelected: PropTypes.func,
};

CourseIntroduction.propTypes = {
  name: PropTypes.string,
  introduction: PropTypes.string,
  goal: PropTypes.string,
  date: PropTypes.string,
  maxMemberNum: PropTypes.number,
};
