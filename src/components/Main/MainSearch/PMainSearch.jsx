import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/actions/search_action";
import * as S from "../style";
import { StyledToggle } from "./style";

function PMainSearch() {
  const [searchTerm, setsearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearchTerm = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <S.SearchContainer>
        <S.SearchBtn>
          <BiSearch />
        </S.SearchBtn>
        <S.SearchBar
          onChange={handleSearchTerm}
          placeholder="세션/스터디명 ex) 바닐라 자바스크립트 세션"
        />
      </S.SearchContainer>
      <div style={{ display: "flex", marginTop: "25px" }}>
        <StyledToggle># Web</StyledToggle>
        <StyledToggle># App</StyledToggle>
        <StyledToggle># 알고리즘</StyledToggle>
        <StyledToggle># 머신러닝</StyledToggle>
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <StyledToggle># C</StyledToggle>
        <StyledToggle># Python</StyledToggle>
        <StyledToggle># Javascript</StyledToggle>
        <StyledToggle># Java</StyledToggle>
      </div>
      {/* 프론트 백엔드?? */}
    </>
  );
}
export default PMainSearch;
