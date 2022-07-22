import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

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
      <StyledFooterContainer>
        <StyledFooterBox>
          <StyledFooterTitle>Creaters</StyledFooterTitle>
          <StyledFooterDesc>바닐라 자바칩</StyledFooterDesc>
          <StyledFooterVerticalLine />
          <StyledFooterDesc>곽나경 김채린 박가영 정인아</StyledFooterDesc>
        </StyledFooterBox>
        <StyledFooterBox>
          <StyledFooterTitle>Developers</StyledFooterTitle>
          <StyledFooterDesc>KUCHECKCHECK</StyledFooterDesc>
          <StyledFooterVerticalLine />
          <StyledFooterDesc>
            강태웅 김세진 김채린 명재위 이희준 정인아
          </StyledFooterDesc>
        </StyledFooterBox>
        <StyledHorizontalLine />
        <StyledFooterBox>
          <StyledFooterTitle>Github</StyledFooterTitle>
          <StyledFooterLink
            href='https://github.com/kucc/KUCheckCheck'
            target='_blank'>
            https://github.com/kucc/KUCheckCheck
          </StyledFooterLink>
        </StyledFooterBox>
        <>
          <StyledFooterBox>
            <StyledFooterTitle>KUCC</StyledFooterTitle>
            <StyledFooterLink href='https://kucc.co.kr/' target='_blank'>
              https://kucc.co.kr/
            </StyledFooterLink>
          </StyledFooterBox>
          <StyledFooterDesc
            style={{
              marginLeft: isMobile ? '70px' : '200px',
              marginTop: '-7px',
            }}>
            Korea University Computer Club (고려대학교 중앙 컴퓨터 동아리)
          </StyledFooterDesc>
        </>
        <StyledFooterBox>
          <StyledFooterTitle>Contact</StyledFooterTitle>
          <StyledFooterDesc>jjs01hwang@gmail.com (이희준)</StyledFooterDesc>
        </StyledFooterBox>
        <StyledFooterImgBox>
          <DefaultLogo
            width={isMobile ? 70 : 124}
            height={isMobile ? 70 : 124}
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
