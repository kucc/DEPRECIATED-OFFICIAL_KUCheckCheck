import React, { useState } from 'react';

import { Timeline } from 'antd';
import PropTypes from 'prop-types';

import { StyledTextArea } from '@utility';

import { StyledContainer, StyledTimeline } from './style';

function CourseCurriculum({ curriculum, isEdit, newCourseDataCurri }) {
  const [newCurriculum, setNewCurriculum] = useState(curriculum);

  const handleChange = (value, index) => {
    let updateCurriculum = newCurriculum;
    updateCurriculum[index] = value;
    newCourseDataCurri(updateCurriculum);
    setNewCurriculum(updateCurriculum);
  };

  return (
    <StyledContainer>
      <StyledTimeline mode='left'>
        {curriculum.map((el, index) => {
          return (
            <Timeline.Item color='gray' label={`${index + 1}주차`} key={index}>
              {isEdit ? (
                <StyledTextArea
                  defaultValue={el}
                  onChange={e => handleChange(e.target.value, index)}
                  maxLength={200}
                  placeholder='200자 이내'
                />
              ) : (
                el
              )}
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
  newCourseDataCurri: PropTypes.func,
};
