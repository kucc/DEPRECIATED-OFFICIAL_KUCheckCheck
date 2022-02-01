import React from 'react';

import { Description } from '@components';

import JoinForm from './JoinForm';
import { StyledCol, StyledRow, Wrapper } from './style';

export const JoinPage = () => {
  return (
    <StyledRow>
      <StyledCol>
        <Wrapper>
          <Description />
          <JoinForm />
        </Wrapper>
      </StyledCol>
    </StyledRow>
  );
};
