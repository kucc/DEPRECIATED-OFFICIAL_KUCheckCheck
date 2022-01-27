import React, { useState } from 'react';

import { Button, Select } from 'antd';
import 'antd/dist/antd.css';
import { Option } from 'antd/lib/mentions';
import PropTypes from 'prop-types';

import { NavBar } from '@components';

import {
  CHECK_TOP_SESSION_OR_STUDY,
  FORM_IS_NOT_FULL,
} from '@utility/ALERT_MESSAGE';
import {
  StyledInputNumber,
  StyledSelect,
  StyledSelectItem,
  StyledTagSelect,
  StyledTextArea,
  StyledVerticalLine,
} from '@utility/COMMON_STYLE';

import {
  StyledBackground,
  StyledBlackButton,
  StyledBottomContainer,
  StyledCourseRegisterText,
  StyledInputBox,
  StyledLaguageImg,
  StyledRegisterRequireTop,
  StyledRegisterRequireTopLeft,
  StyledRegisterRequireTopRight,
  StyledText,
} from '../style';

function CourseRegisterBox({ enrollHandler }) {
  //하나의 객체로..?
  const [courseName, setcourseName] = useState('');
  const [courseInfo, setcourseInfo] = useState('');
  const [courseGoal, setcourseGoal] = useState('');
  const [language, setlanguage] = useState(['']);
  const [difficulty, setdifficulty] = useState('');
  const [requireTime, setrequireTime] = useState('');
  const [courseType, setCourseType] = useState(1);
  const [selectedImg, setselectedImg] = useState('Etc');
  const [courseDate, setcourseDate] = useState('');
  const [coursePlace, setcoursePlace] = useState('');
  const [courseNotice, setcourseNotice] = useState('');
  const [courseMember, setcourseMember] = useState('');
  const [courseCurriculum, setCourseCurriculum] = useState([]);

  console.log(language);

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
    console.log(courseCurriculum);
    setCourseCurriculum(updateCurriculum);
  };

  const onChangePlace = event => {
    setcoursePlace(event.target.value);
  };
  const onChangeNotice = event => {
    setcourseNotice(event.target.value);
  };
  const onChangeMember = value => {
    // antd의 input number로 유효성 검사 완료.
    setcourseMember(value);
  };

  const curriculumArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <StyledBackground>
      <NavBar />
      <StyledCourseRegisterText>등록하기</StyledCourseRegisterText>
      <StyledBottomContainer className='border-radius-all'>
        <div>
          <StyledBlackButton
            // width='500px'
            className='border-radius-all'>
            필수 정보
            {/* ( 필수 정보는 수정이 불가하니 신중히 입력해주세요! ) */}
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
            <StyledText style={{ marginTop: '30px' }}>사용언어</StyledText>
            <div>
              <StyledLaguageImg src={`/img/icon/${selectedImg}.svg`} />
              <StyledTagSelect
                mode='tags'
                placeholder='사용 언어를 선택해주세요! (복수 선택 가능). 중요한 순서대로 선택해주세요.'
                // width={calc(100% - 150px)}
                style={{ width: 'calc(100% - 90px)' }}
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
            <StyledText>진행 요일</StyledText>
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
            <StyledText>진행 장소 및 방법</StyledText>
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
            커리큘럼
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
            backgroundColor: 'red',
            border: '0px',
            width: 'rgba(195,33,31)',
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
