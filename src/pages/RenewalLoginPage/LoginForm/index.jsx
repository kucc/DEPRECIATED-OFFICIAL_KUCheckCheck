import { useEffect, useState } from 'react';

import { isLoggedInState } from '@recoilState';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { loginRequest } from '@redux/actions/renewal_member_action';

import { AuthInputWithLabel, LoadingButton } from '@components';

import { FORM_IS_NOT_FULL, LOGIN_FAILURE, USER_NOT_FOUND } from '@utility';
import { RENEWAL_PATH } from '@utility/COMMON_FUNCTION';

import { StyledForm, StyledSignUpButton } from './style';

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const history = useHistory();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  const { status, error } = useSelector(state => state.member.login);

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

  // TODO: 수정해야됨
  useEffect(() => {
    if (isLoggedIn) {
      history.push(RENEWAL_PATH.main);
    } else {
      setIsSubmitted(false);
    }

    if (error === 'user_not_found') {
      alert(USER_NOT_FOUND);
      window.location.href = RENEWAL_PATH.signUp;
    } else alert(LOGIN_FAILURE);
  }, [status, error, history]);

  // TODO: 수정해야됨
  const handleLogin = e => {
    e.preventDefault();

    if (!validationLogin()) {
      alert(FORM_IS_NOT_FULL);
      return false;
    }

    setIsSubmitted(true);
    loginRequest(inputs).then(res => {
      if (res) {
        if (localStorage.getItem('accessToken')) {
          history.push(RENEWAL_PATH.main);
          setIsLoggedIn(true);
        } else {
          alert(LOGIN_FAILURE);
          setIsLoggedIn(false);
        }
      }
    });
  };

  return (
    <StyledForm onSubmit={handleLogin}>
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
      <StyledSignUpButton to={RENEWAL_PATH.signUp}>JOIN</StyledSignUpButton>
    </StyledForm>
  );
}

export default LoginForm;
