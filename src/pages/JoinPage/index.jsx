import React from 'react';

import { Description } from '@components';

import JoinForm from './JoinForm';
import { StyledCol, StyledRow, Wrapper } from './style';

export const JoinPage = () => {
  return (
    <StyledRow>
      <StyledCol span={6} offset={8}>
        <Wrapper>
          <Description />
          <JoinForm />
        </Wrapper>
      </StyledCol>
    </StyledRow>
  );
};
