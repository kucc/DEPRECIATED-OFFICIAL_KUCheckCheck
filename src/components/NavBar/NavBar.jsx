import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as S from "./style";
import { authService } from "../../firebase";
import DefaultLogo from "../DefaultLogo";

// TODO
// NavBar 컴포넌트를 src/components 하위 항목으로 이동
// 불필요한 함수 삭제 및 스타일 분리
const NavBar = ({ isMain = false }) => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const [onHovered, setOnHovered] = useState("");

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

  const renderNavBar = () => (
    <>
      <S.NavBarLogoContainer>
        <Link to="/">
          <DefaultLogo width="90px" height="90px" />
        </Link>
        <Link to="/rules">
          <S.NavBarTextContainer
            text="공지사항"
            onHovered={onHovered}
            onMouseEnter={() => setOnHovered("공지사항")}
            onMouseLeave={() => setOnHovered("")}
          >
            공지사항
          </S.NavBarTextContainer>
        </Link>
        <Link to="/timetable">
          <S.NavBarTextContainer
            text="시간표"
            onHovered={onHovered}
            onMouseEnter={() => setOnHovered("시간표")}
            onMouseLeave={() => setOnHovered("")}
          >
            시간표
          </S.NavBarTextContainer>
        </Link>
      </S.NavBarLogoContainer>
      <S.NavBarMenuContainer>
        {user.isLogin === true ? (
          <S.NavBarAuthOn>
            <p>HELLO {user.currentUser.displayName}!</p>
            <S.NavBarTextContainer
              text="MY"
              onHovered={onHovered}
              onMouseEnter={() => setOnHovered("MY")}
              onMouseLeave={() => setOnHovered("")}
              onClick={myPage}
            >
              MY
            </S.NavBarTextContainer>
            <S.NavBarTextContainer
              text="로그아웃"
              onHovered={onHovered}
              onMouseEnter={() => setOnHovered("로그아웃")}
              onMouseLeave={() => setOnHovered("")}
              onClick={logout}
            >
              로그아웃
            </S.NavBarTextContainer>
          </S.NavBarAuthOn>
        ) : (
          <S.NavBarAuth>
            <Link to="/login">
              <S.NavBarTextContainer
                text="로그인"
                onHovered={onHovered}
                onMouseEnter={() => setOnHovered("로그인")}
                onMouseLeave={() => setOnHovered("")}
              >
                LOGIN
              </S.NavBarTextContainer>
            </Link>
            <Link to="/signup">
              <S.NavBarTextContainer
                text="회원가입"
                onHovered={onHovered}
                onMouseEnter={() => setOnHovered("회원가입")}
                onMouseLeave={() => setOnHovered("")}
              >
                JOIN
              </S.NavBarTextContainer>
            </Link>
          </S.NavBarAuth>
        )}
      </S.NavBarMenuContainer>
    </>
  );

  return (
    <>
      {isMain ? (
        <S.NavBarNonShadowContainer>
          {renderNavBar()}
        </S.NavBarNonShadowContainer>
      ) : (
        <S.NavBarBackground>
          <S.NavBarShadowContainer>{renderNavBar()}</S.NavBarShadowContainer>
        </S.NavBarBackground>
      )}
    </>
  );
};

export default NavBar;
