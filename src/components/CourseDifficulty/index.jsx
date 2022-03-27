import React from 'react';

import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import {
  StyledCourseDifficulty,
  StyledCourseLevel,
  StyledGradeText,
  StyledRedText,
} from './style';

export const CourseDifficulty = ({
  onClick,
  difficulty,
  requireTime,
  style,
  isMainScreen,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <StyledCourseDifficulty
      className='in-shadow-weak'
      onClick={onClick}
      style={style}
      isMainScreen={isMainScreen}
      isMobile={isMobile}>
      <StyledCourseLevel>
        {(isMainScreen || !isMobile) && <div>난이도 :&nbsp;</div>}
        <StyledRedText>{difficulty}</StyledRedText>
        <div>&nbsp;/</div>
      </StyledCourseLevel>
      <StyledGradeText>{requireTime}학점</StyledGradeText>
    </StyledCourseDifficulty>
  );
};

CourseDifficulty.propTypes = {
  onClick: PropTypes.func,
  difficulty: PropTypes.string,
  requireTime: PropTypes.string,
  style: PropTypes.object,
  isMainScreen: PropTypes.bool,
};
