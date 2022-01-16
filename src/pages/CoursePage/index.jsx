import React, { useEffect } from 'react';
import { useState } from 'react';

import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import NavBar from '@components/NavBar';

import { firestoreService } from '@/firebase';

import CourseCurriculum from './components/CourseCurriculum';

function CoursePage() {
  const location = useLocation();
  const history = useHistory();

  const [selected, setSelected] = useState('introduction');
  const [leaderInfo, setLeaderInfo] = useState({ name: '', detailComment: '' });
  const [courseInfo, setCourseInfo] = useState({
    name: '',
    introduction: '',
    goal: '',
    date: '',
    maxMemberNum: '',
    curriculum: [],
  });

  useEffect(() => {
    const courseId = location.pathname.split('/').at(-1);

    firestoreService
      .collection('courses')
      .doc(courseId)
      .get()
      .then(courseDoc => {
        const {
          courseName,
          courseInfo,
          courseGoal,
          courseDate,
          maxMemberNum,
          courseLeader,
          courseCurriculum,
        } = courseDoc.data();

        setCourseInfo({
          name: courseName,
          introduction: courseInfo,
          goal: courseGoal,
          date: courseDate,
          maxMemberNum: maxMemberNum,
          curriculum: courseCurriculum,
        });

        // 코스 리더에 대한 정보 불러오기
        const leaderId = courseLeader.id;
        firestoreService
          .collection('users')
          .doc(leaderId)
          .get()
          .then(userDoc => {
            const { name, detailComment } = userDoc.data();
            setLeaderInfo({ name, detailComment });
          })
          .catch(leaderInfoFetchError => {
            console.error(leaderInfoFetchError);
          });
      })
      .catch(courseInfoFetchError => {
        console.error(courseInfoFetchError);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <CourseLeaderBox
        name={leaderInfo.name}
        detailComment={leaderInfo.detailComment}
      />
      {console.log(selected, courseInfo)}
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
    </div>
  );
}

function CourseLeaderBox({ name, detailComment }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{detailComment}</h2>
    </div>
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
};

CourseLeaderBox.propTypes = {
  name: PropTypes.string,
  detailComment: PropTypes.string,
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
