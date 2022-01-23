import React from 'react';

import { Timeline } from 'antd';
import PropTypes from 'prop-types';

import { StyledContainer, StyledTimeline } from './style';

function CourseCurriculum({ curriculum }) {
  return (
    <StyledContainer>
      <StyledTimeline mode='left'>
        {curriculum.map((el, i) => {
          return (
            <Timeline.Item color='gray' label={`${i + 1}주차`} key={i}>
              {el}
            </Timeline.Item>
          );
        })}
      </StyledTimeline>
    </StyledContainer>
  );
}

export default CourseCurriculum;

CourseCurriculum.propTypes = {
  curriculum: PropTypes.array,
};
