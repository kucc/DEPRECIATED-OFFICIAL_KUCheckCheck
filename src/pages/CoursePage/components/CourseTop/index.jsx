import React from 'react';

import PropTypes from 'prop-types';

import UserCard from '@components/UserCard';

import { StyledCourseTopContainer } from './style';

const CourseTop = ({ leaderInfo }) => {
  return (
    <StyledCourseTopContainer>
      <UserCard
        isDetail={false}
        emoji={leaderInfo.emoji}
        name={leaderInfo.name}
        comment={leaderInfo.comment}
        userId={leaderInfo.id}
      />
    </StyledCourseTopContainer>
  );
};

export default CourseTop;

CourseTop.propTypes = {
  leaderInfo: PropTypes.object,
};
