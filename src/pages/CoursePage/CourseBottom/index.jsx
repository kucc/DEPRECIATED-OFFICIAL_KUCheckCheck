import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { WhiteShadowButton } from '@components/Buttons';
import CourseDifficulty from '@components/CourseDifficulty';

import { authService, firestoreService } from '@/firebase';
import { renderWord } from '@utility/COMMON_FUNCTION';
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
  const {
    language,
    courseName,
    difficulty,
    requireTime,
    courseId,
    courseType,
  } = courseData;
  const currentUser = authService.currentUser;
  const [selected, setSelected] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [newCourseDataInfo, setNewCourseDataInfo] = useState({});
  const [newCourseDataCurri, setNewCourseDataCurri] = useState([]);
  const [newCourseDataTime, setNewCourseDataTime] = useState({});
  const [newCourseData, setNewCourseData] = useState({});

  // load courseData
  useEffect(() => {
    if (courseData) {
      setNewCourseData(courseData);
    }
  }, [courseData]);

  // 수정 완료를 눌렀을 때
  const handleSubmit = async () => {
    try {
      // update courseData
      if (Object.keys(newCourseDataInfo).length !== 0) {
        await firestoreService
          .collection('courses')
          .doc(courseId)
          .update(newCourseDataInfo);
      }
      if (newCourseDataCurri.length !== 0) {
        await firestoreService
          .collection('courses')
          .doc(courseId)
          .update({ courseCurriculum: newCourseDataCurri });
      }
      // update TimeTable
      if (Object.keys(newCourseDataTime).length !== 0) {
        await firestoreService
          .collection('common')
          .doc('timeTable')
          .update(newCourseDataTime);
      }
    } catch (error) {
      alert('Error updating document: ', error);
    }
    setSelected(0);
    // 새로고침 함수 추가.
  };

  const renderCourseBottom = () => {
    if (selected === 0 && newCourseData) {
      return (
        <CourseInformation
          courseData={newCourseData}
          isEdit={isEdit}
          newCourseDataInfo={data => setNewCourseDataInfo(data)}
        />
      );
    } else if (selected === 1) {
      return (
        <CourseCurriculum
          curriculum={newCourseData.courseCurriculum}
          isEdit={isEdit}
          newCourseDataCurri={data => setNewCourseDataCurri(data)}
        />
      );
    } else {
      return (
        <CourseTimeTable
          courseData={newCourseData}
          courseId={newCourseData.courseId}
          newCourseDataTime={data => setNewCourseDataTime(data)}
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
            {renderWord(courseType)} 소개
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
                  handleSubmit();
                  alert('수정 완료! 새로고침시 변경사항이 적용됩니다.');
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
            isMainScreen={false}
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
