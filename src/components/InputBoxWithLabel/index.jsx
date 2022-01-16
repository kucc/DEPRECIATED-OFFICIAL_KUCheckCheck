import React from 'react';

import PropTypes from 'prop-types';

import { StyledInput, StyledLabel, Wrapper } from './style';

function InputBoxWithLabel({
  labelTitle,
  inputName,
  inputType,
  placeholder,
  value,
  onChange,
}) {
  return (
    <Wrapper>
      {labelTitle && (
        <StyledLabel htmlFor={inputName}>{labelTitle}</StyledLabel>
      )}
      <StyledInput
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default InputBoxWithLabel;

InputBoxWithLabel.propTypes = {
  labelTitle: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
