import React from 'react';

import { DefaultLogo } from '@components/DefaultLogo';

import { SpeechBubble } from '@/svg';

import {
  StyledContentText,
  StyledMainText,
  StyledSpeechBody,
  StyledSpeechBubbleContainer,
  StyledSpeechText,
  StyledTopContainer,
  StyledHighLightText
} from './style';

export const MainTopContainer = () => {
  return (
    <StyledTopContainer>
      <DefaultLogo
        style={{
          position: 'absolute',
          left: '14%',
          top: '47px',
        }}
        width={88}
        height={88}
        logoName='type-3-1'
      />
      <StyledSpeechBubbleContainer>
        <StyledSpeechBody>
          <SpeechBubble />
          <StyledSpeechText>
            지금은 <StyledHighLightText>휴식 기간</StyledHighLightText>입니다. 다음 학기에 뵈어요!
          </StyledSpeechText>
        </StyledSpeechBody>
      </StyledSpeechBubbleContainer>
      <StyledMainText className='main'>KUCC</StyledMainText>
      <StyledMainText>길라잡이</StyledMainText>
      <StyledContentText>
        고려대학교 중앙 컴퓨터 동아리 활동 관리 시스템
      </StyledContentText>
    </StyledTopContainer>
  );
};
