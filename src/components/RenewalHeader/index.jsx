import React from 'react';

import cx from 'classnames';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  CheckCircleIcon,
  EditIcon,
  HomeIcon,
  LockStatesIcon,
  NoticeIcon,
} from '@/svg/header';
import { BLACK, RED } from '@utility/COLORS';
import { RENEWAL_PATH } from '@utility/COMMON_FUNCTION';

import { StyleActive, StyledHeaderContainer, StyledLinkButton } from './style';

export const RenewalHeader = ({ pathname }) => {
  const history = useHistory();

  const handleLink = path => {
    history.push(path);
  };

  return (
    <StyledHeaderContainer>
      <StyledLinkButton
        onClick={() => {
          handleLink(RENEWAL_PATH.main);
        }}>
        <StyleActive className={cx({ active: pathname === RENEWAL_PATH.main })}>
          <HomeIcon fill={pathname === RENEWAL_PATH.main ? RED : BLACK} />
          <span>홈 화면</span>
        </StyleActive>
      </StyledLinkButton>
      <StyledLinkButton
        onClick={() => {
          handleLink(RENEWAL_PATH.courseCreate);
        }}>
        <StyleActive
          className={cx({ active: pathname === RENEWAL_PATH.courseCreate })}>
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
        <StyleActive
          className={cx({ active: pathname === RENEWAL_PATH.attendance })}>
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
        <StyleActive
          className={cx({ active: pathname === RENEWAL_PATH.notice })}>
          <NoticeIcon fill={pathname === RENEWAL_PATH.notice ? RED : BLACK} />
          <span>공지사항</span>
        </StyleActive>
      </StyledLinkButton>
      <StyledLinkButton
        onClick={() => {
          handleLink(RENEWAL_PATH.admin);
        }}>
        <StyleActive
          className={cx({ active: pathname === RENEWAL_PATH.admin })}>
          <LockStatesIcon
            fill={pathname === RENEWAL_PATH.admin ? RED : BLACK}
          />
          <span>관리자</span>
        </StyleActive>
      </StyledLinkButton>
    </StyledHeaderContainer>
  );
};

RenewalHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
};
