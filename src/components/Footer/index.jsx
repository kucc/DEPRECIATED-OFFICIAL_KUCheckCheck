import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router';

import { DefaultLogo } from '../DefaultLogo';
import {
  StyledFooterBox,
  StyledFooterContainer,
  StyledFooterDesc,
  StyledFooterImgBox,
  StyledFooterLink,
  StyledFooterTitle,
  StyledFooterVerticalLine,
  StyledHorizontalLine,
} from './style';

export const Footer = () => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const onImgClick = () => {
    const path = document.location.pathname;
    // 현재 메인페이지라면
    if (path === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      history.push('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <StyledFooterContainer isMobile={isMobile}>
        <StyledFooterBox>
          <StyledFooterTitle isMobile={isMobile}>Creaters</StyledFooterTitle>
          <StyledFooterDesc isMobile={isMobile}>바닐라 자바칩</StyledFooterDesc>
          <StyledFooterVerticalLine />
          <StyledFooterDesc isMobile={isMobile}>
            곽나경 김채린 박가영 정인아
          </StyledFooterDesc>
        </StyledFooterBox>
        <StyledFooterBox>
          <StyledFooterTitle isMobile={isMobile}>Developers</StyledFooterTitle>
          <StyledFooterDesc isMobile={isMobile}>KUCHECKCHECK</StyledFooterDesc>
          <StyledFooterVerticalLine />
          <StyledFooterDesc isMobile={isMobile}>
            강태웅 김세진 김채린 명재위 이희준 정인아
          </StyledFooterDesc>
        </StyledFooterBox>
        <StyledHorizontalLine />
        <StyledFooterBox>
          <StyledFooterTitle isMobile={isMobile}>Github</StyledFooterTitle>
          <StyledFooterLink
            isMobile={isMobile}
            href='https://github.com/kucc/KUCheckCheck'>
            https://github.com/kucc/KUCheckCheck
          </StyledFooterLink>
        </StyledFooterBox>
        <>
          <StyledFooterBox>
            <StyledFooterTitle isMobile={isMobile}>KUCC</StyledFooterTitle>
            <StyledFooterLink href='https://kucc.co.kr/'>
              https://kucc.co.kr/
            </StyledFooterLink>
          </StyledFooterBox>
          <StyledFooterDesc
            style={{
              marginLeft: isMobile ? '70px' : '200px',
              marginTop: '-7px',
            }}
            isMobile={isMobile}>
            Korea University Computer Club (고려대학교 중앙 컴퓨터 동아리)
          </StyledFooterDesc>
        </>
        <StyledFooterBox>
          <StyledFooterTitle isMobile={isMobile}>Contact</StyledFooterTitle>
          <StyledFooterDesc isMobile={isMobile}>
            jjs01hwang@gmail.com (이희준)
          </StyledFooterDesc>
        </StyledFooterBox>
        <StyledFooterImgBox>
          <DefaultLogo
            width={isMobile ? 50 : 124}
            height={isMobile ? 50 : 124}
            logoName='type-1-3'
            style={{ pointer: 'cursor' }}
            isPointer={true}
            onClick={onImgClick}
          />
          <StyledFooterDesc isMobile={isMobile}>
            Copyright ⓒ KUCC All Rights Reserved
          </StyledFooterDesc>
        </StyledFooterImgBox>
      </StyledFooterContainer>
    </>
  );
};
