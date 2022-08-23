import React, { useRef } from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useDetectClose from '@hooks/useDetectClose';
import { StyledDownArrow } from '@utility/COMMON_STYLE';

import { DefaultLogo } from '..';
import {
  StyledDropContent,
  StyledLeftContainer,
  StyledLoginLink,
  StyledMenuButton,
  StyledTopHeader,
  StyledTopHeaderContainer,
  StyledUserContainer,
  StyledUserName,
} from './style';

export const RenewalTopHeader = () => {
  const history = useHistory();

  const { isLogin, currentUser: user } = useSelector(state => ({
    isLogin: state.user.isLogin,
    currentUser: state.user.currentUser,
  }));

  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  return (
    <StyledTopHeaderContainer>
      <StyledTopHeader>
        <DefaultLogo
          logoName='type-1-3'
          width={103}
          height={103}
          onClick={() => history.push('/')}
          isPointer={true}
        />
        <StyledLeftContainer>
          {isLogin ? (
            <>
              <StyledMenuButton onClick={() => setIsOpen(!isOpen)}>
                <StyledUserContainer>
                  <StyledUserName>{user.displayName}</StyledUserName>님
                </StyledUserContainer>
                <StyledDownArrow width='4' thin='2' />
              </StyledMenuButton>
              <StyledDropContent ref={dropDownRef} isOpen={isOpen}>
                <div>내정보</div>
                <div></div>
              </StyledDropContent>
            </>
          ) : (
            <StyledLoginLink to='/login'>LOGIN</StyledLoginLink>
          )}
        </StyledLeftContainer>
      </StyledTopHeader>
    </StyledTopHeaderContainer>
  );
};
