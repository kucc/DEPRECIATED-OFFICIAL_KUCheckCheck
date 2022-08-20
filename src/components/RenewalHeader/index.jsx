import React from 'react';
import { useHistory } from 'react-router-dom';

import cx from 'classnames';
import PropTypes from 'prop-types';

import { HomeIcon } from '@/svg';
import { BLACK, RED } from '@utility/COLORS';

import { StyleActive, StyledHeaderContainer, StyledLinkButton } from './style';

export const RenewalHeader = ({ pathname }) => {
  const history = useHistory();

  const isMainActive = pathname === '/main';
  const isTestActive = pathname === '/test';

  const handleLink = (path) => {
    history.push(path);
  }
  return (
    <StyledHeaderContainer>
      <StyledLinkButton onClick={() => {handleLink('/main')}}>
        <StyleActive className={cx({ active: isMainActive })}>
          <HomeIcon fill={isMainActive ? RED : BLACK} />
          <span>홈 화면</span>
        </StyleActive>
      </StyledLinkButton>
      <StyledLinkButton onClick={() => {handleLink('/test')}}>
        <StyleActive className={cx({ active: isTestActive })}>
          <HomeIcon fill={isTestActive ? RED : BLACK} />
          <span>활동 개설</span>
        </StyleActive>
      </StyledLinkButton>
    </StyledHeaderContainer>
  );
};

RenewalHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
};
