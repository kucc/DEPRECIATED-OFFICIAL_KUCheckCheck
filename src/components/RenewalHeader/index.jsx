import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setHamburgerRequest } from '@redux/actions/renewal_main_action';

import {
  CheckCircleIcon,
  EditIcon,
  HomeIcon,
  LockStatesIcon,
  NoticeIcon,
} from '@/svg/header';
import { BLACK, RED } from '@utility/COLORS';
import { RENEWAL_PATH } from '@utility/COMMON_FUNCTION';

import { DefaultLogo } from '..';
import {
  StyleActive,
  StyledHeaderContainer,
  StyledLinkButton,
  StyledMobileLogoContainer,
  StyledMobileOverlayContainer,
  StyledHorizontalLine,
  StyledMobileHamburgerContainer
} from './style';

export const RenewalHeader = ({ pathname }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isHamburger = useSelector(state => state.main.isHamburger);

  const handleLink = path => {
    closeOverlay();

    history.push(path);
  };

  const closeOverlay = () => {
    document.body.classList.remove('open-modal');
    dispatch(setHamburgerRequest(false));
  };

  return (
    <StyledMobileHamburgerContainer isHamburger={isHamburger}>
      <StyledMobileOverlayContainer
        isHamburger={isHamburger}
        onClick={closeOverlay}
      />
      <StyledHeaderContainer isHamburger={isHamburger}>
        <StyledMobileLogoContainer>
          <DefaultLogo
            logoName='type-1-3'
            width={103}
            height={103}
            onClick={() => {
              handleLink(RENEWAL_PATH.main);
            }}
            isPointer={true}
          />
          <StyledHorizontalLine />
        </StyledMobileLogoContainer>
        <StyledLinkButton
          onClick={() => {
            handleLink(RENEWAL_PATH.main);
          }}>
          <StyleActive active={pathname === RENEWAL_PATH.main}>
            <HomeIcon fill={pathname === RENEWAL_PATH.main ? RED : BLACK} />
            <span>홈 화면</span>
          </StyleActive>
        </StyledLinkButton>
        <StyledLinkButton
          onClick={() => {
            handleLink(RENEWAL_PATH.courseCreate);
          }}>
          <StyleActive active={pathname === RENEWAL_PATH.courseCreate}>
            <EditIcon
              fill={pathname === RENEWAL_PATH.courseCreate ? RED : BLACK}
            />
            <span>활동 개설</span>
          </StyleActive>
        </StyledLinkButton>
        <StyledLinkButton
          onClick={() => {
            handleLink(RENEWAL_PATH.attendance);
          }}>
          <StyleActive active={pathname === RENEWAL_PATH.attendance}>
            <CheckCircleIcon
              fill={pathname === RENEWAL_PATH.attendance ? RED : BLACK}
            />
            <span>출결 관리</span>
          </StyleActive>
        </StyledLinkButton>
        <StyledLinkButton
          onClick={() => {
            handleLink(RENEWAL_PATH.notice);
          }}>
          <StyleActive active={pathname === RENEWAL_PATH.notice}>
            <NoticeIcon fill={pathname === RENEWAL_PATH.notice ? RED : BLACK} />
            <span>공지사항</span>
          </StyleActive>
        </StyledLinkButton>
        <StyledLinkButton
          onClick={() => {
            handleLink(RENEWAL_PATH.admin);
          }}>
          <StyleActive active={pathname === RENEWAL_PATH.admin}>
            <LockStatesIcon
              fill={pathname === RENEWAL_PATH.admin ? RED : BLACK}
            />
            <span>관리자</span>
          </StyleActive>
        </StyledLinkButton>
      </StyledHeaderContainer>
    </StyledMobileHamburgerContainer>
  );
};

RenewalHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
};
