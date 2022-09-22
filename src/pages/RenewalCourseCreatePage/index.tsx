import { AuthInputWithLabel, AuthTextAreaWithLabel } from '@components/RenewalInputs';
import React from 'react';
import { StyledBody, StyledContainer, StyledButton, StyledContainerHeader, StyledContainerSubTitle, StyledContainerTitle, StyledHeader, StyledTitle, StyledContainerBody } from './style';
// import { StyledDownArrow } from '@utility/COMMON_STYLE';

export const RenewalCourseCreatePage = () => {

  const curriculumTextAreas = [...Array(8).keys()].map((key) =>
  (<AuthTextAreaWithLabel labelTitle={`${key+1}주차`} placeholder={'200자 이내로 작성해주세요.'} key={key}></AuthTextAreaWithLabel>)
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
          <AuthInputWithLabel labelTitle='활동 제목' placeholder={'30자 이내로 작성해주세요.'}></AuthInputWithLabel>
          <AuthInputWithLabel labelTitle='주요 기술 스택 & 사용 언어' placeholder={'옵션을 선택해주세요.'}></AuthInputWithLabel>
        </StyledContainerBody>
      </StyledContainer>
      <StyledContainer>
        <StyledContainerHeader>
          <StyledContainerTitle>
            세부 정보
          </StyledContainerTitle>
        </StyledContainerHeader>
        <StyledContainerBody>
          <AuthInputWithLabel labelTitle='세부 기술 스택' placeholder={'옵션을 선택해주세요.'}></AuthInputWithLabel>
          <AuthTextAreaWithLabel labelTitle='활동 소개' placeholder={'200자 이내로 작성해주세요.'}></AuthTextAreaWithLabel>
          <AuthTextAreaWithLabel labelTitle='활동 목표' placeholder={'200자 이내로 작성해주세요.'}></AuthTextAreaWithLabel>
          <AuthInputWithLabel labelTitle='진행 요일' placeholder={'100자 이내로 작성해주세요.'}></AuthInputWithLabel>
          <AuthTextAreaWithLabel labelTitle='진행 장소 및 방법' placeholder={'200자 이내로 작성해주세요.'}></AuthTextAreaWithLabel>
          <AuthTextAreaWithLabel labelTitle='유의 사항' placeholder={'200자 이내로 작성해주세요.'}></AuthTextAreaWithLabel>
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

