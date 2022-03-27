import React, { useEffect, useState } from 'react';

import { Button, Dropdown, Menu, Skeleton } from 'antd';
import { useSelector } from 'react-redux';

import { CourseContainer, EmptyBox } from '@components';

import { firestoreService } from '@/firebase';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { MAIN_COLOR, StyledSelectItem, StyledVerticalLine } from '@utility';

import {
  StyledMainBottomBtnCont,
  StyledMainBottomWrapper,
  StyledMainSessTab,
} from './style';

export const MMainBottomContainer = () => {
  const [courseSelect, setcourseSelect] = useState(0);
  const [courseArray, setcourseArray] = useState([]);
  const [filteredCourseArray, setfilteredCourseArray] = useState([]);
  // current Semester : 현재 무슨 학기인지 => string
  const [currentSemester, setcurrentSemester] = useState('');
  // past Semester : 지난 학기들의 목록 => Array
  const [pastSemester, setpastSemester] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchTerm = useSelector(state => state.search.searchTerm);
  const searchCategory = useSelector(state => state.search.category);
  const { width } = useWindowDimensions();

  // regexp에 포함되는 특수문자를 사용할 경우 발생하는 에러 제거, ex) c++
  const escapeRegExp = searchTerm => {
    return searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  // 다양한 조건에 의한 filter, 1. 검색어, 2. tag(Category, Language), 3. 세션/스터디/프로젝트 분류
  useEffect(() => {
    // course의 id만을 가지는 배열을 복사
    const courseArrayId = courseArray.reduce((acc, course) => {
      acc.push(course.id);
      return acc;
    }, []);

    let searchTermResults = [...courseArrayId];
    let searchCategoryResults = [...courseArrayId];
    let courseToggleResults = [...courseArrayId];

    // 1. 검색에 의한 filter
    if (searchTerm) {
      const regex = new RegExp(escapeRegExp(searchTerm), 'gi');
      searchTermResults = courseArray.reduce((acc, course) => {
        if (
          // courseName 검색
          course.courseName.match(regex) ||
          // courseLeader 검색
          course.courseLeader.name.match(regex) ||
          // courseLanguage 검색
          course.language.find(element => element.match(regex))
        ) {
          acc.push(course.id);
        }
        return acc;
      }, []);
    }
    // 2. Category에 의한 filter
    if (searchCategory) {
      searchCategoryResults = courseArray.reduce((acc, course) => {
        switch (searchCategory) {
          case 'Web':
            if (
              // 두 배열의 공통된 부분을 찾음
              ['Database', 'Html', 'Javascript', 'Node', 'React'].filter(x =>
                course.language.includes(x),
              ).length > 0
            ) {
              acc.push(course.id);
            }
            break;
          case 'App':
            if (
              ['Java', 'Kotlin', 'ReactNative', 'Swift'].filter(x =>
                course.language.includes(x),
              ).length > 0
            ) {
              acc.push(course.id);
            }
            break;
          case '알고리즘':
            if (course.language.includes('Algorithm')) {
              acc.push(course.id);
            }
            break;
          case '머신러닝':
            if (course.language.includes('MachineLearning')) {
              acc.push(course.id);
            }
            break;
          case 'C':
            if (course.language.includes('C')) {
              acc.push(course.id);
            }
            break;
          case 'Python':
            if (course.language.includes('Python')) {
              acc.push(course.id);
            }
            break;
          case 'Javascript':
            if (course.language.includes('Javascript')) {
              acc.push(course.id);
            }
            break;
          case 'Java':
            if (course.language.includes('Java')) {
              acc.push(course.id);
            }
            break;
        }
        return acc;
      }, []);
    }
    // 3. 세션/스터디/프로젝트 분류
    if (courseSelect) {
      // Type 1. 세션
      if (courseSelect === 1) {
        courseToggleResults = courseArray.reduce((acc, course) => {
          if (course.courseType && course.courseType === 1) {
            acc.push(course.id);
          }
          return acc;
        }, []);
        // Type 2. 스터디
      } else if (courseSelect === 2) {
        courseToggleResults = courseArray.reduce((acc, course) => {
          if (course.courseType && course.courseType === 2) {
            acc.push(course.id);
          }
          return acc;
        }, []);
      } else if (courseSelect === 3) {
        courseToggleResults = courseArray.reduce((acc, course) => {
          if (course.courseType && course.courseType === 3) {
            acc.push(course.id);
          }
          return acc;
        }, []);
      }
    }
    // 4가지의 배열 중 겹치는 course만 filter 함.
    const filteredResults = courseArray.reduce((acc, course) => {
      if (
        searchTermResults.indexOf(course.id) > -1 &&
        searchCategoryResults.indexOf(course.id) > -1 &&
        courseToggleResults.indexOf(course.id) > -1
      ) {
        acc.push(course);
      }
      return acc;
    }, []);
    // filterResult에 넣어줌.
    setfilteredCourseArray(filteredResults);
  }, [searchTerm, searchCategory, courseSelect, courseArray]);

  // 학기 정보 불러오기
  useEffect(() => {
    async function fetchSemesterData() {
      const commonInfoData = await firestoreService
        .collection('common')
        .doc('commonInfo')
        .get();
      setcurrentSemester(commonInfoData.data().currentSemester);
      // 배열을 역순으로 저장해줌
      setpastSemester(commonInfoData.data().pastSemester.reverse());
    }
    fetchSemesterData();
  }, []);

  // 학기에 따라서 course 정보 불러오기
  useEffect(() => {
    async function fetchCourseData() {
      try {
        setIsLoading(true);
        let newCourseArray = [];
        const firebaseCourseData = await firestoreService
          .collection('courses')
          .get();
        firebaseCourseData.forEach(doc => {
          if (doc.data().semester === currentSemester) {
            const coursesData = {
              id: doc.id,
              ...doc.data(),
            };
            newCourseArray.push(coursesData);
          }
        });
        setcourseArray(newCourseArray);
        setIsLoading(false);
      } catch (error) {
        alert('error', error);
      }
    }
    fetchCourseData();
  }, [currentSemester]);

  const menu = (
    // 학기를 클릭했을 때 해야할 일
    <Menu>
      {pastSemester &&
        pastSemester.map((semester, key) => {
          return (
            <Menu.Item key={key}>
              <a onClick={() => setcurrentSemester(semester)}>
                {semester} 학기
              </a>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  const renderCourse = () => {
    if (isLoading) return <Skeleton />;
    // if filetring is On
    if (searchTerm || courseSelect !== 0 || searchCategory) {
      if (filteredCourseArray.length === 0) {
        return <EmptyBox />;
      } else {
        return filteredCourseArray.map(course => {
          return (
            <CourseContainer
              key={course.id}
              course={course}
              CourseApplicationState='active'
            />
          );
        });
      }
    } else {
      if (courseArray.length === 0) {
        return <EmptyBox />;
      } else {
        return courseArray.map(course => {
          return (
            <CourseContainer
              key={course.id}
              course={course}
              CourseApplicationState='active'
            />
          );
        });
      }
    }
  };

  return (
    <>
      <StyledMainBottomWrapper>
        <StyledMainBottomBtnCont>
          <Dropdown overlay={menu} placement='bottomLeft'>
            <Button
              type='danger'
              style={{
                fontSize: `10px`,
                height: '40px',
                borderRadius: '25px',
                backgroundColor: MAIN_COLOR,
                borderColor: MAIN_COLOR,
              }}>
              {currentSemester} 학기
            </Button>
          </Dropdown>
          <StyledMainSessTab screenWidth={width}>
            <StyledSelectItem
              className={courseSelect === 0 && 'in-shadow-weak'}
              onClick={() => setcourseSelect(0)}
              screenWidth={width}>
              전체
            </StyledSelectItem>
            <StyledVerticalLine />
            <StyledSelectItem
              className={courseSelect === 1 && 'in-shadow-weak'}
              onClick={() => setcourseSelect(1)}
              screenWidth={width}>
              세션
            </StyledSelectItem>
            <StyledVerticalLine />
            <StyledSelectItem
              className={courseSelect === 2 && 'in-shadow-weak'}
              onClick={() => setcourseSelect(2)}
              screenWidth={width}>
              스터디
            </StyledSelectItem>
            <StyledVerticalLine />
            <StyledSelectItem
              className={courseSelect === 3 && 'in-shadow-weak'}
              onClick={() => setcourseSelect(3)}
              screenWidth={width}>
              프로젝트
            </StyledSelectItem>
          </StyledMainSessTab>
        </StyledMainBottomBtnCont>
        {renderCourse()}
      </StyledMainBottomWrapper>
    </>
  );
};
