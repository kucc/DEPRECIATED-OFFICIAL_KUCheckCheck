import React from 'react';

import PropTypes from 'prop-types';

import { InputBoxWithLabel } from '@components';

function InputBox({
  labelTitle,
  inputName,
  inputType,
  placeholder,
  value,
  onChange,
}) {
  return (
    <InputBoxWithLabel
      labelTitle={labelTitle}
      inputName={inputName}
      inputType={inputType}
      placehodler={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputBox;

InputBox.propTypes = {
  labelTitle: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
