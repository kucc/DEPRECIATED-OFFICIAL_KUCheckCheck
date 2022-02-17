import React from 'react';

import { useHistory } from 'react-router-dom';

import { DefaultLogo, Description } from '@components';

import LoginForm from './LoginForm';
import { StyledCol, StyledRow, Wrapper } from './style';

export const LoginPage = () => {
  const history = useHistory();
  return (
    <StyledRow>
      <StyledCol>
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
          <DefaultLogo
            isPointer={true}
            onClick={() => history.push('/')}
            logoName='type-1-3'
            width={120}
            height={120}
          />
        </Wrapper>
      </StyledCol>
    </StyledRow>
  );
};
