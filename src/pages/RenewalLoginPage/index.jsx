import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import { AuthDescription } from '@components';
import { RENEWAL_PATH } from '@utility/COMMON_FUNCTION';
import LoginForm from './LoginForm';
import {
  StyledAuthContainer,
  StyledAuthMainImg,
  StyledCenterContainer,
} from './style';

export const RenewalLoginPage = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === RENEWAL_PATH.login; // true, false
  const history = useHistory();

  return (
    <StyledCenterContainer>
      <StyledAuthContainer isLogin={isLogin}>
        <AuthDescription isLogin={isLogin} />
        <LoginForm />
        <StyledAuthMainImg alt='KUCC' onClick={() => history.push(RENEWAL_PATH.main)} />
      </StyledAuthContainer>
    </StyledCenterContainer>
  );
};
