import React from 'react';

import PropTypes from 'prop-types';

import {
  StyledButton,
  StyledLoadingSpinner,
  StyledLoadingSpinnerContainer,
} from './style';

export const FullWidthButton = ({
  width,
  height,
  htmlType,
  text,
  style,
  isLoading,
  isActive,
}) => {
  return (
    <StyledButton
      className={isActive && 'active'}
      width={width}
      height={height}
      style={style}
      htmlType={htmlType}
      shape='round'
      isLoading={isLoading}>
      {isLoading && (
        <StyledLoadingSpinnerContainer>
          <StyledLoadingSpinner />
        </StyledLoadingSpinnerContainer>
      )}
      {text}
    </StyledButton>
  );
};

FullWidthButton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  htmlType: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
  isLoading: PropTypes.bool,
  isActive: PropTypes.bool,
};

FullWidthButton.defaultProps = {
  isActive: false,
  isLoading: false,
};
