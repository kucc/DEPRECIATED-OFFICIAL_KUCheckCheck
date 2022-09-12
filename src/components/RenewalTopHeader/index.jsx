import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { setHamburgerRequest } from '@redux/actions/renewal_main_action';
import { logoutMember } from '@redux/actions/renewal_member_action';

import useDetectClose from '@hooks/useDetectClose';
import { RENEWAL_PATH } from '@utility/COMMON_FUNCTION';
import { StyledDownArrow } from '@utility/COMMON_STYLE';

import HamburgerIcon from '../../svg/header/mobileHamburger.svg';
import {
  StyledDropContent,
  StyledLeftContainer,
  StyledLoginLink,
  StyledMainLogo,
  StyledMenuButton,
  StyledMobileHamburgerButton,
  StyledTimeTableLink,
  StyledTopHeader,
  StyledTopHeaderContainer,
  StyledUserContainer,
  StyledUserName,
} from './style';

export const RenewalTopHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const member = useSelector(state => state.member.currentMember);
  const isHamburger = useSelector(state => state.main.isHamburger);

  const dropDownRef = useRef(null);
  const [isLoginOpen, setIsLoginOpen] = useDetectClose(dropDownRef, false);

  const handleMobileHamburger = () => {
    if (!isHamburger) {
      document.body.classList.add('open-modal');
    } else {
      document.body.classList.remove('open-modal');
    }
    dispatch(setHamburgerRequest(!isHamburger));
  };

  const handleLogout = () => {
    dispatch(logoutMember());

    window.alert('로그아웃이 되었습니다!');
    window.location.href = RENEWAL_PATH.main;
  };

  return (
    <StyledTopHeaderContainer>
      <StyledTopHeader>
        <StyledMainLogo
          src={'/img/logo/type-1-3.svg'}
          alt='logo'
          onClick={() => history.push(RENEWAL_PATH.main)}
        />
        <StyledMobileHamburgerButton
          src={HamburgerIcon}
          onClick={handleMobileHamburger}
        />
        <StyledLeftContainer>
          <span>
            <StyledTimeTableLink to={RENEWAL_PATH.timeTable}>
              동방 시간표
            </StyledTimeTableLink>
            {member ? (
              <>
                <StyledMenuButton onClick={() => setIsLoginOpen(!isLoginOpen)}>
                  <StyledUserContainer>
                    <StyledUserName>{member.name}</StyledUserName>님
                  </StyledUserContainer>
                  <StyledDownArrow width='4' thin='2' />
                </StyledMenuButton>
                <StyledDropContent ref={dropDownRef} isLoginOpen={isLoginOpen}>
                  <Link to={RENEWAL_PATH.profile}>내정보</Link>
                  <button onClick={handleLogout}>로그아웃</button>
                </StyledDropContent>
              </>
            ) : (
              <StyledLoginLink to={RENEWAL_PATH.login}>LOGIN</StyledLoginLink>
            )}
          </span>
        </StyledLeftContainer>
      </StyledTopHeader>
    </StyledTopHeaderContainer>
  );
};
