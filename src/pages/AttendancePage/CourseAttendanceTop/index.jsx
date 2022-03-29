import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { WhiteShadowButton } from '@components';

import { firestoreService } from '@/firebase';
import { MAIN_COLOR } from '@utility';

import {
  StyledBackButton,
  StyledBackButtonIcon,
  StyledEditButton,
  StyledLeftBox,
  StyledTopBox,
  StyledTopDesc,
  StyledTopTitle,
  StyledWeekBox,
  StyledWeekTextBox,
} from './style';

function CourseAttendanceTop({
  courseName,
  courseId,
  isEditMode,
  courseAttendance,
  courseCheckAdmin,
  toggleEditMode,
}) {
  const user = useSelector(state => state.user.currentUser);
  const history = useHistory();

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const handleClick = async () => {
    toggleEditMode();
    if (isEditMode) {
      // course 정보 update
      await firestoreService
        .collection('courses')
        .doc(courseId)
        .update({ courseAttendance: courseAttendance });
    }
  };

  const renderEditButton = () => {
    // 출석 체크 담당자가 맞는지 확인
    if (courseCheckAdmin && user && courseCheckAdmin.includes(user.uid)) {
      return (
        <StyledEditButton>
          <WhiteShadowButton
            bgColor={isEditMode ? MAIN_COLOR : 'white'}
            text={isEditMode ? '수정완료' : '수정하기'}
            onClick={handleClick}
          />
        </StyledEditButton>
      );
    }
  };

  return (
    <>
      <StyledTopBox>
        <StyledBackButton
          className='out-shadow-weak border-radius-all-half'
          onClick={() => history.goBack()}>
          <StyledBackButtonIcon />
        </StyledBackButton>
        <StyledLeftBox>
          <StyledTopTitle>출결 확인하기</StyledTopTitle>
          <StyledTopDesc>{courseName && courseName}</StyledTopDesc>
        </StyledLeftBox>
        {renderEditButton()}
      </StyledTopBox>
      {!isMobile && (
        <StyledWeekBox>
          <StyledWeekTextBox>1주차</StyledWeekTextBox>
          <StyledWeekTextBox>2주차</StyledWeekTextBox>
          <StyledWeekTextBox>3주차</StyledWeekTextBox>
          <StyledWeekTextBox>4주차</StyledWeekTextBox>
          <StyledWeekTextBox>5주차</StyledWeekTextBox>
          <StyledWeekTextBox>6주차</StyledWeekTextBox>
          <StyledWeekTextBox>7주차</StyledWeekTextBox>
          <StyledWeekTextBox>8주차</StyledWeekTextBox>
        </StyledWeekBox>
      )}
    </>
  );
}

export default CourseAttendanceTop;

CourseAttendanceTop.propTypes = {
  courseName: PropTypes.string,
  courseId: PropTypes.string,
  isEditMode: PropTypes.bool,
  courseAttendance: PropTypes.array,
  courseCheckAdmin: PropTypes.array,
  toggleEditMode: PropTypes.func,
};
