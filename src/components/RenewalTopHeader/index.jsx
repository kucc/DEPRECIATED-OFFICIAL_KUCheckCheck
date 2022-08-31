import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setHamburgerRequest } from '@redux/actions/renewal_main_action';

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

  const { isLogin, currentUser: user } = useSelector(state => ({
    isLogin: state.user.isLogin,
    currentUser: state.user.currentUser,
  }));

  const dropDownRef = useRef(null);
  const [isLoginOpen, setIsLoginOpen] = useDetectClose(dropDownRef, false);

  const isHamburger = useSelector(state => state.main.isHamburger);

  const handleHamburger = () => {
    if (!isHamburger) {
      document.body.classList.add('open-modal');
    } else {
      document.body.classList.remove('open-modal');
    }
    dispatch(setHamburgerRequest(!isHamburger));
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
          onClick={handleHamburger}
        />
        <StyledLeftContainer>
          <span>
            <StyledTimeTableLink to={RENEWAL_PATH.timeTable}>
              동방 시간표
            </StyledTimeTableLink>
            {isLogin ? (
              <>
                <StyledMenuButton onClick={() => setIsLoginOpen(!isLoginOpen)}>
                  <StyledUserContainer>
                    <StyledUserName>{user.displayName}</StyledUserName>님
                  </StyledUserContainer>
                  <StyledDownArrow width='4' thin='2' />
                </StyledMenuButton>
                <StyledDropContent ref={dropDownRef} isLoginOpen={isLoginOpen}>
                  <div>내정보</div>
                  <div></div>
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
