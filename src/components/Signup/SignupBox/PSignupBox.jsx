import React, { useState } from "react";
import { useHistory } from "react-router";
import * as S from "../style";

function PSignupBox({ signupHandler }) {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    link: "",
    comment: "",
  });
  const { email, password, passwordConfirm, name, link, comment } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <>
      <S.SignupTopCont>
        <S.SignupTopContTitle>
          <p>
            KUCC
            <br />
            길라잡이
          </p>
        </S.SignupTopContTitle>
        <S.SignupTopContExplain>
          <p>
            고려대학교 중앙 컴퓨터 동아리
            <br /> 세션/스터디 관리 시스템
          </p>
        </S.SignupTopContExplain>
        <S.SignupBottomCont>
          <S.SignupInput
            value={email}
            name="email"
            type="email"
            placeholder="이메일"
            onChange={onChange}
          />
          <S.SignupInput
            value={password}
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
          />
          <S.SignupInput
            value={passwordConfirm}
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호확인"
            onChange={onChange}
          />
          <S.SignupInput
            value={name}
            name="name"
            type="text"
            placeholder="ex)정인아"
            onChange={onChange}
          />
          <S.SignupInput
            value={link}
            name="link"
            type="text"
            placeholder="ex)https://github.com/"
            onChange={onChange}
          />
          <S.SignupInput
            value={comment}
            name="comment"
            type="text"
            placeholder="50자이내"
            onChange={onChange}
          />
          <S.SignupBtn
            onClick={async (e) => {
              e.preventDefault();
              await signupHandler(email, password, name, link, comment);
            }}
          >
            <p>JOIN</p>
          </S.SignupBtn>
        </S.SignupBottomCont>
      </S.SignupTopCont>
    </>
  );
}
export default PSignupBox;
