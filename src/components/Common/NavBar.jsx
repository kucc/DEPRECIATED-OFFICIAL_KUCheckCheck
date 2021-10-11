import React, { useState } from "react";
// import { useRecoilValue } from "recoil";
// import { userState } from "../../recoil/userState";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as S from "./style";
import { authService } from "../../firebase";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const logout = async () => {
    try {
      authService.signOut();
      window.alert("로그아웃이 되었습니다!");
      window.location.replace("/");
    } catch (e) {
      console.log(e.response.data.error.msg);
      alert(e.response.data.error.msg);
    }
  };
  const myPage = async () => {
    try {
      // mypage 주소 뒤에 uid를 넣어줘야 하나??
      history.push(`/mypage`);
    } catch (e) {
      alert(e.response.data.error.msg);
    }
  };
  const google = async (e) => {
    window.location.replace(
      "http://taskagile.site/oauth2/authorization/google"
    );
    console.log(e);
  };
  return (
    <S.NavBarContainer>
      <S.NavBarLogoContainer>
        <Link to="/">
          <p>kucc</p>
        </Link>
        <Link to="/rules">
          <p>공지사항</p>
        </Link>
      </S.NavBarLogoContainer>
      <S.NavBarMenuContainer>
        {user.isLogin === true ? (
          <S.NavBarAuthOn>
            <p>HELLO {user.currentUser.displayName}!</p>
            <div onClick={myPage}>MY</div>
            <div onClick={logout}>로그아웃</div>
          </S.NavBarAuthOn>
        ) : (
          <S.NavBarAuth>
            <Link to="/login">
              <p>LOGIN</p>
            </Link>
            <Link to="/signup">
              <p>JOIN</p>
            </Link>
          </S.NavBarAuth>
        )}
      </S.NavBarMenuContainer>
    </S.NavBarContainer>
  );
}
