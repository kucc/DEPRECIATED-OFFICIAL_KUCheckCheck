import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { CourseDifficulty, WhiteShadowButton } from '@components';

import { authService, firestoreService } from '@/firebase';
import {
  MAIN_COLOR,
  StyledSelectItem,
  StyledVerticalLine,
  renderWord,
} from '@utility';

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
    courseMember,
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
        if (courseMember.length > newCourseDataInfo.maxMemberNum) {
          throw new Error(
            'Error : 현재 인원보다 더 작은 수를 최대 참여 인원으로 정할 수 없습니다.',
          );
        }
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
      alert('수정 완료! 새로고침시 변경사항이 적용됩니다.');
    } catch (error) {
      alert(error.message);
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
              bgColor={isEdit ? MAIN_COLOR : 'white'}
              text={isEdit ? '수정완료' : '수정하기'}
              onClick={() => {
                if (isEdit) {
                  handleSubmit();
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
