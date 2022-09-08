import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { AuthInputWithLabel, LoadingButton } from '@components';

import { authService } from '@/firebase';
import { FORM_IS_NOT_FULL } from '@utility';
import { RENEWAL_PATH } from '@utility/COMMON_FUNCTION';

import { StyledForm, StyledSignUpButton } from './style';

function LoginForm() {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
    if (!email || !password) {
      return false;
    }
    return true;
  };

  const submitHandler = async event => {
    event.preventDefault();

    if (!validationLogin()) {
      alert(FORM_IS_NOT_FULL);
      return false;
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
      <AuthInputWithLabel
        inputName='email'
        inputType='email'
        value={email}
        placeholder='이메일'
        onChange={onChange}
      />
      <AuthInputWithLabel
        inputName='password'
        inputType='password'
        value={password}
        placeholder='비밀번호'
        onChange={onChange}
      />
      <LoadingButton
        style={{
          width: '220px',
          height: isMobile ? '52px' : '60px',
          fontSize: isMobile ? '16px' : '20px',
          marginTop: '18%',
        }}
        htmlType='submit'
        text='LOGIN'
        isLoading={isSubmitted}
        isActive={validationLogin()}
      />
      <StyledSignUpButton to={RENEWAL_PATH.signup}>
        JOIN
      </StyledSignUpButton>
    </StyledForm>
  );
}

export default LoginForm;
