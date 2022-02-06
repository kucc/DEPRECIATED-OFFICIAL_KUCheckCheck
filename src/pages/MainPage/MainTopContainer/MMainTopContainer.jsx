import React from 'react';

import { DefaultLogo } from '@components';

import useWindowDimensions from '@hooks/useWindowDimensions';

import MainSearch from '../MainSearch';
import * as S from './style';

export const MMainTopContainer = () => {
  const { width } = useWindowDimensions();

  return (
    <S.StyledMainTopWrapper className='out-shadow-strong border-radius-bottom-strong'>
      <div style={{ flexDirection: 'column' }}>
        <div>
          <DefaultLogo
            logoName='type-3-2'
            width={width / 2}
            height={'auto'}
            style={{ paddingTop: '60px' }}
          />
          <S.StyledMainTitle1>
            <p>KUCC</p>
          </S.StyledMainTitle1>
          <S.StyledMainTitle2>
            <p>길라잡이 </p>
          </S.StyledMainTitle2>
          <S.StyledMainExplain screenWidth={width}>
            <p>
              고려대학교 중앙 컴퓨터 동아리
              <br /> 세션 관리 시스템
            </p>
          </S.StyledMainExplain>
          <MainSearch />
        </div>
      </div>
    </S.StyledMainTopWrapper>
  );
};
