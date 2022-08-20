import React, { useEffect, useState } from 'react';

import cx from 'classnames';
import { useSelector } from 'react-redux';

import { RenewalEmptyBox } from '@components/RenewalEmptyBox';
import { RenewalMainCourse } from '@components/RenewalMainCourse';

import {
  StyledCourseContainer,
  StyledCourseTab,
  StyledTab,
  StyledTabText,
} from './style';

export const MainCourseTab = () => {
  const mainCourseData = useSelector(state => state.course.mainCourse.data);
  const searchTerm = useSelector(state => state.search.searchTerm); // 검색어
  const searchCategory = useSelector(state => state.search.category); // 사용 언어

  const [courseTab, setCourseTab] = useState(0);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    let searchArray = mainCourseData;
    if (searchTerm) {
      const regex = new RegExp(searchTerm, 'gi');

      searchArray = mainCourseData.filter(
        res =>
          res.courseName.match(regex) || res.courseLeader.name.match(regex),
      );
    }
    if (searchCategory) {
      const regex = new RegExp(searchCategory, 'gi');

      searchArray = mainCourseData.filter(res =>
        res.language.find(element => element.match(regex)),
      );
    }

    setCourseList(searchArray);
  }, [mainCourseData, searchTerm, searchCategory]);

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
      {courseList.length === 0 && <RenewalEmptyBox />}
      {courseList.length > 0 &&
        courseList.map(res => {
          if (courseTab === 0)
            return <RenewalMainCourse course={res} key={res.id} />;
          else if (courseTab === res.courseType)
            return <RenewalMainCourse course={res} key={res.id} />;
        })}
    </StyledCourseContainer>
  );
};
