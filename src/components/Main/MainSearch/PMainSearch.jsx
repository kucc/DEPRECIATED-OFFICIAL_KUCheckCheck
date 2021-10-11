import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/actions/search_action";
import * as S from "../style";

function PMainSearch() {
  const [searchTerm, setsearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearchTerm = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <S.SearchContainer>
        <S.SearchBar
          onChange={handleSearchTerm}
          placeholder="세션/스터디명 ex) 바닐라 자바스크립트 세션"
        />
        <S.SearchBtn>
          <BiSearch />
        </S.SearchBtn>
      </S.SearchContainer>
    </>
  );
}
export default PMainSearch;
