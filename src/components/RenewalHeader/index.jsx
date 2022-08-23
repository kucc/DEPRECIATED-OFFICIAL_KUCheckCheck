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

import { StyleActive, StyledHeaderContainer, StyledLinkButton } from './style';

export const RenewalHeader = ({ pathname }) => {
  const history = useHistory();

  const isMainActive = pathname === '/main';
  const isCourseCreateActive = pathname === '/course/create';
  const isAttendanceActive = pathname === '/attendance';
  const isNoticeActive = pathname === '/notice';
  const isAdminActive = pathname === '/admin';

  const handleLink = path => {
    history.push(path);
  };

  return (
    <StyledHeaderContainer>
      <StyledLinkButton
        onClick={() => {
          handleLink('/main');
        }}>
        <StyleActive className={cx({ active: isMainActive })}>
          <HomeIcon fill={isMainActive ? RED : BLACK} />
          <span>홈 화면</span>
        </StyleActive>
      </StyledLinkButton>
      <StyledLinkButton
        onClick={() => {
          handleLink('/course/create');
        }}>
        <StyleActive className={cx({ active: isCourseCreateActive })}>
          <EditIcon fill={isCourseCreateActive ? RED : BLACK} />
          <span>활동 개설</span>
        </StyleActive>
      </StyledLinkButton>
      <StyledLinkButton
        onClick={() => {
          handleLink('/attendance');
        }}>
        <StyleActive className={cx({ active: isAttendanceActive })}>
          <CheckCircleIcon fill={isAttendanceActive ? RED : BLACK} />
          <span>출결 관리</span>
        </StyleActive>
      </StyledLinkButton>
      <StyledLinkButton
        onClick={() => {
          handleLink('/notice');
        }}>
        <StyleActive className={cx({ active: isNoticeActive })}>
          <NoticeIcon fill={isNoticeActive ? RED : BLACK} />
          <span>공지사항</span>
        </StyleActive>
      </StyledLinkButton>
      <StyledLinkButton
        onClick={() => {
          handleLink('/admin');
        }}>
        <StyleActive className={cx({ active: isAdminActive })}>
          <LockStatesIcon fill={isAdminActive ? RED : BLACK} />
          <span>관리자</span>
        </StyleActive>
      </StyledLinkButton>
    </StyledHeaderContainer>
  );
};

RenewalHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
};
