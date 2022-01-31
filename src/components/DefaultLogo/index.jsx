import React from 'react';

import PropTypes from 'prop-types';

export const DefaultLogo = ({
  logoName,
  width,
  height,
  onClick,
  isPointer = false,
  style,
}) => {
  return (
    <img
      onClick={onClick}
      src={`/img/logo/${logoName}.svg`}
      alt='default-logo'
      width={
        width && typeof width === 'number'
          ? width + 'px'
          : width && typeof width !== 'number'
          ? width
          : '49px'
      }
      height={
        height && typeof height === 'number'
          ? height + 'px'
          : height && typeof height !== 'number'
          ? height
          : '15px'
      }
      style={{ cursor: isPointer ? 'pointer' : 'default', ...style }}
    />
  );
};

DefaultLogo.propTypes = {
  logoName: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  isPointer: PropTypes.bool,
  style: PropTypes.object,
};
