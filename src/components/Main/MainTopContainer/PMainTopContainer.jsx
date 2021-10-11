import React from "react";
import MainSearch from "../MainSearch";
import * as S from "../style";

function PMainTopContainer() {
  return (
    <>
      <S.MainTopWrapper>
        <div>
          <S.MainTitle1>
            <p>KUCC</p>
          </S.MainTitle1>
          <S.MainTitle2>
            <p>길라잡이 </p>
          </S.MainTitle2>
          <S.MainExplain>
            <p>고려대학교 중앙 컴퓨터 동아리 세션관리시스템</p>
          </S.MainExplain>
          <MainSearch />
        </div>
        <div>
          <img
            style={{ width: "450px", marginTop: "-40px" }}
            src={"./img/KUCCicon.png"}
          />
        </div>
      </S.MainTopWrapper>
    </>
  );
}
export default PMainTopContainer;
