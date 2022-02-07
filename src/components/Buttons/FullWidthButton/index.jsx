import React from 'react';

import PropTypes from 'prop-types';

import { StyledButton } from './style';

export const FullWidthButton = ({ htmlType, text, loading, style }) => {
  return (
    <StyledButton
      style={style}
      htmlType={htmlType}
      shape='round'
      loading={loading}>
      {text}
    </StyledButton>
  );
};

FullWidthButton.propTypes = {
  htmlType: PropTypes.string,
  text: PropTypes.string,
  loading: PropTypes.bool,
  style: PropTypes.object,
};
