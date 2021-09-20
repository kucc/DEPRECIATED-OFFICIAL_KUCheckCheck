import React from "react";
import { BiSearch } from "react-icons/bi";
import * as S from "../style";

function PMainSearch() {
  return (
    <>
      <S.SearchContainer>
        <S.SearchBar placeholder="세션/스터디명 ex) 바닐라 자바스크립트 세션" />
        <S.SearchBtn>
          <BiSearch />
        </S.SearchBtn>
      </S.SearchContainer>
    </>
  );
}
export default PMainSearch;
