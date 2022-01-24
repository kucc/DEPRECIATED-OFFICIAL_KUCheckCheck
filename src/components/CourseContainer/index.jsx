import React, { useState } from 'react';

import { animated, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import CourseDifficulty from '@components/CourseDifficulty';

import { CourseApplication } from './CourseApplication';
import {
  StyledCourseContainer,
  StyledCourseExplain,
  StyledCourseExplainWrapper,
  StyledCourseImgContainer,
  StyledCourseLevel,
  StyledCourseText,
  StyledCourseTitle,
} from './style';

export const CourseContainer = ({ course, CourseApplicationState }) => {
  const history = useHistory();
  // const [onImageHover, setonImageHover] = useState(false);
  const [onCourseHover, setOnCourseHover] = useState(false);
  const toggleHover = () => setOnCourseHover(prev => !prev);
  const [{ x }, set] = useSpring(() => ({
    x: 0,
    // config: { duration: 180 }
  }));

  const renderCouresImage = () =>
    // 이미지 최대 3개까지 표시
    // styled component의 prop에 key를 넣으면 인식을 못하여
    // 불가피하게 jsx의 style 사용
    course.language.slice(0, 3).map((image, key) => {
      // 첫 번째 이미지를 hover 했을 때 이미지가 펼쳐짐.
      if (key === 0) {
        return (
          <img
            onMouseEnter={() => set({ x: 1 })}
            onMouseLeave={() => set({ x: 0 })}
            // onMouseEnter={() => setonImageHover(true)}
            // onMouseLeave={() => setonImageHover(false)}
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '60px',
              zIndex: 3,
              cursor: 'pointer',
            }}
            key={key}
            src={`/img/icon/${image}.svg`}
            onClick={() => history.push(`/course/${course.id}`)}
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
              zIndex: 3 - key,
              left: x.to([0, 1], [45 + 20 * key, 45 + key * 70]),
              // left: onImageHover ? 45 + key * 70 : 45 + key * 20,
              // transition: 'all .2s ease',
            }}
            key={key}
            src={`/img/icon/${image}.svg`}
          />
        );
      }
    });

  const renderCourseLeader = () => {
    if (course.courseType === 1) {
      return <p>{course.courseLeader.name} 세션장</p>;
    } else if (course.courseType === 2) {
      return <p>{course.courseLeader.name} 스터디장</p>;
    } else if (course.courseType === 3) {
      return <p>{course.courseLeader.name} 프로젝트장</p>;
    }
  };

  return (
    <>
      {/*  */}
      <StyledCourseContainer
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={{ paddingBottom: onCourseHover ? '10px' : '0px' }}
        className={
          onCourseHover
            ? 'out-shadow-strong border-radius-all'
            : 'out-shadow-middle border-radius-all'
        }>
        <StyledCourseImgContainer>
          {renderCouresImage()}
        </StyledCourseImgContainer>
        <StyledCourseExplainWrapper
          style={{
            display: 'grid',
            gridTemplateColumns: CourseApplicationState
              ? 'auto 250px 150px 30px'
              : 'auto 250px',
            marginTop: '25px',
          }}>
          <StyledCourseText
            onClick={() => history.push(`/course/${course.id}`)}>
            <StyledCourseTitle>
              <div>
                {course.courseName.length < 18
                  ? course.courseName
                  : course.courseName.slice(0, 18) + '...'}
              </div>
            </StyledCourseTitle>
            <StyledCourseExplain>{renderCourseLeader()}</StyledCourseExplain>
          </StyledCourseText>
          <CourseDifficulty
            onClick={() => history.push(`/course/${course.id}`)}
            difficulty={course.difficulty}
            requireTime={course.requireTime}
            style={{ marginTop: '0px' }}
          />
          {CourseApplicationState && (
            <CourseApplication courseId={course.id} course={course} />
          )}
        </StyledCourseExplainWrapper>
      </StyledCourseContainer>
    </>
  );
};

CourseContainer.propTypes = {
  course: PropTypes.object.isRequired,
  CourseApplicationState: PropTypes.bool,
};
