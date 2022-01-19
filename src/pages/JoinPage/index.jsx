import React from 'react';

import Description from '@components/Description';

import JoinForm from './components/JoinForm';
import { StyledCol, StyledRow, Wrapper } from './style';

function JoinPage() {
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
}
export default JoinPage;
