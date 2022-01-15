import React from "react";
import InputBoxWithLabel from "../../../../components/InputBoxWithLabel";

function InputBox({ labelTitle, inputName, inputType, placeholder, value, onChange }) {
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
