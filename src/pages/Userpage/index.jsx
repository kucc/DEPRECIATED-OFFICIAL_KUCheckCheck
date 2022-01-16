import React from 'react';

import NavBar from '@components/NavBar';

import UserCourse from './components/UserCourse';
import UserInfo from './components/UserInfo';
import { StyledBackground } from './style';
import { StyledSideMargin } from '../../utility/COMMON_STYLE';

function UserPage({ userData }) {
  return (
    <StyledBackground>
      <NavBar />
      <StyledSideMargin>
        <UserInfo userData={userData} />
        <UserCourse userData={userData} />
      </StyledSideMargin>
    </StyledBackground>
  );
}
export default UserPage;
