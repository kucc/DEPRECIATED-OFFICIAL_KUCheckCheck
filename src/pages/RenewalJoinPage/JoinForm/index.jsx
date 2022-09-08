import React, { useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import {
  AuthInputWithLabel,
  AuthTextAreaWithLabel,
  LoadingButton,
} from '@components';
import { StyledForm } from '@pages/RenewalLoginPage/LoginForm/style';

import { authService, firestoreService } from '@/firebase';
import {
  CAN_NOT_CREATE_USER_IN_FIREBASE,
  FORM_IS_NOT_FULL,
  PASSWORD_DOSE_NOT_MATCH,
  RandomEmoji,
} from '@utility';

function JoinForm() {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    link: '',
    comment: '',
    detailComment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const {
    email,
    password,
    passwordConfirm,
    name,
    link,
    comment,
    detailComment,
  } = inputs;

  const onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const validationSignUp = () => {
    if (!email || !password || !passwordConfirm || !name) {
      return false;
    }
    if (password !== passwordConfirm) {
      alert(PASSWORD_DOSE_NOT_MATCH);
      return false;
    }

    return true;
  };

  const submitHandler = async event => {
    event.preventDefault();

    if (!validationSignUp()) {
      alert(FORM_IS_NOT_FULL);
      return false;
    }
    try {
      setIsSubmitted(true);

      const createdUser = await authService.createUserWithEmailAndPassword(
        email,
        password,
      );

      await createdUser.user.updateProfile({
        displayName: name,
      });

      if (createdUser === null)
        throw new Error(CAN_NOT_CREATE_USER_IN_FIREBASE);

      const userData = {
        email,
        name,
        link,
        comment,
        detailComment,
        role: '준회원',
        emoji: RandomEmoji(),
        courseHistory: [],
      };

      await firestoreService
        .collection('users')
        .doc(createdUser.user.uid)
        .set(userData);
      alert('회원 가입을 완료하였습니다!');
      history.push('/');
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <AuthInputWithLabel
        labelTitle='이메일'
        inputName='email'
        inputType='email'
        value={email}
        onChange={onChange}
      />
      <AuthInputWithLabel
        labelTitle='비밀번호'
        inputName='password'
        inputType='password'
        value={password}
        onChange={onChange}
      />
      <AuthInputWithLabel
        labelTitle='비밀번호 확인'
        inputName='passwordConfirm'
        inputType='password'
        value={passwordConfirm}
        onChange={onChange}
      />
      <AuthInputWithLabel
        labelTitle='이름'
        inputName='name'
        inputType='text'
        value={name}
        onChange={onChange}
      />

      <AuthTextAreaWithLabel
        labelTitle='한줄 소개'
        inputName='comment'
        inputType='text'
        placeholder='최대 100자 이내로 작성해주세요.'
        value={comment}
        onChange={onChange}
      />

      <AuthTextAreaWithLabel
        labelTitle='상세 소개'
        inputName='detailComment'
        inputType='text'
        placeholder='최대 200자 이내로 작성해주세요.'
        value={detailComment}
        onChange={onChange}
        isRequired={true}
      />

      <AuthInputWithLabel
        labelTitle='소개 링크'
        inputName='link'
        inputType='text'
        placeholder='깃헙 주소 ex) https://github.com/'
        value={link}
        onChange={onChange}
        isRequired={true}
      />

      <AuthInputWithLabel
        inputName='link'
        inputType='text'
        placeholder='인스타그램 사용자이름 ex) @kucc_rlffkdlwkqdl'
        value={link}
        onChange={onChange}
      />

      <LoadingButton
        style={{
          width: '220px',
          height: isMobile ? '52px' : '60px',
          fontSize: isMobile ? '16px' : '20px',
          margin: '18% auto',
        }}
        htmlType='submit'
        text='JOIN'
        isLoading={isSubmitted}
        isActive={validationSignUp()}
      />
    </StyledForm>
  );
}

export default JoinForm;
