import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import WhiteShadowButton from '@components/Buttons/WhiteShadowButton';

import { authService } from '@/firebase';
import { StyledSelectItem, StyledVerticalLine } from '@utility/COMMON_STYLE';

import CourseCurriculum from './CourseCurriculum';
import CourseInformation from './CourseInformation';
import CourseTimeTable from './CourseTimeTable';
import {
  StyledBottomBackground,
  StyledSelect,
  StyledSelectContainer,
} from './style';

const CourseBottom = ({ courseData }) => {
  const currentUser = authService.currentUser;
  const [selected, setSelected] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const renderCourseBottom = () => {
    if (selected === 0) {
      return <CourseInformation courseData={courseData} />;
    } else if (selected === 1) {
      return <CourseCurriculum curriculum={courseData.courseCurriculum} />;
    } else {
      return (
        <CourseTimeTable
          courseData={courseData}
          courseId={courseData.courseId}
          timeTableInfo={timeTableInfo => console.log(timeTableInfo)}
        />
      );
    }
  };
  return (
    <div>
      <StyledSelectContainer>
        <StyledSelect>
          <StyledSelectItem
            className={selected === 0 && 'in-shadow-weak'}
            onClick={() => setSelected(0)}>
            세션 소개
          </StyledSelectItem>
          <StyledVerticalLine />
          <StyledSelectItem
            className={selected === 1 && 'in-shadow-weak'}
            onClick={() => setSelected(1)}>
            커리큘럼
          </StyledSelectItem>
          {isEdit && (
            <>
              <StyledVerticalLine />
              <StyledSelectItem
                className={selected === 2 && 'in-shadow-weak'}
                onClick={() => setSelected(2)}>
                시간표 등록
              </StyledSelectItem>
            </>
          )}
        </StyledSelect>
        {currentUser &&
          courseData.courseLeader &&
          currentUser.uid === courseData.courseLeader.id && (
            <WhiteShadowButton
              text='수정하기'
              onClick={() => setIsEdit(prev => !prev)}
            />
          )}
      </StyledSelectContainer>
      <StyledBottomBackground className='border-radius-all'>
        {renderCourseBottom()}
      </StyledBottomBackground>
    </div>
  );
};

export default CourseBottom;

CourseBottom.propTypes = {
  courseData: PropTypes.object,
};
