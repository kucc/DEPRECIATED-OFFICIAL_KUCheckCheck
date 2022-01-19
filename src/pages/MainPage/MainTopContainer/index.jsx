import React from 'react';

import DefaultLogo from '@components/DefaultLogo';

import MainSearch from '../MainSearch';
import {
  StyledMainExplain,
  StyledMainTitle1,
  StyledMainTitle2,
  StyledMainTopWrapper,
} from './style';

function MainTopContainer() {
  return (
    <StyledMainTopWrapper className='out-shadow-strong border-radius-bottom-strong'>
      <div>
        <StyledMainTitle1>
          <p>KUCC</p>
        </StyledMainTitle1>
        <StyledMainTitle2>
          <p>길라잡이 </p>
        </StyledMainTitle2>
        <StyledMainExplain>
          <p>고려대학교 중앙 컴퓨터 동아리 세션관리시스템</p>
        </StyledMainExplain>
        <MainSearch />
      </div>
      <DefaultLogo
        logoName='type-3-2'
        width={450}
        height={450}
        style={{ marginTop: '0px', marginLeft: '40px' }}
      />
    </StyledMainTopWrapper>
  );
}
export default MainTopContainer;
