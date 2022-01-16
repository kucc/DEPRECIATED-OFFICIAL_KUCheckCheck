import React from 'react';

import { StyledWhiteShadowButton } from './style';

const WhiteShadowButton = ({ text, onClick, type = 'default' }) => {
  // width가 100%이므로 사용시 부모 컨테이너의 width를 조정해서 사용
  return (
    <StyledWhiteShadowButton type={type} onClick={onClick} shape='round'>
      {text}
    </StyledWhiteShadowButton>
  );
};

export default WhiteShadowButton;
