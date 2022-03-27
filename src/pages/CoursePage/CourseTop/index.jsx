import React from 'react';

import PropTypes from 'prop-types';

import { UserCard } from '@components';

import { StyledCourseTopContainer } from './style';

const CourseTop = ({ leaderData }) => {
  return (
    <StyledCourseTopContainer>
      <UserCard
        isDetail={false}
        emoji={leaderData.emoji}
        name={leaderData.name}
        comment={leaderData.comment}
        userId={leaderData.id}
      />
    </StyledCourseTopContainer>
  );
};

export default CourseTop;

CourseTop.propTypes = {
  leaderData: PropTypes.object,
};
