import React from 'react';

import { Timeline } from 'antd';

import { StyledContainer } from './style';

function CourseCurriculum({ curriculum }) {
  return (
    <StyledContainer>
      <Timeline mode='left'>
        {curriculum.map((el, i) => {
          return (
            <Timeline.Item color='gray' label={`${i + 1}주차`} key={i}>
              {el}
            </Timeline.Item>
          );
        })}
      </Timeline>
    </StyledContainer>
  );
}

export default CourseCurriculum;
