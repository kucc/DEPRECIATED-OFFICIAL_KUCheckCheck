import React from 'react';

import PropTypes from 'prop-types';

import { NavBar } from '@components';

import { StyledSideMargin } from '@utility/COMMON_STYLE';

import UserCourse from './components/UserCourse';
import UserInfo from './components/UserInfo';
import { StyledBackground } from './style';

export const UserPage = ({ userData }) => {
  return (
    <StyledBackground>
      <NavBar />
      <StyledSideMargin>
        <UserInfo userData={userData} />
        <UserCourse userData={userData} />
      </StyledSideMargin>
    </StyledBackground>
  );
};

UserPage.propTypes = {
  userData: PropTypes.object,
};
