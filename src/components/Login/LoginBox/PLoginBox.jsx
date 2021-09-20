import React, { useState } from "react";
import { useHistory } from "react-router";
import * as S from "../style";

function PLoginBox({ loginHandler }) {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    useremail: "",
    password: "",
  });
  const { useremail, password } = inputs;
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
      <S.LoginTopCont>
        <S.LoginTopContTitle>
          <p>
            KUCC
            <br />
            길라잡이
          </p>
        </S.LoginTopContTitle>
        <S.LoginTopContExplain>
          <p>
            고려대학교 중앙 컴퓨터 동아리
            <br /> 세션/스터디 관리 시스템
          </p>
        </S.LoginTopContExplain>
        <S.LoginBottomCont>
          <S.LoginInput
            value={useremail}
            name="useremail"
            type="email"
            placeholder="이메일"
            onChange={onChange}
          />
          <S.LoginInput
            value={password}
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
          />
          <S.LoginBtn
            onClick={async (e) => {
              e.preventDefault();
              await loginHandler(useremail, password);
            }}
          >
            <p>LOGIN</p>
          </S.LoginBtn>
          <S.SignupLink>
            <p onClick={() => history.push("/signup")}>JOIN</p>
          </S.SignupLink>
        </S.LoginBottomCont>
      </S.LoginTopCont>
    </>
  );
}
export default PLoginBox;
