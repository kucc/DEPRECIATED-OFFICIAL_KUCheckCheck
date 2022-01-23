import React from 'react';

import { NavBar } from '@components';

import { StyledBackground } from '../NoticePage/style';
import MainBottomContainer from './MainBottomContainer';
import MainTopContainer from './MainTopContainer';

export const MainPage = () => {
  return (
    <StyledBackground>
      <NavBar isMain={true} />
      <MainTopContainer />
      <MainBottomContainer />
    </StyledBackground>
  );
};
