/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Select } from 'antd';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { ImageContainer } from '@components';

import { firestoreService } from '@/firebase';
import {
  StyledInputNumber,
  StyledTagSelect,
  StyledTextArea,
  renderWord,
} from '@utility';

import {
  StyledInfoContainer,
  StyledInfoDesc,
  StyledInfoDetail,
  StyledInfoStack,
  StyledInfoText,
  StyledInfoTitle,
  StyledStackDetail,
  StyledStackDetailText,
  StyledStackPrimary,
} from './style';

const { Option } = Select;

const CourseInformation = ({ courseData, isEdit, newCourseDataInfo }) => {
  const {
    courseInfo,
    courseGoal,
    courseDate,
    maxMemberNum,
    coursePlace,
    courseNotice,
    courseType,
    courseMember,
    courseCheckAdmin,
    courseStack,
    language,
  } = courseData;

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const [newCourseInfo, setNewCourseInfo] = useState('');
  const [newCourseGoal, setNewCourseGoal] = useState('');
  const [newCourseDate, setNewCourseDate] = useState('');
  const [newMaxMemberNum, setNewMaxMemberNum] = useState(0);
  const [newCoursePlace, setNewCoursePlace] = useState('');
  const [newCourseNotice, setNewCourseNotice] = useState('');
  const [newCourseMember, setNewCourseMember] = useState([]);
  const [newCourseCheckAdmin, setNewCourseCheckAdmin] = useState([]);

  // fetch CourseMember Array
  useEffect(() => {
    //한 user의 정보를 가져옴
    async function fetchUserData(memberId) {
      const userRef = await firestoreService
        .collection('users')
        .doc(memberId)
        .get();
      return userRef.data();
    }
    //member들의 정보를 가져옴
    async function fetchUserArray() {
      let newCourseMemberArr = [];
      await Promise.all(
        courseMember.map(async memberId => {
          const memberInfo = await fetchUserData(memberId);
          newCourseMemberArr.push({
            id: memberId,
            name: memberInfo.name,
            email: memberInfo.email,
          });
        }),
      );
      setNewCourseMember(newCourseMemberArr);
    }
    if (courseMember) {
      fetchUserArray();
    }
  }, [courseMember]);

  // 값 변화시 상위 컴포넌트로 데이터를 보냄
  useEffect(() => {
    newCourseDataInfo({
      courseInfo: newCourseInfo,
      courseGoal: newCourseGoal,
      courseDate: newCourseDate,
      maxMemberNum: newMaxMemberNum,
      coursePlace: newCoursePlace,
      courseNotice: newCourseNotice,
      courseCheckAdmin: newCourseCheckAdmin,
    });
  }, [
    newCourseInfo,
    newCourseGoal,
    newCourseDate,
    newMaxMemberNum,
    newCoursePlace,
    newCourseNotice,
    newCourseCheckAdmin,
  ]);

  // 초기 값 설정
  useEffect(() => {
    if (courseData) {
      setNewCourseInfo(courseInfo);
      setNewCourseGoal(courseGoal);
      setNewCourseDate(courseDate);
      setNewMaxMemberNum(maxMemberNum);
      setNewCoursePlace(coursePlace);
      setNewCourseNotice(courseNotice);
      setNewCourseCheckAdmin(courseCheckAdmin);
    }
  }, [courseData]);

  const onChangeCourseCheckAdmin = value => {
    setNewCourseCheckAdmin(value);
  };

  const renderPrimaryStack = () => (
    <>
      <StyledInfoTitle>주요 기술 스택</StyledInfoTitle>
      <StyledStackPrimary>
        {language?.map((lan, key) => (
          <ImageContainer courseName={lan} key={key} />
        ))}
      </StyledStackPrimary>
    </>
  );

  const renderDetailStack = () => (
    <>
      <StyledInfoTitle style={{ marginTop: isMobile ? '0px' : '50px' }}>
        세부 기술 스택
      </StyledInfoTitle>
      <StyledStackDetail>
        {courseStack?.map((stack, key) => (
          <StyledStackDetailText key={key}>- {stack}</StyledStackDetailText>
        ))}
      </StyledStackDetail>
    </>
  );

  return (
    <StyledInfoContainer isEdit={isEdit}>
      <StyledInfoDetail>
        <StyledInfoText>
          <StyledInfoTitle>{renderWord(courseType)} 소개</StyledInfoTitle>
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
          <StyledInfoTitle>{renderWord(courseType)} 목표</StyledInfoTitle>
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
        {isEdit && (
          <StyledInfoText>
            <StyledInfoTitle>출석체크 담당자 선택</StyledInfoTitle>
            <StyledTagSelect
              mode='tags'
              placeholder='출석체크 담당자를 선택해주세요! (복수 선택 가능)'
              // width={calc(100% - 150px)}
              style={{ width: '100%' }}
              defaultValue={newCourseCheckAdmin}
              onChange={onChangeCourseCheckAdmin}>
              {newCourseMember &&
                newCourseMember.map((member, index) => (
                  <Option
                    key={index}
                    value={
                      member.id
                    }>{`${member.name} (${member.email})`}</Option>
                ))}
            </StyledTagSelect>
          </StyledInfoText>
        )}
      </StyledInfoDetail>
      {!isEdit && (
        <StyledInfoStack>
          {isMobile ? (
            <>
              <StyledInfoText>{renderPrimaryStack()}</StyledInfoText>
              <StyledInfoText>{renderDetailStack()}</StyledInfoText>
            </>
          ) : (
            <>
              {renderPrimaryStack()}
              {renderDetailStack()}
            </>
          )}
        </StyledInfoStack>
      )}
    </StyledInfoContainer>
  );
};

export default CourseInformation;

CourseInformation.propTypes = {
  courseData: PropTypes.object,
  isEdit: PropTypes.bool,
  newCourseDataInfo: PropTypes.func,
};
