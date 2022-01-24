import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { firestoreService } from '@/firebase';
import { StyledInputNumber, StyledTextArea } from '@utility/COMMON_STYLE';

import { StyledInfoDesc, StyledInfoText, StyledInfoTitle } from './style';

const CourseInformation = ({
  courseData,
  isEdit,
  isSubmit,
  isInfoFinished,
}) => {
  const {
    courseInfo,
    courseGoal,
    courseDate,
    maxMemberNum,
    coursePlace,
    courseNotice,
    courseId,
  } = courseData;
  const [newCourseInfo, setNewCourseInfo] = useState('');
  const [newCourseGoal, setNewCourseGoal] = useState('');
  const [newCourseDate, setNewCourseDate] = useState('');
  const [newMaxMemberNum, setNewMaxMemberNum] = useState(0);
  const [newCoursePlace, setNewCoursePlace] = useState('');
  const [newCourseNotice, setNewCourseNotice] = useState('');

  async function updateCourseInfo() {
    try {
      await firestoreService.collection('courses').doc(courseId).update({
        courseInfo: newCourseInfo,
        courseGoal: newCourseGoal,
        courseDate: newCourseDate,
        maxMemberNum: newMaxMemberNum,
        coursePlace: newCoursePlace,
        courseNotice: newCourseNotice,
      });
    } catch (error) {
      alert('Error updating document: ', error);
    }
  }

  useEffect(() => {
    if (isSubmit) {
      updateCourseInfo();
      isInfoFinished(true);
    }
  }, [isSubmit]);

  useEffect(() => {
    if (courseData) {
      setNewCourseInfo(courseInfo);
      setNewCourseGoal(courseGoal);
      setNewCourseDate(courseDate);
      setNewMaxMemberNum(maxMemberNum);
      setNewCoursePlace(coursePlace);
      setNewCourseNotice(courseNotice);
    }
  }, [courseData]);
  return (
    <div>
      <StyledInfoText>
        <StyledInfoTitle>세션 소개</StyledInfoTitle>
        {isEdit ? (
          <StyledTextArea
            defaultValue={courseInfo}
            onChange={e => setNewCourseInfo(e.target.value)}
            maxLength={200}
            placeholder='200자 이내'
          />
        ) : (
          <StyledInfoDesc>{courseInfo}</StyledInfoDesc>
        )}
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>세션 목표</StyledInfoTitle>
        {isEdit ? (
          <StyledTextArea
            defaultValue={courseGoal}
            onChange={e => setNewCourseGoal(e.target.value)}
            maxLength={200}
            placeholder='200자 이내'
          />
        ) : (
          <StyledInfoDesc>{courseGoal}</StyledInfoDesc>
        )}
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>진행 요일</StyledInfoTitle>
        {isEdit ? (
          <StyledTextArea
            defaultValue={courseDate}
            onChange={e => setNewCourseDate(e.target.value)}
            maxLength={200}
            placeholder='200자 이내'
          />
        ) : (
          <StyledInfoDesc>{courseDate}</StyledInfoDesc>
        )}
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>참여 인원</StyledInfoTitle>
        {isEdit ? (
          <StyledInputNumber
            defaultValue={maxMemberNum}
            onChange={value => setNewMaxMemberNum(value)}
            min={1}
            max={100}
            placeholder='숫자만 적어주세요. ex) 6'
          />
        ) : (
          <StyledInfoDesc>최대 {maxMemberNum}명</StyledInfoDesc>
        )}
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>진행 장소 및 방법</StyledInfoTitle>
        {isEdit ? (
          <StyledTextArea
            defaultValue={coursePlace}
            onChange={e => setNewCoursePlace(e.target.value)}
            maxLength={200}
            placeholder='200자 이내'
          />
        ) : (
          <StyledInfoDesc>{coursePlace}</StyledInfoDesc>
        )}
      </StyledInfoText>
      <StyledInfoText>
        <StyledInfoTitle>유의 사항</StyledInfoTitle>
        {isEdit ? (
          <StyledTextArea
            defaultValue={courseNotice}
            onChange={e => setNewCourseNotice(e.target.value)}
            maxLength={200}
            placeholder='200자 이내'
          />
        ) : (
          <StyledInfoDesc>{courseNotice}</StyledInfoDesc>
        )}
      </StyledInfoText>
    </div>
  );
};

export default CourseInformation;

CourseInformation.propTypes = {
  courseData: PropTypes.object,
  isEdit: PropTypes.bool,
  isSubmit: PropTypes.bool,
  isInfoFinished: PropTypes.func,
};
