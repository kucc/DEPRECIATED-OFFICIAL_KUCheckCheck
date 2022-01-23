import React from 'react';

import PropTypes from 'prop-types';

import {
  StyledCourseDifficulty,
  StyledCourseLevel,
  StyledGradeText,
  StyledRedText,
} from './style';

const CourseDifficulty = ({ onClick, difficulty, requireTime, style }) => {
  console.log(style);
  return (
    <StyledCourseDifficulty
      className='in-shadow-weak'
      onClick={onClick}
      style={style}>
      <StyledCourseLevel>
        <div>난이도 : &nbsp;</div>
        <StyledRedText>{difficulty}</StyledRedText>
        <div>&nbsp;/</div>
      </StyledCourseLevel>
      <StyledGradeText>{requireTime}학점</StyledGradeText>
    </StyledCourseDifficulty>
  );
};

export default CourseDifficulty;

CourseDifficulty.propTypes = {
  onClick: PropTypes.func,
  difficulty: PropTypes.string,
  requireTime: PropTypes.string,
  style: PropTypes.object,
};
