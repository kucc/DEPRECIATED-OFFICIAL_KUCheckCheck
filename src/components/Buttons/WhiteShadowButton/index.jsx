import React from 'react';

import { StyledWhiteShadowButton } from './style';

const WhiteShadowButton = ({ text, onClick, type = 'default' }) => {
  // width가 100%이므로 사용시 부모 컨테이너의 width를 조정해서 사용
  return (
<<<<<<< HEAD
    <StyledWhiteShadowButton
      type={type}
      onClick={onClick}
      shape="round"
      className="out-shadow-weak"
    >
=======
    <StyledWhiteShadowButton type={type} onClick={onClick} shape='round'>
>>>>>>> 07c6c05844124c4efcc890d219209c5c04ed114c
      {text}
    </StyledWhiteShadowButton>
  );
};

export default WhiteShadowButton;
