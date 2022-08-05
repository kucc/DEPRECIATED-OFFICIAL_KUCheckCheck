import React from 'react';

import { DefaultLogo } from '../DefaultLogo';
import {
  StyledContent,
  StyledCopyRight,
  StyledFooterContainer,
  StyledFooterGithubLink,
  StyledHorizontalLine,
  StyledRow,
  StyledSubContent,
  StyledTitle,
} from './style';

export const RenewalFooter = () => {
  return (
    <StyledFooterContainer>
      <StyledRow>
        <StyledTitle>Creators</StyledTitle>
        <StyledContent>
          <StyledSubContent>바닐라 자바칩</StyledSubContent>
          곽나경 · 김채린 · 박가영 · 정인아
        </StyledContent>
      </StyledRow>
      <StyledRow>
        <StyledTitle>Developers</StyledTitle>
        <StyledContent>
          <StyledSubContent>KUCHECKCHECK</StyledSubContent>
          김세진 · 김채린 · 명재위 · 이희준 · 정인아
        </StyledContent>
      </StyledRow>
      <StyledRow>
        <StyledTitle>Github</StyledTitle>
        <StyledFooterGithubLink
          href='https://github.com/kucc/KUCheckCheck'
          target='_blank'>
          https://github.com/kucc/KUCheckCheck
        </StyledFooterGithubLink>
      </StyledRow>
      <StyledRow>
        <StyledTitle>Contact</StyledTitle>
        <StyledContent>
          Korea University Computer Club (고려대학교 중앙 컴퓨터 동아리)
        </StyledContent>
      </StyledRow>
      <StyledHorizontalLine />
      <DefaultLogo width={71} height={71} logoName='type-1-3' />
      <StyledCopyRight>Copyright ⓒ KUCC All Rights Reserved.</StyledCopyRight>
    </StyledFooterContainer>
  );
};
