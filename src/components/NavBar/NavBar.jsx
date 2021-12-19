import React, { useState } from "react";
// import { useRecoilValue } from "recoil";
// import { userState } from "../../recoil/userState";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as S from "./style";
import { authService } from "../../firebase";

// TODO
// NavBar 컴포넌트를 src/components 하위 항목으로 이동
// 불필요한 함수 삭제 및 스타일 분리
export default function NavBar() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const logout = async () => {
    try {
      authService.signOut();
      window.alert("로그아웃이 되었습니다!");
      window.location.replace("/");
    } catch (e) {
      alert(e.response.data.error.msg);
    }
  };
  const myPage = async () => {
    try {
      history.push(`/userpage/${user.currentUser.uid}`);
    } catch (e) {
      alert(e.response.data.error.msg);
    }
  };

  return (
    <S.NavBarContainer>
      <S.NavBarLogoContainer>
        <Link to="/">
          <img style={{ width: "90px" }} src="/img/logo/type-1-2.png" />
        </Link>
        <Link to="/rules">
          <S.NavBarTextContainer>공지사항</S.NavBarTextContainer>
        </Link>
        <Link to="/timetable">
          <S.NavBarTextContainer>시간표</S.NavBarTextContainer>
        </Link>
      </S.NavBarLogoContainer>
      <S.NavBarMenuContainer>
        {user.isLogin === true ? (
          <S.NavBarAuthOn>
            <p>HELLO {user.currentUser.displayName}!</p>
            <S.myPageButton onClick={myPage}>MY</S.myPageButton>
            <S.logOutButton onClick={logout}>로그아웃</S.logOutButton>
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
