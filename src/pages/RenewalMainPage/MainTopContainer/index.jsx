import React from 'react';

import { DefaultLogo } from '@components/DefaultLogo';

import {
  StyledContentText,
  StyledMainText,
  StyledTopContainer,
} from './style';

export const MainTopContainer = () => {
  return (
    <StyledTopContainer>
      <DefaultLogo
        style={{
          position: 'absolute',
          left: '14%',
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
   
    </StyledTopContainer>
  );
};
