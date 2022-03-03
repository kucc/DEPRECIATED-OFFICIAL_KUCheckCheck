import React from 'react';

import { DefaultLogo } from '@components';

import MainSearch from '../MainSearch';
import * as S from './style';

export const PMainTopContainer = () => {
  return (
    <S.StyledMainTopWrapper className='out-shadow-strong border-radius-bottom-strong'>
      <div>
        <S.StyledMainTitle1>
          <p>KUCC</p>
        </S.StyledMainTitle1>
        <S.StyledMainTitle2>
          <p>길라잡이 </p>
        </S.StyledMainTitle2>
        <S.StyledMainExplain>
          <p>고려대학교 중앙 컴퓨터 동아리 세션 관리 시스템</p>
        </S.StyledMainExplain>
        <MainSearch />
      </div>
      <DefaultLogo
        logoName='type-3-2'
        width={'500%'}
        height={'auto'}
        style={{ marginTop: '30px', marginLeft: '40px', maxWidth: '400px' }}
      />
    </S.StyledMainTopWrapper>
  );
};
