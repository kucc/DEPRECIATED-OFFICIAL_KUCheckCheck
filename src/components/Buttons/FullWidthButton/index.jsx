import React from 'react';

import PropTypes from 'prop-types';

import { StyledButton } from './style';

export const FullWidthButton = ({ htmlType, text, loading }) => {
  return (
    <StyledButton
      type='danger'
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
};
