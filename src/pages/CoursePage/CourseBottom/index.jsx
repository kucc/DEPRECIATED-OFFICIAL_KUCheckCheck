import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { WhiteShadowButton } from '@components/Buttons';
import CourseDifficulty from '@components/CourseDifficulty';

import { authService } from '@/firebase';
import { FAILED_TO_LOAD_DATA } from '@utility/ALERT_MESSAGE';
import { StyledSelectItem, StyledVerticalLine } from '@utility/COMMON_STYLE';

import CourseCurriculum from './CourseCurriculum';
import CourseInformation from './CourseInformation';
import CourseTimeTable from './CourseTimeTable';
import {
  StyledBottomBackground,
  StyledCourseHeaderImg,
  StyledCourseHeaderTitle,
  StyledCourseHeaderTop,
  StyledSelect,
  StyledSelectContainer,
} from './style';

const CourseBottom = ({ courseData }) => {
  const { language, courseName, difficulty, requireTime, courseId } =
    courseData;
  const currentUser = authService.currentUser;
  const [selected, setSelected] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isInfoFinished, setIsInfoFinished] = useState(false);
  const [isCurriFinished, setIsCurriFinished] = useState(false);
  const [isTimeFinished, setIsTimeFinished] = useState(false);

  console.log(isInfoFinished, isCurriFinished, isTimeFinished);

  // 새로고침 함수
  useEffect(() => {
    if (isInfoFinished && isCurriFinished && isTimeFinished) {
      window.location.replace(`/course/session/${courseId}`);
    }
  }, [isInfoFinished, isCurriFinished, isTimeFinished]);

  const renderCourseBottom = () => {
    if (selected === 0) {
      return (
        <CourseInformation
          courseData={courseData}
          isEdit={isEdit}
          isSubmit={isSubmit}
          isInfoFinished={data => setIsInfoFinished(data)}
        />
      );
    } else if (selected === 1) {
      return (
        <CourseCurriculum
          curriculum={courseData.courseCurriculum}
          isEdit={isEdit}
          isSubmit={isSubmit}
          isCurriFinished={data => setIsCurriFinished(data)}
        />
      );
    } else {
      return (
        <CourseTimeTable
          courseData={courseData}
          courseId={courseData.courseId}
          isSubmit={isSubmit}
          isTimeFinished={data => console.log(data)}
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
              type={isEdit ? 'danger' : 'default'}
              text={isEdit ? '수정완료' : '수정하기'}
              onClick={() => {
                if (isEdit) {
                  setIsSubmit(true);
                  setSelected(0);
                } else {
                  setIsSubmit(false);
                }
                setIsEdit(prev => !prev);
              }}
            />
          )}
      </StyledSelectContainer>
      <StyledBottomBackground className='border-radius-all'>
        <StyledCourseHeaderTop>
          {language && (
            <StyledCourseHeaderImg src={`/img/icon/${language[0]}.svg`} />
          )}
          <StyledVerticalLine length={70} />
          <StyledCourseHeaderTitle>{courseName}</StyledCourseHeaderTitle>
          <CourseDifficulty
            difficulty={difficulty}
            requireTime={requireTime}
            style={{ marginTop: '0px', cursor: 'auto' }}
          />
        </StyledCourseHeaderTop>
        {renderCourseBottom()}
      </StyledBottomBackground>
    </div>
  );
};

export default CourseBottom;

CourseBottom.propTypes = {
  courseData: PropTypes.object,
};
