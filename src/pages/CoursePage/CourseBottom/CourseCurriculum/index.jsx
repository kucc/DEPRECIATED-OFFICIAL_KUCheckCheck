import React, { useEffect } from 'react';

import { Timeline } from 'antd';
import PropTypes from 'prop-types';

import { StyledContainer, StyledTimeline } from './style';

function CourseCurriculum({ curriculum, isEdit, isSubmit, isCurriFinished }) {
  async function updateCourseCurri() {
    try {
      // asdsa
    } catch (error) {
      // alert('Error updating document: ', error);
    }
  }

  useEffect(() => {
    if (isSubmit) {
      updateCourseCurri();
      isCurriFinished(true);
    }
  }, [isSubmit]);

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
  isEdit: PropTypes.bool,
  isSubmit: PropTypes.bool,
  isCurriFinished: PropTypes.func,
};
