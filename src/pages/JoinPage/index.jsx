import React from 'react';

import { useHistory } from 'react-router-dom';

import { AuthDescription } from '@components';

import {
  StyledAuthContainer,
  StyledAuthMainImg,
  StyledCenterContainer,
} from '@pages/LoginPage/style';

import JoinForm from './JoinForm';

export const JoinPage = () => {
  const history = useHistory();

  return (
    <StyledCenterContainer>
      <StyledAuthContainer>
        <AuthDescription />
        <JoinForm />
        <StyledAuthMainImg alt='KUCC' onClick={() => history.push('/')} />
      </StyledAuthContainer>
    </StyledCenterContainer>
  );
};
