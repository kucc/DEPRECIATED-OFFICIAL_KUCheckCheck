import React from 'react';

import PropTypes from 'prop-types';

import { StyledTextArea, StyledLabel, Wrapper, StyledRequiredText } from '../AuthInputWithLabel/style';

export const AuthTextAreaWithLabel = ({
  labelTitle,
  inputName,
  inputType,
  placeholder,
  value,
  onChange,
  isRequired = false
}) => {
  return (
    <Wrapper isLabelTitle={labelTitle}>
      {labelTitle && (
        <StyledLabel htmlFor={inputName}>{labelTitle}</StyledLabel>
      )}
      {isRequired && (
        <StyledRequiredText>(선택)</StyledRequiredText>
      )}
      <StyledTextArea
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

AuthTextAreaWithLabel.propTypes = {
  labelTitle: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
};
