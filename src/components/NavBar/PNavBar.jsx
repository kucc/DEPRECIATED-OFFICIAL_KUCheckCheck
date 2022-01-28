import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DefaultLogo } from '../DefaultLogo';
import * as S from './style';

const PNavBar = ({ user, logout, myPage }) => {
  const [hoverState, sethoverState] = useState('');
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
        <Link to='/rules'>
          <S.NavBarTextContainer
            text='공지사항'
            hoverState={hoverState}
            onMouseEnter={() => sethoverState('공지사항')}
            onMouseLeave={() => sethoverState('')}>
            공지사항
          </S.NavBarTextContainer>
        </Link>
        <Link to='/timetable'>
          <S.NavBarTextContainer
            text='시간표'
            hoverState={hoverState}
            onMouseEnter={() => sethoverState('시간표')}
            onMouseLeave={() => sethoverState('')}>
            시간표
          </S.NavBarTextContainer>
        </Link>
      </S.NavBarLogoContainer>
      <S.NavBarMenuContainer>
        {user.isLogin === true ? (
          <S.NavBarAuthOn>
            <p>HELLO {user.currentUser.displayName}!</p>
            <S.NavBarTextContainer
              text='MY'
              hoverState={hoverState}
              onMouseEnter={() => sethoverState('MY')}
              onMouseLeave={() => sethoverState('')}
              onClick={myPage}>
              MY
            </S.NavBarTextContainer>
            <S.NavBarTextContainer
              text='로그아웃'
              hoverState={hoverState}
              onMouseEnter={() => sethoverState('로그아웃')}
              onMouseLeave={() => sethoverState('')}
              onClick={logout}>
              로그아웃
            </S.NavBarTextContainer>
          </S.NavBarAuthOn>
        ) : (
          <S.NavBarAuth>
            <Link to='/login'>
              <S.NavBarTextContainer
                text='로그인'
                hoverState={hoverState}
                onMouseEnter={() => sethoverState('로그인')}
                onMouseLeave={() => sethoverState('')}>
                LOGIN
              </S.NavBarTextContainer>
            </Link>
            <Link to='/signup'>
              <S.NavBarTextContainer
                text='회원가입'
                hoverState={hoverState}
                onMouseEnter={() => sethoverState('회원가입')}
                onMouseLeave={() => sethoverState('')}>
                JOIN
              </S.NavBarTextContainer>
            </Link>
          </S.NavBarAuth>
        )}
      </S.NavBarMenuContainer>
    </>
  );
};

export default PNavBar;

PNavBar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  myPage: PropTypes.func,
};
