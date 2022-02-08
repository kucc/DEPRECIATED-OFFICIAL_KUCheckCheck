import React, { useState } from 'react';

import { Controller, animated, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import { AiOutlineRight } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router';

import CourseDifficulty from '@components/CourseDifficulty';

import useWindowDimensions from '@hooks/useWindowDimensions';

import { CourseApplication } from './CourseApplication';
import {
  StyledCourseContainer,
  StyledCourseExplain,
  StyledCourseExplainWrapper,
  StyledCourseImgContainer,
  StyledCourseText,
  StyledCourseTitle,
} from './style';

export const CourseContainer = ({ course, CourseApplicationState }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const { width } = useWindowDimensions();

  const history = useHistory();
  const [onCourseHover, setOnCourseHover] = useState(false);
  const [isCourseSpread, setIsCourseSpread] = useState(false);
  const toggleHover = () => setOnCourseHover(prev => !prev);
  const [{ x }, set] = useSpring(() => ({
    x: 0,
  }));

  const rotateProps = useSpring({
    rotateZ: isCourseSpread ? 90 : 0,
  });

  const marginTopProps = useSpring({
    marginTop: isCourseSpread ? -50 : -100,
  });

  const marginBottomProps = useSpring({
    marginBottom: isCourseSpread ? 30 : 10,
  });

  const handleOnClick = () => {
    if (isMobile) {
      setIsCourseSpread(prev => !prev);
    } else {
      history.push(`/course/${course.id}`);
    }
  };

  const renderCouresImage = () => {
    // 이미지 최대 3개까지 표시
    // styled component의 prop에 key를 넣으면 인식을 못하여
    // 불가피하게 jsx의 style 사용
    const num = isMobile ? 1 : 3;
    return course.language.slice(0, num).map((image, key) => {
      // 첫 번째 이미지를 hover 했을 때 이미지가 펼쳐짐.
      if (key === 0) {
        return (
          <img
            onMouseEnter={() => set({ x: 1 })}
            onMouseLeave={() => set({ x: 0 })}
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '60px',
              zIndex: 100,
              cursor: 'pointer',
            }}
            key={key}
            src={`/img/icon/${image}.svg`}
            onClick={handleOnClick}
          />
        );
      } else {
        return (
          <animated.img
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '60px',
              zIndex: 100 - key,
              left: x.to([0, 1], [45 + 20 * key, 45 + key * 70]),
            }}
            key={key}
            src={`/img/icon/${image}.svg`}
          />
        );
      }
    });
  };

  const renderCourseLeader = () => {
    if (course.courseType === 1) {
      return <p>{course.courseLeader.name} 세션장</p>;
    } else if (course.courseType === 2) {
      return <p>{course.courseLeader.name} 스터디장</p>;
    } else if (course.courseType === 3) {
      return <p>{course.courseLeader.name} 프로젝트장</p>;
    }
  };

  // const courseClassName = () => {
  //   if (isCourseSpread) return 'border-radius-all';
  //   else if (onCourseHover) return 'out-shadow-strong border-radius-all';
  //   else return 'out-shadow-middle border-radius-all';
  // };

  return (
    <animated.div
      className={
        onCourseHover
          ? 'out-shadow-strong border-radius-all'
          : 'out-shadow-middle border-radius-all'
      }
      style={{ position: 'relative', ...marginBottomProps }}>
      <StyledCourseContainer
        screenWidth={width}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={{
          position: 'relative',
          paddingBottom: onCourseHover ? '10px' : '0px',
          zIndex: 5,
        }}
        className='border-radius-all'>
        <StyledCourseImgContainer>
          {renderCouresImage()}
        </StyledCourseImgContainer>
        <StyledCourseExplainWrapper
          isMobile={isMobile}
          CourseApplicationState={CourseApplicationState}>
          <StyledCourseText onClick={handleOnClick}>
            <StyledCourseTitle>
              <div>
                {/* courseTitle이 너무 길면 18자까지만 출력 */}
                {course.courseName.length < 18
                  ? course.courseName
                  : course.courseName.slice(0, 18) + '...'}
              </div>
            </StyledCourseTitle>
            <StyledCourseExplain>{renderCourseLeader()}</StyledCourseExplain>
          </StyledCourseText>
          {isMobile && CourseApplicationState && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '5px',
              }}>
              <animated.div
                style={{
                  height: 20,
                  width: 20,
                  ...rotateProps,
                }}>
                <AiOutlineRight size={20} />
              </animated.div>
            </div>
          )}
          {!isMobile && (
            <>
              <CourseDifficulty
                onClick={handleOnClick}
                difficulty={course.difficulty}
                requireTime={course.requireTime}
                style={{ marginTop: '0px' }}
              />
              {CourseApplicationState && (
                <CourseApplication courseId={course.id} course={course} />
              )}
            </>
          )}
        </StyledCourseExplainWrapper>
      </StyledCourseContainer>
      {isMobile && CourseApplicationState && (
        <animated.div
          style={{
            display: 'flex',
            width: '100%',
            position: 'relative',
            zIndex: 0,
            ...marginTopProps,
          }}>
          <CourseDifficulty
            onClick={handleOnClick}
            difficulty={course.difficulty}
            requireTime={course.requireTime}
            style={{ marginTop: '0px' }}
          />
          <CourseApplication courseId={course.id} course={course} />
        </animated.div>
      )}
    </animated.div>
  );
};

CourseContainer.propTypes = {
  course: PropTypes.object.isRequired,
  CourseApplicationState: PropTypes.bool,
};
