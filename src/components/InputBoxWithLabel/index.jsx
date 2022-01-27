import React from 'react';

import PropTypes from 'prop-types';

import { StyledInput, StyledLabel, Wrapper } from './style';

export const InputBoxWithLabel = ({
  labelTitle,
  inputName,
  inputType,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Wrapper>
      {labelTitle && (
        <StyledLabel htmlFor={inputName}>{labelTitle}</StyledLabel>
      )}
      <StyledInput
        className='in-shadow-weak'
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

InputBoxWithLabel.propTypes = {
  labelTitle: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
