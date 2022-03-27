import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DefaultLogo } from '@components';

import { MAIN_COLOR } from '@utility';

import * as S from './style';

const MNavBar = ({ user, logout, myPage }) => {
  return (
    <>
      {/* Left Items */}
      <S.NavBarTextContainer>
        <Link to='/'>
          <S.NavBarLogoConatiner>
            <DefaultLogo
              isPointer={true}
              logoName='type-1-3'
              width={80}
              height={80}
              style={{ marginTop: '3px' }}
            />
          </S.NavBarLogoConatiner>
        </Link>
      </S.NavBarTextContainer>
      {/* Right Items */}
      <S.NavBarTextContainer>
        <Link to='/rules'>
          <S.NavBarText text='공지사항'>공지사항</S.NavBarText>
        </Link>
        <Link to='/timetable'>
          <S.NavBarText text='시간표'>시간표</S.NavBarText>
        </Link>
        {user.isLogin === true ? (
          <>
            <S.NavBarText text='MY' onClick={myPage}>
              MY
            </S.NavBarText>
            <S.NavBarText text='로그아웃' onClick={logout}>
              로그아웃
            </S.NavBarText>
          </>
        ) : (
          <>
            <Link to='/login'>
              <S.NavBarText style={{ color: MAIN_COLOR }} text='로그인'>
                LOGIN
              </S.NavBarText>
            </Link>
          </>
        )}
      </S.NavBarTextContainer>
    </>
  );
};

export default MNavBar;
MNavBar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  myPage: PropTypes.func,
};
