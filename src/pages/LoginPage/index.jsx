import React from 'react';

import { DefaultLogo, Description } from '@components';

import LoginForm from './components/LoginForm';
import { StyledCol, StyledRow, Wrapper } from './style';

export const LoginPage = () => {
  return (
    <StyledRow>
      <StyledCol span={6} offset={8}>
        <Wrapper>
          <Description />
          <LoginForm />
          <a
            href='/signup'
            style={{
              textAlign: 'center',
              textDecoration: 'none',
              display: 'block',
            }}>
            JOIN
          </a>
          <DefaultLogo logoName='type-1-3' width={80} height={80} />
        </Wrapper>
      </StyledCol>
    </StyledRow>
  );
};
