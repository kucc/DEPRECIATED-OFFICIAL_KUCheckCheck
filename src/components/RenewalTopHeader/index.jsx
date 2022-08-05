import React from 'react';

import {
  StyledLeftContainer,
  StyledLink,
  StyledTopHeader,
  StyledTopHeaderContainer,
} from './style';

export const RenewalTopHeader = () => {
  return (
    <StyledTopHeaderContainer>
      <StyledTopHeader>
        <StyledLeftContainer>
          <StyledLink to='/login'>LOGIN</StyledLink>
        </StyledLeftContainer>
      </StyledTopHeader>
    </StyledTopHeaderContainer>
  );
};
