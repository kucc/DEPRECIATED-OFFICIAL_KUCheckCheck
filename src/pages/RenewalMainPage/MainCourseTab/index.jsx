import React, { useEffect, useState } from 'react';

import cx from 'classnames';
import { useSelector } from 'react-redux';

import { RenewalMainCourse } from '@components/RenewalMainCourse';

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

  const { status: mainCourseStatus, data: mainCourseData } = useSelector(
    state => ({
      status: state.course.mainCourse.status,
      data: state.course.mainCourse.data,
    }),
  );

  console.log(mainCourseStatus, mainCourseData);

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
      {mainCourseData.length > 0 &&
        mainCourseData.map(res => {
          if (courseTab === 0)
            return <RenewalMainCourse course={res} key={res.id} />;
          else if (courseTab === res.courseType)
            return <RenewalMainCourse course={res} key={res.id} />;
        })}
    </StyledCourseContainer>
  );
};
