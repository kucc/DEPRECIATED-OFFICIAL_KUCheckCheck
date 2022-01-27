import React from 'react';

import { DefaultLogo } from '@components/DefaultLogo';
import { NavBar } from '@components/NavBar';

import { StyledBackground } from '@utility/COMMON_STYLE';

import { StyledNotFound } from './style';

const NotFoundPage = () => {
  return (
    <StyledBackground>
      <NavBar />
      <StyledNotFound>
        <DefaultLogo width={200} height={200} logoName='type-3-4' />
        <h2>찾으시는 페이지가 존재하지 않습니다.</h2>
      </StyledNotFound>
    </StyledBackground>
  );
};

export default NotFoundPage;
