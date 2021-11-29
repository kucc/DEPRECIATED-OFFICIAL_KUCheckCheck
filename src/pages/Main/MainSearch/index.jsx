import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  setCategory,
  setLanguage,
  setSearch,
} from "../../../redux/actions/search_action";
import * as S from "../style";
import { StyledTag } from "./style";

function MainSearch() {
  const [selectedCategory, setselectedCategory] = useState("");
  const [selectedLanguage, setselectedLanguage] = useState("");

  const dispatch = useDispatch();

  const changeSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const categoryData = ["Web", "App", "알고리즘", "머신러닝"];
  const languageData = ["C", "Python", "Javascript", "Java"];

  const handleCategory = (tag) => {
    if (tag === selectedCategory) {
      setselectedCategory("");
      dispatch(setCategory(""));
    } else {
      setselectedCategory(tag);
      dispatch(setCategory(tag));
    }
  };

  const handleLanguage = (tag) => {
    if (tag === selectedLanguage) {
      setselectedLanguage("");
      dispatch(setLanguage(""));
    } else {
      setselectedLanguage(tag);
      dispatch(setLanguage(tag));
    }
  };

  return (
    <>
      <S.SearchContainer>
        <S.SearchBtn>
          <BiSearch />
        </S.SearchBtn>
        <S.SearchBar
          onChange={changeSearch}
          placeholder="세션/스터디명 ex) 바닐라 자바스크립트 세션"
        />
      </S.SearchContainer>
      {categoryData.map((tag) => (
        <StyledTag
          key={tag}
          checked={selectedCategory === tag}
          onClick={() => handleCategory(tag)}
        >
          # {tag}
        </StyledTag>
      ))}
      <br />
      {languageData.map((tag) => (
        <StyledTag
          key={tag}
          checked={selectedLanguage === tag}
          onClick={() => handleLanguage(tag)}
        >
          # {tag}
        </StyledTag>
      ))}
      {/* 프론트 백엔드?? */}
    </>
  );
}
export default MainSearch;
