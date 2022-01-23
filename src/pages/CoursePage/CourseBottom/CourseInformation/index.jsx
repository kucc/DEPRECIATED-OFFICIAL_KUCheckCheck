import React from 'react';

import PropTypes from 'prop-types';

import { StyledInfoDesc, StyledInfoText, StyledInfoTitle } from './style';

const CourseInformation = ({ courseData }) => {
  const {
    courseInfo,
    courseGoal,
    courseDate,
    coursePlace,
    courseNotice,
    maxMemberNum,
  } = courseData;
  console.log(courseData);
  return (
    <div>
      <StyledInfoText>
        <StyledInfoTitle>세션 소개</StyledInfoTitle>
        <StyledInfoDesc>{courseInfo}</StyledInfoDesc>
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>세션 목표</StyledInfoTitle>
        <StyledInfoDesc>{courseGoal}</StyledInfoDesc>
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>진행 요일</StyledInfoTitle>
        <StyledInfoDesc>{courseDate}</StyledInfoDesc>
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>참여 인원</StyledInfoTitle>
        <StyledInfoDesc>최대 {maxMemberNum}명</StyledInfoDesc>
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>진행 장소 및 방법</StyledInfoTitle>
        <StyledInfoDesc>{coursePlace}</StyledInfoDesc>
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>유의 사항</StyledInfoTitle>
        <StyledInfoDesc>{courseNotice}</StyledInfoDesc>
      </StyledInfoText>
    </div>
  );
};

export default CourseInformation;

CourseInformation.propTypes = {
  courseData: PropTypes.object,
};
