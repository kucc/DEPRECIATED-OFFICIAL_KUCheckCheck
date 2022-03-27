import React, { useState } from 'react';

import { Button, Select, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

import { NavBar } from '@components';

import {
  CHECK_TOP_SESSION_OR_STUDY,
  FORM_IS_NOT_FULL,
  MAIN_COLOR,
  StyledInputNumber,
  StyledLaguageImg,
  StyledSelect,
  StyledSelectItem,
  StyledTagSelect,
  StyledTextArea,
  StyledVerticalLine,
} from '@utility';

import {
  StyledBackground,
  StyledBlackButton,
  StyledBottomContainer,
  StyledCourseRegisterText,
  StyledInputBox,
  StyledRegisterRequireTop,
  StyledRegisterRequireTopLeft,
  StyledRegisterRequireTopRight,
  StyledText,
  StyledTooltipText,
} from './style';

function CourseRegisterBox({ enrollHandler }) {
  //하나의 객체로..?
  const [courseName, setcourseName] = useState('');
  const [courseInfo, setcourseInfo] = useState('');
  const [courseGoal, setcourseGoal] = useState('');
  const [language, setlanguage] = useState([]);
  const [courseStack, setCourseStack] = useState([]);
  const [difficulty, setdifficulty] = useState('');
  const [requireTime, setrequireTime] = useState('');
  const [courseType, setCourseType] = useState(1);
  const [selectedImg, setselectedImg] = useState('Null');
  const [courseDate, setcourseDate] = useState('');
  const [coursePlace, setcoursePlace] = useState('');
  const [courseNotice, setcourseNotice] = useState('');
  const [courseMember, setcourseMember] = useState('');
  const [courseCurriculum, setCourseCurriculum] = useState([]);

  // for antd select option
  const Option = Select.Option;

  const onChangeTitle = event => {
    setcourseName(event.target.value);
  };

  const onChangeIntro = event => {
    setcourseInfo(event.target.value);
  };

  const onChangeGoal = event => {
    setcourseGoal(event.target.value);
  };

  const onChangeLanguage = value => {
    let currentImg;
    if (value.length === 0) {
      currentImg = 'Null';
    } else {
      currentImg = value[value.length - 1];
    }
    setselectedImg(currentImg);
    setlanguage(value);
  };

  const onChangeStack = value => {
    setCourseStack(value);
  };

  const onChangeDifficult = value => {
    setdifficulty(value);
  };

  const onChangeTime = value => {
    setrequireTime(value);
  };

  const onChangeCourseDate = event => {
    setcourseDate(event.target.value);
  };

  const onChangeCourseCurriculum = (value, index) => {
    let updateCurriculum = courseCurriculum;
    updateCurriculum[index] = value;
    setCourseCurriculum(updateCurriculum);
  };

  const onChangePlace = event => {
    setcoursePlace(event.target.value);
  };
  const onChangeNotice = event => {
    setcourseNotice(event.target.value);
  };
  const onChangeMember = value => {
    setcourseMember(value);
  };

  const curriculumArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <StyledBackground>
      <NavBar />
      <StyledCourseRegisterText>등록하기</StyledCourseRegisterText>
      <StyledBottomContainer className='border-radius-all'>
        <div>
          <StyledBlackButton className='border-radius-all'>
            <Tooltip title='필수 정보는 수정이 불가능하니 신중히 입력해주세요!'>
              필수 정보&nbsp;
              <img src='/img/common/moreDetailWhite.svg' />
            </Tooltip>
          </StyledBlackButton>

          <StyledRegisterRequireTop>
            <StyledRegisterRequireTopLeft>
              <StyledText
                style={{
                  margin: '30px',
                }}>
                활동
              </StyledText>
              <StyledSelectItem
                style={{ padding: '10px' }}
                className={courseType === 1 && 'out-shadow-middle'}
                onClick={() => setCourseType(1)}>
                세션
              </StyledSelectItem>
              <StyledVerticalLine />
              <StyledSelectItem
                style={{ padding: '10px' }}
                className={courseType === 2 && 'out-shadow-middle'}
                onClick={() => setCourseType(2)}>
                스터디
              </StyledSelectItem>
              <StyledVerticalLine />
              <StyledSelectItem
                style={{ padding: '10px' }}
                className={courseType === 3 && 'out-shadow-middle'}
                onClick={() => setCourseType(3)}>
                프로젝트
              </StyledSelectItem>
            </StyledRegisterRequireTopLeft>

            <StyledRegisterRequireTopRight>
              <StyledText
                style={{
                  margin: '30px',
                }}>
                난이도 / <br /> 투자 시간
              </StyledText>
              <StyledSelect
                defaultValue='난이도'
                className='out-shadow-middle'
                width={150}
                onChange={onChangeDifficult}>
                <Option value='easy'>초급</Option>
                <Option value='medium'>중급</Option>
                <Option value='hard'>고급</Option>
              </StyledSelect>
              <StyledSelect
                defaultValue='투자 시간'
                onChange={onChangeTime}
                className='out-shadow-middle'
                width={150}>
                <Option value='1'>1학점</Option>
                <Option value='2'>2학점</Option>
                <Option value='3'>3학점</Option>
              </StyledSelect>
            </StyledRegisterRequireTopRight>
          </StyledRegisterRequireTop>
          <StyledInputBox style={{ marginTop: '10px' }}>
            <StyledText style={{ marginTop: '30px' }}>
              사용언어 및 주요기술 스택
            </StyledText>
            <div>
              <StyledLaguageImg src={`/img/icon/${selectedImg}.svg`} />
              <StyledTagSelect
                mode='multiple'
                placeholder='사용 언어를 선택해주세요! (복수 선택 가능). 중요한 순서대로 선택해주세요.'
                // width={calc(100% - 150px)}
                style={{ width: 'calc(100% - 90px)' }}
                // defaultValue='C'
                onChange={onChangeLanguage}>
                <Option value='C'>C</Option>
                <Option value='Cpp'>C++</Option>
                <Option value='Csharp'>C#</Option>
                <Option value='Database'>데이터베이스</Option>
                <Option value='Go'>Go</Option>
                <Option value='Html'>HTML & CSS</Option>
                <Option value='Java'>Java</Option>
                <Option value='Javascript'>Javascript</Option>
                <Option value='Kotlin'>Kotlin</Option>
                <Option value='MachineLearning'>기계 학습</Option>
                <Option value='Node'>Node.js</Option>
                <Option value='Python'>Python</Option>
                <Option value='React'>React.js</Option>
                <Option value='ReactNative'>React Native</Option>
                <Option value='Ruby'>Ruby</Option>
                <Option value='Scala'>Scala</Option>
                <Option value='Swift'>Swift</Option>
                <Option value='Algorithm'>자료구조 & 알고리즘</Option>
                <Option value='Etc'>기타</Option>
              </StyledTagSelect>
            </div>
          </StyledInputBox>
          <StyledInputBox style={{ marginTop: '10px' }}>
            <StyledText style={{ marginTop: '30px' }}>
              <Tooltip title='세부기술 스택에는 주요기술 스택 이외의 더 상세한 기술 스택들을 자유롭게 넣어주시면 됩니다. ex) Git, Typescript, Express, NextJS, Antd, AWS, Pandas, DevOps...'>
                <StyledTooltipText>
                  세부기술 스택&nbsp;
                  <img src='/img/common/moreDetail.svg' />
                </StyledTooltipText>
              </Tooltip>
            </StyledText>
            <StyledTagSelect
              mode='tags'
              placeholder='필요한 세부기술 스택을 입력해주세요. Enter시 입력됩니다.'
              onChange={onChangeStack}>
              <Option value='Git'>Git</Option>
              <Option value='Typescript'>Typescript</Option>
              <Option value='Express'>Express</Option>
              <Option value='NextJS'>NextJS</Option>
              <Option value='Antd'>Antd</Option>
              <Option value='AWS'>AWS</Option>
              <Option value='Pandas'>Pandas</Option>
              <Option value='DevOps'>DevOps</Option>
            </StyledTagSelect>
          </StyledInputBox>
          <StyledInputBox>
            <StyledText style={{ marginTop: '30px' }}>활동 제목</StyledText>
            <StyledTextArea
              allowClear={true}
              maxLength={50}
              onChange={onChangeTitle}
              placeholder='50자 이내'
              autoSize={true}
            />
          </StyledInputBox>
        </div>

        <div>
          <StyledBlackButton className='border-radius-all'>
            세부 정보
          </StyledBlackButton>

          <StyledInputBox style={{ marginTop: '20px' }}>
            <StyledText>활동 소개</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangeIntro}
              placeholder='200자 이내'
              autoSize={{ minRows: 3 }}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>활동 목표</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangeGoal}
              placeholder='200자 이내'
              autoSize={{ minRows: 3 }}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>
              <Tooltip title='형식은 자율롭게 작성해주시면 됩니다. 아직 정해지지 않은 경우 "미정"이라고 작성해주세요. ex) 매주 월 7시~9시'>
                <StyledTooltipText>
                  진행 요일&nbsp;
                  <img src='/img/common/moreDetail.svg' />
                </StyledTooltipText>
              </Tooltip>
            </StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangeCourseDate}
              placeholder='100자 이내'
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>최대 인원</StyledText>
            <StyledInputNumber
              onChange={onChangeMember}
              placeholder='숫자만 적어주세요. ex) 6'
              min={1}
              max={100}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>
              <Tooltip title='만약 동방에서 오프라인으로 진행하실 경우, 등록을 하시고 상세 페이지로 이동하셔서 "수정하기"를 통해 시간표 또한 등록해주세요!'>
                <StyledTooltipText>
                  진행 장소 및 방법
                  <img src='/img/common/moreDetail.svg' />
                </StyledTooltipText>
              </Tooltip>
            </StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangePlace}
              placeholder='200자 이내'
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>유의 사항</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangeNotice}
              placeholder='200자 이내'
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
        </div>

        <div>
          <StyledBlackButton className='border-radius-all'>
            <Tooltip title='이전 세션들의 커리큘럼에 대한 정보는 https://study.kucc.co.kr/ 참고하면 좋을 거 같습니다!'>
              커리큘럼&nbsp;
              <img src='/img/common/moreDetailWhite.svg' />
            </Tooltip>
          </StyledBlackButton>
          {curriculumArray.map((item, index) => (
            <StyledInputBox key={`${index}주차`} style={{ marginTop: '20px' }}>
              <StyledText>{item}주차</StyledText>
              <StyledTextArea
                maxLength={200}
                onChange={event =>
                  onChangeCourseCurriculum(event.target.value, index)
                }
                placeholder='200자 이내'
                autoSize={{ minRows: 2 }}
              />
            </StyledInputBox>
          ))}
        </div>

        <Button
          type='primary'
          shape='round'
          size={'large'}
          style={{
            backgroundColor: MAIN_COLOR,
            border: '0px',
            height: '50px',
          }}
          onClick={async e => {
            e.preventDefault();
            if (
              !courseName ||
              !courseInfo ||
              !courseGoal ||
              language.length === 0 ||
              !difficulty ||
              !requireTime ||
              !courseDate ||
              !coursePlace ||
              !courseNotice ||
              !courseMember ||
              courseCurriculum.length < 8
            ) {
              alert(FORM_IS_NOT_FULL);
            } else if (!courseType) {
              alert(CHECK_TOP_SESSION_OR_STUDY);
            } else {
              const sessionInfo = {
                courseName,
                courseInfo,
                courseGoal,
                language,
                courseStack,
                difficulty,
                requireTime,
                courseType,
                courseDate,
                coursePlace,
                courseNotice,
                courseMember,
                courseCurriculum,
              };
              await enrollHandler(sessionInfo);
            }
          }}>
          등록하기
        </Button>
      </StyledBottomContainer>
    </StyledBackground>
  );
}
export default CourseRegisterBox;

CourseRegisterBox.propTypes = {
  enrollHandler: PropTypes.func.isRequired,
};
