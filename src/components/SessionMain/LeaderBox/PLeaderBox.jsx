import React from "react";
import { BiLink } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import * as S from "../style";

function PLeaderBox({ name, intro, link }) {
  return (
    <>
      <S.LeaderWrapper>
        <S.LeaderImg>{/* 이미지 집어넣기 */}</S.LeaderImg>
        <S.LeaderInfo>
          <S.LeaderName>
            <p>{name}</p>
            <p>세션장</p>
          </S.LeaderName>
          <S.LeaderIntro>
            <p>{intro}</p>
          </S.LeaderIntro>
          <S.LeaderLink>
            <BiLink />
            <p>{link}</p>
          </S.LeaderLink>
        </S.LeaderInfo>
        <S.LeaderProfile>
          <AiOutlineArrowRight />
        </S.LeaderProfile>
      </S.LeaderWrapper>
    </>
  );
}
export default PLeaderBox;
