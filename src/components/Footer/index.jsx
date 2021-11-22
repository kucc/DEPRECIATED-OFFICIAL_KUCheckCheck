import React from "react";
import { useHistory } from "react-router";
import {
  StyledFooterBox,
  StyledFooterContainer,
  StyledFooterDesc,
  StyledFooterTitle,
  StyledVerticalLine,
} from "./style";

export default function Footer() {
  const history = useHistory();

  return (
    <StyledFooterContainer>
      <StyledFooterBox>
        <StyledFooterTitle>Creaters</StyledFooterTitle>
        <StyledFooterDesc>바닐라 자바칩</StyledFooterDesc>
        <StyledVerticalLine />
        <StyledFooterDesc>곽나경 김채린 박가영 정인아</StyledFooterDesc>
      </StyledFooterBox>
      <StyledFooterBox>
        <StyledFooterTitle>Developers</StyledFooterTitle>
        <StyledFooterDesc>KUCHECKCHECK</StyledFooterDesc>
        <StyledVerticalLine />
        <StyledFooterDesc>김세진 김채린 명재위 이희준 정인아</StyledFooterDesc>
      </StyledFooterBox>
      <br />
      <StyledFooterBox>
        <StyledFooterTitle>Github</StyledFooterTitle>
        <StyledFooterDesc>
          https://github.com/kucc/KUCheckCheck
        </StyledFooterDesc>
      </StyledFooterBox>
      <>
        <StyledFooterBox>
          <StyledFooterTitle>KUCC</StyledFooterTitle>
          <StyledFooterDesc>https://kucc.co.kr/</StyledFooterDesc>
        </StyledFooterBox>
        <StyledFooterDesc style={{ marginLeft: "200px", marginTop: "-7px" }}>
          Korea University Computer Club(고려대학교 중앙 컴퓨터 동아리)
        </StyledFooterDesc>
      </>
      <StyledFooterBox>
        <StyledFooterTitle>Contact</StyledFooterTitle>
        <StyledFooterDesc>jjs01hwang@gmail.com(이희준)</StyledFooterDesc>
      </StyledFooterBox>
      <div style={{ display: "grid", placeItems: "center" }}>
        <img
          onClick={() => history.push("/")}
          src="img/logo/type-1-3.png"
          style={{ width: "100px", cursor: "pointer" }}
        />
        <div>Copyright ⓒ KUCC All Rights Reserved</div>
      </div>
    </StyledFooterContainer>
  );
}
