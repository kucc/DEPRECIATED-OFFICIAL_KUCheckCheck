import React from 'react';

import { DefaultLogo, NavBar } from '@components';

import { StyledBackground } from '@utility';

import { StyledNotFound } from './style';

export const NotFoundPage = () => {
  const path = document.location.pathname.split('/')[1];

  const renderWord = () => {
    if (path === 'user') return '유저가';
    else if (path === 'course') return '세션이';
    else return '페이지가';
  };
  return (
    <StyledBackground>
      <NavBar />
      <StyledNotFound>
        <DefaultLogo width={200} height={200} logoName='type-3-4' />
        <h2>찾으시는 {renderWord()} 존재하지 않습니다.</h2>
      </StyledNotFound>
    </StyledBackground>
  );
};
