import { AuthInputWithLabel as Input, AuthTextAreaWithLabel as TextArea } from '@components/RenewalInputs';
import React from 'react';
import { StyledBody, StyledContainer, StyledButton, StyledContainerHeader, StyledContainerSubTitle, StyledContainerTitle, StyledHeader, StyledTitle, StyledContainerBody, StyledLabel } from './style';
import { RenewalSelect } from '@components/RenewalSelect';

export const RenewalCourseCreatePage = () => {

  const activityList = ['세션', '스터디', '프로젝트'];
  const difficultyList = ['easy', 'medium', 'hard'];
  const requireTimeList = ['1학점', '2학점', '3학점'];

  const handleActivity = (activity : string) => {
    console.log(activity)
  };
  const handleDifficulty = (difficulty : string) => {
    console.log(difficulty)
  };
  const handleInputTime = (inputTime : string) => {
    console.log(inputTime)
  };

  const curriculumTextAreas = [...Array(8).keys()].map((key) =>
    (<TextArea labelTitle={`${key+1}주차`} placeholder={'200자 이내로 작성해주세요.'} key={key}></TextArea>)
  );

  return (
    <StyledBody>
      <StyledHeader>
        <StyledTitle>활동 개설</StyledTitle>
        <StyledButton>등록하기</StyledButton>
      </StyledHeader>
      <StyledContainer>
        <StyledContainerHeader>
          <StyledContainerTitle>
            필수 정보
          </StyledContainerTitle>
          <StyledContainerSubTitle>
            필수 정보는 <span className='warning'>수정이 불가</span>하니 신중히 입력해주세요!
          </StyledContainerSubTitle>
        </StyledContainerHeader>
        <StyledContainerBody>
          <StyledLabel>활동 카테고리</StyledLabel>
          <div style={{ display: 'flex', gap: 12}}>
            <RenewalSelect itemList={activityList} handleItem={handleActivity} label='세션 / 스터디 / 프로젝트' />
            <RenewalSelect itemList={difficultyList} handleItem={handleDifficulty} label='난이도' />
            <RenewalSelect itemList={requireTimeList} handleItem={handleInputTime} label='투자 시간' />
          </div>
          <Input labelTitle='활동 제목' placeholder={'30자 이내로 작성해주세요.'}></Input>
          <Input labelTitle='주요 기술 스택 & 사용 언어' placeholder={'옵션을 선택해주세요.'}></Input>
        </StyledContainerBody>
      </StyledContainer>
      <StyledContainer>
        <StyledContainerHeader>
          <StyledContainerTitle>
            세부 정보
          </StyledContainerTitle>
        </StyledContainerHeader>
        <StyledContainerBody>
          <Input labelTitle='세부 기술 스택' placeholder={'옵션을 선택해주세요.'}></Input>
          <TextArea labelTitle='활동 소개' placeholder={'200자 이내로 작성해주세요.'}></TextArea>
          <TextArea labelTitle='활동 목표' placeholder={'200자 이내로 작성해주세요.'}></TextArea>
          <Input labelTitle='진행 요일' placeholder={'100자 이내로 작성해주세요.'}></Input>
          <TextArea labelTitle='진행 장소 및 방법' placeholder={'200자 이내로 작성해주세요.'}></TextArea>
          <TextArea labelTitle='유의 사항' placeholder={'200자 이내로 작성해주세요.'}></TextArea>
        </StyledContainerBody>
      </StyledContainer>
      <StyledContainer>
        <StyledContainerHeader>
          <StyledContainerTitle>
            커리큘럼
          </StyledContainerTitle>
        </StyledContainerHeader>
        <StyledContainerBody>
          {curriculumTextAreas}
        </StyledContainerBody>
      </StyledContainer>
    </StyledBody>
  );
};

