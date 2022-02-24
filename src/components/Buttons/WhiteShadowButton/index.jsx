import React from 'react';

import PropTypes from 'prop-types';

import { StyledWhiteShadowButton } from './style';

export const WhiteShadowButton = ({ text, onClick, bgColor = 'white' }) => {
  // width가 100%이므로 사용시 부모 컨테이너의 width를 조정해서 사용
  return (
    <StyledWhiteShadowButton
      onClick={onClick}
      bgColor={bgColor}
      className='out-shadow-middle border-radius-all'>
      {text}
    </StyledWhiteShadowButton>
  );
};

WhiteShadowButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
};
