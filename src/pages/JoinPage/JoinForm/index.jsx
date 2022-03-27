import React, { useState } from 'react';

import { Space } from 'antd';
import { useHistory } from 'react-router-dom';

import { FullWidthButton, InputBoxWithLabel } from '@components';

import { authService, firestoreService } from '@/firebase';
import {
  CAN_NOT_CREATE_USER_IN_FIREBASE,
  PASSWORD_DOSE_NOT_MATCH,
  RandomEmoji,
} from '@utility';

import { StyledForm } from './style';

function JoinForm() {
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

  const submitHandler = async event => {
    try {
      setIsSubmitted(true);
      event.preventDefault();
      if (password !== passwordConfirm)
        throw new Error(PASSWORD_DOSE_NOT_MATCH);

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
        comment,
        link,
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
      <Space direction='vertical' size='large'>
        <InputBoxWithLabel
          labelTitle='이메일'
          inputName='email'
          inputType='email'
          value={email}
          onChange={onChange}
        />
        <InputBoxWithLabel
          labelTitle='비밀번호'
          inputName='password'
          inputType='password'
          value={password}
          onChange={onChange}
        />
        <InputBoxWithLabel
          labelTitle='비밀번호 확인'
          inputName='passwordConfirm'
          inputType='password'
          value={passwordConfirm}
          onChange={onChange}
        />
        <InputBoxWithLabel
          labelTitle='이름'
          inputName='name'
          inputType='text'
          placeholder='ex) 정인아'
          value={name}
          onChange={onChange}
        />
        <InputBoxWithLabel
          labelTitle='링크 (https://까지 포함)'
          inputName='link'
          inputType='text'
          placeholder='ex) https://github.com/'
          value={link}
          onChange={onChange}
        />

        <InputBoxWithLabel
          labelTitle='소개(간단한 소개)'
          inputName='comment'
          inputType='text'
          placeholder='100자 이내'
          value={comment}
          onChange={onChange}
        />
        <InputBoxWithLabel
          labelTitle='세부 코멘트(자세한 소개)'
          inputName='detailComment'
          inputType='text'
          placeholder='200자 이내'
          value={detailComment}
          onChange={onChange}
        />
        <FullWidthButton htmlType='submit' text='JOIN' loading={isSubmitted} />
      </Space>
    </StyledForm>
  );
}

export default JoinForm;
