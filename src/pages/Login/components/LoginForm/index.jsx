import React, { useState } from "react";
import { useHistory } from "react-router";
import { Space } from "antd";
import FullWidthButton from "../../../../components/FullWidthButton";
import InputBoxWithLabel from "../../../../components/InputBoxWithLabel";
import { authService } from "../../../../firebase";
import { StyledForm } from "./style";

function LoginForm() {
  const history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    try {
      setIsSubmitted(true);
      event.preventDefault();
      await authService.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Space direction="vertical" size="large">
        <InputBoxWithLabel
          inputName="email"
          inputType="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        <InputBoxWithLabel
          inputName="password"
          inputType="password"
          value={password}
          placeholder="Pw"
          onChange={onChange}
        />
        <FullWidthButton htmlType="submit" text="LOGIN" loading={isSubmitted} />
      </Space>
    </StyledForm>
  );
}

export default LoginForm;
