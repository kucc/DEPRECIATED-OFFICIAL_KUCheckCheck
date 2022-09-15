import React from 'react';

import PropTypes from 'prop-types';

import { StyledCommonTitle } from '@utility/COMMON_STYLE';

export const RenewalCourseDetailPage = props => {
  const courseId = props.match.params.id;
  
  console.log(courseId);
  return (
    <div>
      <StyledCommonTitle>세션 소개</StyledCommonTitle>
      <span> 부탁해요 </span>
    </div>
  );
};

RenewalCourseDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
