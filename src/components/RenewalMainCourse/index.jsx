import React from 'react';

import PropTypes from 'prop-types';

import {
  StyledCaseSlash,
  StyledCourseBottom,
  StyledCourseButton,
  StyledCourseCase,
  StyledCourseCaseValue,
  StyledCourseLanguageImage,
  StyledCourseTitle,
  StyledCourseTop,
  StyledEmoji,
  StyledEmojiBackground,
  StyledLeader,
  StyledLeaderName,
  StyledLeaderType,
  StyledMainCourseContainer,
} from './style';

export const RenewalMainCourse = ({ course }) => {
  return (
    <StyledMainCourseContainer>
      <StyledLeader>
        <StyledEmojiBackground>
          <StyledEmoji>🧑‍🎤</StyledEmoji>
        </StyledEmojiBackground>
        <StyledLeaderName>
          {course.courseLeader.name} <StyledLeaderType>팀장</StyledLeaderType>
        </StyledLeaderName>
      </StyledLeader>
      <div>
        <StyledCourseTop>
          <StyledCourseTitle isEllipsis={course.courseName.length > 14}>
            {course.courseName}
          </StyledCourseTitle>
          {course.language.slice(0, 3).map((res, index) => {
            return (
              <StyledCourseLanguageImage
                key={index}
                src={`/img/icon/${res}.svg`}
                alt='언어 이미지'
              />
            );
          })}
        </StyledCourseTop>
        <StyledCourseBottom>
          <StyledCourseCase>
            난이도 :&nbsp;
            <StyledCourseCaseValue>{course.difficulty}</StyledCourseCaseValue>
          </StyledCourseCase>
          <StyledCaseSlash>/</StyledCaseSlash>
          <StyledCourseCase>
            투자시간 :&nbsp;
            <StyledCourseCaseValue>
              {course.requireTime}학점
            </StyledCourseCaseValue>
          </StyledCourseCase>
        </StyledCourseBottom>
      </div>
      <StyledCourseButton>신청하기 1/5</StyledCourseButton>
    </StyledMainCourseContainer>
  );
};

RenewalMainCourse.propTypes = {
  course: PropTypes.object.isRequired,
};
