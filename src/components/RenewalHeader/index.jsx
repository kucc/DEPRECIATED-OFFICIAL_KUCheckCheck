import React from 'react';

import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HomeIcon } from '@/svg';

import { DefaultLogo } from '..';
import { StyledHeaderContainer, StyledLinkButton } from './style';

export const RenewalHeader = ({ pathname }) => {
  const isMainActive = pathname === '/main';
  const isTestActive = pathname === '/test';
  return (
    <StyledHeaderContainer>
      <Link to='/'>
        <DefaultLogo
          isPointer={true}
          logoName='type-1-3'
          width={114}
          height={114}
        />
      </Link>
      <StyledLinkButton to='/main' className={cx({ active: isMainActive })}>
        <HomeIcon fill={isMainActive ? 'white' : 'black'} />
        <span>홈 화면</span>
      </StyledLinkButton>
      <StyledLinkButton to='/test' className={cx({ active: isTestActive })}>
        <span>등록하기</span>
      </StyledLinkButton>
    </StyledHeaderContainer>
  );
};

RenewalHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
};
