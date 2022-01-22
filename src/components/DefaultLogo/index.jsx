import React from 'react';

import PropTypes from 'prop-types';

function DefaultLogo({ logoName, width, height, onClick, isPointer = false }) {
  return (
    <img
      onClick={onClick}
      src={`/img/logo/${logoName}.svg`}
      alt='default-logo'
      width={width + 'px' || '49px'}
      height={height + 'px' || '15px'}
      style={{ cursor: isPointer ? 'pointer' : 'default' }}
    />
  );
}

export default DefaultLogo;

DefaultLogo.propTypes = {
  logoName: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onClick: PropTypes.func,
  isPointer: PropTypes.bool,
};
