import React from 'react';

import { useMediaQuery } from 'react-responsive';

import { NavBar } from '@components';

import { StyledBackground } from '../NoticePage/style';
import {
  MMainBottomContainer,
  PMainBottomContainer,
} from './MainBottomContainer';
import MainPeriodNotice from './MainPeriodNotice';
import { MMainTopContainer, PMainTopContainer } from './MainTopContainer';

export const MainPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <StyledBackground>
      <NavBar isMain={true} />
      {isMobile ? (
        <>
          <MMainTopContainer />
          <MainPeriodNotice />
          <MMainBottomContainer />
        </>
      ) : (
        <>
          <PMainTopContainer />
          <MainPeriodNotice />
          <PMainBottomContainer />
        </>
      )}
    </StyledBackground>
  );
};
