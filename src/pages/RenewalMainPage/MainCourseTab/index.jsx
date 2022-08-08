import React, { useEffect, useState } from 'react';

import cx from 'classnames';

import { RenewalMainCourse } from '@components/RenewalMainCourse';

import { firestoreService } from '@/firebase';

import {
  StyledCourseContainer,
  StyledCourseTab,
  StyledTab,
  StyledTabText,
} from './style';

export const MainCourseTab = () => {
  const [courseTab, setCourseTab] = useState(0);
  // course 데이터 array
  const [courseData, setCourseData] = useState([]);
  // current Semester : 현재 무슨 학기인지 => string
  const [currentSemester, setCurrentSemester] = useState('');
  // past Semester : 지난 학기들의 목록 => Array
  const [pastSemester, setPastSemester] = useState([]);
  // registerTerm : course 등록 기간 => Array [startDate, endDate]
  const [registerTerm, setRegisterTerm] = useState([]);

  // 학기 정보 불러오기
  useEffect(() => {
    async function fetchSemesterData() {
      await firestoreService
        .collection('common')
        .doc('commonInfo')
        .get()
        .then(response => {
          const responseData = response.data();

          setCurrentSemester(responseData.currentSemester);
          setPastSemester(responseData.pastSemester.reverse());

          let registerTermArray = [];
          registerTermArray.push(responseData.registerTerm.start.toDate());
          registerTermArray.push(responseData.registerTerm.end.toDate());
          setRegisterTerm(registerTermArray);
        })
        .catch(error => {
          console.error(error);
        });
    }

    fetchSemesterData();
  }, []);

  // 학기에 맞춰 코스 불러오기
  useEffect(() => {
    async function fetchCourseData() {
      await firestoreService
        .collection('courses')
        .where('semester', '==', currentSemester)
        .get()
        .then(response => {
          let courseArray = [];

          response.forEach(doc => {
            const courseData = {
              id: doc.id,
              ...doc.data(),
            };

            courseArray.push(courseData);
          });

          setCourseData(courseArray);
        })
        .catch(error => {
          console.error(error);
        });
    }

    fetchCourseData();
  }, [currentSemester]);

  return (
    <StyledCourseContainer>
      <StyledCourseTab>
        <StyledTab onClick={() => setCourseTab(0)}>
          <StyledTabText className={cx({ active: courseTab === 0 })}>
            전체
          </StyledTabText>
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(1)}>
          <StyledTabText className={cx({ active: courseTab === 1 })}>
            세션
          </StyledTabText>
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(2)}>
          <StyledTabText className={cx({ active: courseTab === 2 })}>
            스터디
          </StyledTabText>
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(3)}>
          <StyledTabText className={cx({ active: courseTab === 3 })}>
            프로젝트
          </StyledTabText>
        </StyledTab>
      </StyledCourseTab>
      {courseData.map(res => {
        if (courseTab === 0)
          return <RenewalMainCourse course={res} key={res.id} />;
        else if (courseTab === res.courseType)
          return <RenewalMainCourse course={res} key={res.id} />;
      })}
    </StyledCourseContainer>
  );
};
