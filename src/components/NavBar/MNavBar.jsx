import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DefaultLogo } from '@components/DefaultLogo';

import * as S from './style';

const MNavBar = ({ user, logout, myPage }) => {
  return (
    <>
      <S.NavBarLogoContainer>
        <Link to='/'>
          <DefaultLogo
            isPointer={true}
            logoName='type-1-3'
            width={90}
            height={90}
          />
        </Link>
      </S.NavBarLogoContainer>
      <S.NavBarMenuContainer>
        <S.NavBarAuth>
          <Link to='/rules'>
            <S.NavBarTextContainer text='공지사항'>
              공지사항
            </S.NavBarTextContainer>
          </Link>
          <Link to='/timetable'>
            <S.NavBarTextContainer text='시간표'>시간표</S.NavBarTextContainer>
          </Link>
        </S.NavBarAuth>
        {user.isLogin === true ? (
          <S.NavBarAuthOn>
            <S.NavBarTextContainer text='MY' onClick={myPage}>
              MY
            </S.NavBarTextContainer>
            <S.NavBarTextContainer text='로그아웃' onClick={logout}>
              로그아웃
            </S.NavBarTextContainer>
          </S.NavBarAuthOn>
        ) : (
          <S.NavBarMobileLoginText>
            <Link to='/login'>
              <S.NavBarTextContainer text='로그인'>LOGIN</S.NavBarTextContainer>
            </Link>
          </S.NavBarMobileLoginText>
        )}
      </S.NavBarMenuContainer>
    </>
  );
};

export default MNavBar;
MNavBar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  myPage: PropTypes.func,
};
