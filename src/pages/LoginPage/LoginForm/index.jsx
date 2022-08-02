import { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FullWidthButton, InputBoxWithLabel } from '@components';

import { authService } from '@/firebase';

import { StyledForm } from './style';
import { FORM_IS_NOT_FULL } from '@utility';

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

  const validationLogin = () => {
    if(!email || !password) {
      alert(FORM_IS_NOT_FULL);
      return false
    }
    return true
  }

  const submitHandler = async event => {
    event.preventDefault();

    if(!validationLogin()) {
      return false
    }
    try {
      setIsSubmitted(true);
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
      <InputBoxWithLabel
        inputName='email'
        inputType='email'
        value={email}
        placeholder='이메일'
        onChange={onChange}
      />
      <InputBoxWithLabel
        inputName='password'
        inputType='password'
        value={password}
        placeholder='비밀번호'
        onChange={onChange}
      />
      <FullWidthButton
        style={{
          width: '220px',
          height: '60px',
          marginTop: '18%',
        }}
        htmlType='submit'
        text='LOGIN'
        loading={isSubmitted}
      />
      <Link to='/signup' className='signupButton'>
        JOIN
      </Link>
    </StyledForm>
  );
}

export default LoginForm;
