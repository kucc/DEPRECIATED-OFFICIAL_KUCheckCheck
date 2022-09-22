import React from 'react';
import { StyledBody, StyledContainer, StyledButton, StyledContainerHeader, StyledContainerSubTitle, StyledContainerTitle, StyledHeader, StyledTitle } from './style';

export const RenewalCourseCreatePage = () => {

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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </StyledContainer>
      <StyledContainer>
        <StyledContainerHeader>
          <StyledContainerTitle>
            세부 정보
          </StyledContainerTitle>
        </StyledContainerHeader>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </StyledContainer>
      <StyledContainer>
        <StyledContainerHeader>
          <StyledContainerTitle>
            커리큘럼
          </StyledContainerTitle>
        </StyledContainerHeader>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </StyledContainer>
    </StyledBody>
  );
};

