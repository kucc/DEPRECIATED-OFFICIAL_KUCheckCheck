import React from 'react';

import { DefaultLogo } from '@components/DefaultLogo';

import {
  StyledContentText,
  StyledHighLightText,
  StyledMainText,
  StyledPeriodToolTip,
  StyledTopContainer,
} from './style';

export const MainTopContainer = () => {
  return (
    <StyledTopContainer>
      <DefaultLogo
        style={{
          position: 'absolute',
          right: '14%',
          top: '0',
        }}
        width={88}
        height={88}
        logoName='type-3-1'
      />
      <StyledMainText className='main'>KUCC</StyledMainText>
      <StyledMainText>길라잡이</StyledMainText>
      <StyledContentText>
        고려대학교 중앙 컴퓨터 동아리 활동 관리 시스템
      </StyledContentText>
      <StyledPeriodToolTip>
        지금은 <StyledHighLightText>휴식 기간</StyledHighLightText>입니다. 다음
        학기에 뵈어요!
      </StyledPeriodToolTip>
    </StyledTopContainer>
  );
};
