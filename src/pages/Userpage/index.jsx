import React from 'react';

import NavBar from '@components/NavBar/NavBar';

import UserCourse from './components/UserCourse';
import UserInfo from './components/UserInfo';
import { StyledBackground, StyledMainContainer } from './style';

function UserPage({ userData }) {
  return (
    <StyledBackground>
      <NavBar />
      <StyledMainContainer>
        <UserInfo userData={userData} />
        <UserCourse userData={userData} />
      </StyledMainContainer>
    </StyledBackground>
  );
}
export default UserPage;
