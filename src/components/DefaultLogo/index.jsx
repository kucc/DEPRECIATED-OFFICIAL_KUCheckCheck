import React from 'react';

function DefaultLogo({ logoName, width, height, onClick, isPointer = false }) {
  return (
    <img
      onClick={onClick}
      src={`/img/logo/${logoName}.png`}
      alt='default-logo'
      width={width || '49px'}
      height={height || '15px'}
      style={{ cursor: isPointer ? 'pointer' : 'default' }}
    />
  );
}

export default DefaultLogo;
