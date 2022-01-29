import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DefaultLogo } from '../DefaultLogo';
import * as S from './style';

const PNavBar = ({ user, logout, myPage }) => {
  const [hoverState, sethoverState] = useState('');
  return (
    <>
      {/* Left Items */}
      <S.NavBarTextContainer>
        <Link to='/'>
          <S.NavBarLogoConatiner>
            <DefaultLogo
              isPointer={true}
              logoName='type-1-3'
              width={90}
              height={90}
            />
          </S.NavBarLogoConatiner>
        </Link>
        <Link to='/rules'>
          <S.NavBarText
            text='공지사항'
            hoverState={hoverState}
            onMouseEnter={() => sethoverState('공지사항')}
            onMouseLeave={() => sethoverState('')}>
            공지사항
          </S.NavBarText>
        </Link>
        <Link to='/timetable'>
          <S.NavBarText
            text='시간표'
            hoverState={hoverState}
            onMouseEnter={() => sethoverState('시간표')}
            onMouseLeave={() => sethoverState('')}>
            시간표
          </S.NavBarText>
        </Link>
      </S.NavBarTextContainer>
      {/* right Items */}
      <S.NavBarTextContainer>
        {user.isLogin === true ? (
          <>
            <S.NavBarText>HELLO {user.currentUser.displayName}!</S.NavBarText>
            <S.NavBarText
              text='MY'
              hoverState={hoverState}
              onMouseEnter={() => sethoverState('MY')}
              onMouseLeave={() => sethoverState('')}
              onClick={myPage}>
              MY
            </S.NavBarText>
            <S.NavBarText
              text='로그아웃'
              hoverState={hoverState}
              onMouseEnter={() => sethoverState('로그아웃')}
              onMouseLeave={() => sethoverState('')}
              onClick={logout}>
              로그아웃
            </S.NavBarText>
          </>
        ) : (
          <>
            <Link to='/login'>
              <S.NavBarText
                text='로그인'
                hoverState={hoverState}
                onMouseEnter={() => sethoverState('로그인')}
                onMouseLeave={() => sethoverState('')}>
                LOGIN
              </S.NavBarText>
            </Link>
            <Link to='/signup'>
              <S.NavBarText
                text='회원가입'
                hoverState={hoverState}
                onMouseEnter={() => sethoverState('회원가입')}
                onMouseLeave={() => sethoverState('')}>
                JOIN
              </S.NavBarText>
            </Link>
          </>
        )}
      </S.NavBarTextContainer>
    </>
  );
};

export default PNavBar;

PNavBar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  myPage: PropTypes.func,
};
