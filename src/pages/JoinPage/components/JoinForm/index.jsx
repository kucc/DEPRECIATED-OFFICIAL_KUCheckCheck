import React, { useState } from "react";
import FullWidthButton from "../../../../components/Buttons/FullWidthButton";
import { StyledForm } from "./style";
import { Space } from "antd";
import InputBox from "../InputBox";
import { useHistory } from "react-router-dom";
import {
  CAN_NOT_CREATE_USER_IN_FIREBASE,
  PASSWORD_DOSE_NOT_MATCH,
} from "../../../../constants/ERROR_MESSAGE";
import { authService, firestoreService } from "../../../../firebase";
import RandomEmoji from "../../../../components/RandomEmoji/RandomEmoji";

function JoinForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    link: "",
    comment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const { email, password, passwordConfirm, name, link, comment } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    try {
      setIsSubmitted(true);
      event.preventDefault();
      if (password !== passwordConfirm)
        throw new Error(PASSWORD_DOSE_NOT_MATCH);

      const createdUser = await authService.createUserWithEmailAndPassword(
        email,
        password
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
        role: "준회원",
        emoji: RandomEmoji(),
        courseHistory: [],
        detailComment: "",
      };

      await firestoreService
        .collection("users")
        .doc(createdUser.user.uid)
        .set(userData);
      alert("회원 가입을 완료하였습니다!");
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
        <InputBox
          labelTitle="이메일"
          inputName="email"
          inputType="email"
          value={email}
          onChange={onChange}
        />
        <InputBox
          labelTitle="비밀번호"
          inputName="password"
          inputType="password"
          value={password}
          onChange={onChange}
        />
        <InputBox
          labelTitle="비밀번호 확인"
          inputName="passwordConfirm"
          inputType="password"
          value={passwordConfirm}
          onChange={onChange}
        />
        <InputBox
          labelTitle="이름"
          inputName="name"
          inputType="text"
          placehodler="ex) 정인아"
          value={name}
          onChange={onChange}
        />
        <InputBox
          labelTitle="링크"
          inputName="link"
          inputType="text"
          placehodler="ex) https://github.com/"
          value={link}
          onChange={onChange}
        />
        <InputBox
          labelTitle="소개"
          inputName="comment"
          inputType="text"
          placehodler="50자 이내"
          value={comment}
          onChange={onChange}
        />
        <FullWidthButton htmlType="submit" text="JOIN" loading={isSubmitted} />
      </Space>
    </StyledForm>
  );
}

export default JoinForm;
