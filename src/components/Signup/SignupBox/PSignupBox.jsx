import React, { useState } from "react";
import { useHistory } from "react-router";
import * as S from "../style";
import { Button } from "antd";

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
  const handleClick = async (e) => {
    e.preventDefault();
    await signupHandler(email, password, name, link, comment);
  };

  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)", marginTop: "0px" }}>
      <S.SignupBox>
        <S.SignupTopCont>
          <img style={{ width: "120px" }} src={"./img/KUCCicon.png"} />
          <S.SignupTopContTitle>
            KUCC
            <br />
            길라잡이
          </S.SignupTopContTitle>
          <S.SignupTopContExplain>
            <p>
              고려대학교 중앙 컴퓨터 동아리
              <br /> 세션/스터디 관리 시스템
            </p>
          </S.SignupTopContExplain>
        </S.SignupTopCont>
        <S.SignupBottomCont onSubmit={handleClick}>
          <div>
            <S.SignupBottomContText>이메일</S.SignupBottomContText>
            <S.SignupInput
              value={email}
              name="email"
              type="email"
              onChange={onChange}
            />
          </div>
          <div>
            <S.SignupBottomContText>비밀번호</S.SignupBottomContText>
            <S.SignupInput
              value={password}
              name="password"
              type="password"
              onChange={onChange}
            />
          </div>
          <div>
            <S.SignupBottomContText>비밀번호 확인</S.SignupBottomContText>
            <S.SignupInput
              value={passwordConfirm}
              name="passwordConfirm"
              type="password"
              onChange={onChange}
            />
          </div>
          <div>
            <S.SignupBottomContText>이름</S.SignupBottomContText>
            <S.SignupInput
              value={name}
              name="name"
              type="text"
              placeholder="ex) 정인아"
              onChange={onChange}
            />
          </div>
          <div>
            <S.SignupBottomContText>링크</S.SignupBottomContText>
            <S.SignupInput
              value={link}
              name="link"
              type="text"
              placeholder="ex) https://github.com/"
              onChange={onChange}
            />
          </div>
          <div>
            <S.SignupBottomContText>소개</S.SignupBottomContText>
            <S.SignupInput
              value={comment}
              name="comment"
              type="text"
              placeholder="50자이내"
              onChange={onChange}
            />
          </div>
          <Button type="danger" htmlType="submit" style={{ borderRadius: "13px" }}>
            JOIN
            {/* <button type="submit"></button> */}
          </Button>
        </S.SignupBottomCont>
      </S.SignupBox>
    </div>
  );
}
export default PSignupBox;
