import React from 'react';

import PropTypes from 'prop-types';
import { AiOutlineLeft } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import WhiteShadowButton from '@components/Buttons/WhiteShadowButton';
import NavBar from '@components/NavBar';

import { firestoreService } from '@/firebase';

import {
  StyledBackButton,
  StyledBackground,
  StyledEditButton,
  StyledLeftBox,
  StyledTopBox,
  StyledTopContainer,
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
}) {
  const user = useSelector(state => state.user.currentUser);
  const location = useLocation();
  const history = useHistory();

  const handleClick = async () => {
    if (isEditMode) {
      // course 정보 update
      await firestoreService
        .collection('courses')
        .doc(courseId)
        .update({ courseAttendance: courseAttendance });
      history.goBack();
    } else {
      history.push({
        pathname: `${location.pathname}/edit`,
      });
    }
  };

  const renderEditButton = () => {
    // 출석 체크 담당자가 맞는지 확인
    if (courseCheckAdmin && user && courseCheckAdmin.includes(user.uid)) {
      return (
        <StyledEditButton>
          <WhiteShadowButton
            type={isEditMode ? 'danger' : ''}
            text={isEditMode ? '수정완료' : '수정하기'}
            onClick={handleClick}
          />
        </StyledEditButton>
      );
    }
  };

  return (
    <StyledBackground>
      <NavBar />
      <StyledTopContainer>
        <StyledTopBox>
          <StyledBackButton onClick={() => history.goBack()}>
            <AiOutlineLeft style={{ strokeWidth: '50', fontSize: '20px' }} />
          </StyledBackButton>
          <StyledLeftBox>
            <div>
              <StyledTopTitle>출결 확인하기</StyledTopTitle>
              <StyledTopDesc>{courseName && courseName}</StyledTopDesc>
            </div>
            {renderEditButton()}
          </StyledLeftBox>
        </StyledTopBox>
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
      </StyledTopContainer>
    </StyledBackground>
  );
}

export default CourseAttendanceTop;

CourseAttendanceTop.propTypes = {
  courseName: PropTypes.string,
  courseId: PropTypes.string,
  isEditMode: PropTypes.bool,
  courseAttendance: PropTypes.array,
  courseCheckAdmin: PropTypes.array,
};
