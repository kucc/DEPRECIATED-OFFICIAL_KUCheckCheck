import { useState } from 'react';

import { Space } from 'antd';
import { useHistory } from 'react-router-dom';

import { FullWidthButton, InputBoxWithLabel } from '@components';

import { authService } from '@/firebase';

import { StyledForm } from './style';

function LoginForm() {
  const history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  const onChange = event => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitHandler = async event => {
    try {
      setIsSubmitted(true);
      event.preventDefault();
      await authService.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      const { code, message } = error;
      switch (code) {
        case 'auth/user-not-found':
          alert('가입되지 않은 사용자입니다.\n회원가입 페이지로 이동합니다.');
          history.push('/signup');
          break;
        case 'auth/wrong-password':
          alert('잘못된 비밀번호입니다.');
          break;
        case 'auth/invalid-email':
          alert('양식을 제대로 입력해주세요.');
          break;
        default:
          alert(message);
          break;
      }
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Space direction='vertical' size='large'>
        <InputBoxWithLabel
          inputName='email'
          inputType='email'
          value={email}
          placeholder='Email'
          onChange={onChange}
        />
        <InputBoxWithLabel
          inputName='password'
          inputType='password'
          value={password}
          placeholder='Pw'
          onChange={onChange}
        />
        <FullWidthButton htmlType='submit' text='LOGIN' loading={isSubmitted} />
      </Space>
    </StyledForm>
  );
}

export default LoginForm;
