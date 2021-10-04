import React from "react";
import MainSearch from "../MainSearch";
import * as S from "../style";

function PMainTopContainer() {
  return (
    <>
      <S.MainTopWrapper
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "30em",
        }}
      >
        <div>
          <S.MainTitle>
            <p>
              KUCC
              <br />
              길라잡이{" "}
            </p>
          </S.MainTitle>
          <S.MainExplain>
            <p>고려대학교 중앙 컴퓨터 동아리 세션관리시스템</p>
          </S.MainExplain>
          <MainSearch />
        </div>
        <div>
          <img
            style={{ width: "450px", marginTop: "-40px" }}
            src="./img/KUCCicon.png"
          />
        </div>
      </S.MainTopWrapper>
    </>
  );
}
export default PMainTopContainer;
