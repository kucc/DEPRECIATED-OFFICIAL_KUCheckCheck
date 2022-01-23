import React from 'react';

import PropTypes from 'prop-types';

import { StyledVerticalLine } from '@utility/COMMON_STYLE';

import {
  StyledCourseInfoImg,
  StyledCourseInfoTitle,
  StyledCourseInfoTop,
} from './style';

const CourseInformation = ({ courseData }) => {
  const { language, courseName } = courseData;
  console.log(courseData);
  return (
    <div>
      <StyledCourseInfoTop>
        {language && (
          <StyledCourseInfoImg src={`/img/icon/${language[0]}.svg`} />
        )}
        <StyledVerticalLine length={70} />
        <StyledCourseInfoTitle>{courseName}</StyledCourseInfoTitle>
      </StyledCourseInfoTop>
    </div>
  );
};

export default CourseInformation;

CourseInformation.propTypes = {
  courseData: PropTypes.object,
};
