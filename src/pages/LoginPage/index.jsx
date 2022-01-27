import React from 'react';

import { DefaultLogo, Description } from '@components';

import LoginForm from './LoginForm';
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
              color: 'black',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'block',
              marginTop: '-30px',
            }}>
            JOIN
          </a>
          <DefaultLogo logoName='type-1-3' width={120} height={120} />
        </Wrapper>
      </StyledCol>
    </StyledRow>
  );
};
