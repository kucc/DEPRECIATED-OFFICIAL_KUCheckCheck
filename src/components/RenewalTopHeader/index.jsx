import React from 'react';

import { useHistory } from 'react-router-dom';

import { DefaultLogo } from '..';
import {
  StyledLeftContainer,
  StyledLink,
  StyledTopHeader,
  StyledTopHeaderContainer,
} from './style';

export const RenewalTopHeader = () => {
  const history = useHistory();

  return (
    <StyledTopHeaderContainer>
      <StyledTopHeader>
        <DefaultLogo
          logoName='type-1-3'
          width={103}
          height={103}
          onClick={() => history.push('/')}
          isPointer={true}
        />
        <StyledLeftContainer>
          <StyledLink to='/login'>LOGIN</StyledLink>
        </StyledLeftContainer>
      </StyledTopHeader>
    </StyledTopHeaderContainer>
  );
};
