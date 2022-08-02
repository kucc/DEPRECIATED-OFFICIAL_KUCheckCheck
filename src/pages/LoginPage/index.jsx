import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import { AuthDescription } from '@components';

import LoginForm from './LoginForm';
import {
  StyledAuthContainer,
  StyledAuthMainImg,
  StyledCenterContainer,
} from './style';

export const LoginPage = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === '/login'; // true, false
  const history = useHistory();

  return (
    <StyledCenterContainer>
      <StyledAuthContainer isLogin={isLogin}>
        <AuthDescription isLogin={isLogin} />
        <LoginForm />
        <StyledAuthMainImg alt='KUCC' onClick={() => history.push('/')} />
      </StyledAuthContainer>
    </StyledCenterContainer>
  );
};
