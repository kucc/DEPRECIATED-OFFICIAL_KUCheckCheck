import React, { useState } from 'react';

import { Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory, setSearch } from '@redux/actions/search_action';

import {
  StyledDropDown,
  StyledMainSearchContainer,
  StyledSearchInput,
  StyledSemesterButton,
} from './style';

export const MainSearch = ({ currentSemester, handleCurrentSemester }) => {
  const dispatch = useDispatch();

  const { pastSemester } = useSelector(state => state.common.commonInfo.data);
  const searchTerm = useSelector(state => state.search.searchTerm);
  const selectedCategory = useSelector(state => state.search.category);

  const [languageList, setLanguageList] = useState([
    'Database',
    'Html',
    'Javascript',
    'Node',
    'React',
    'C',
  ]);

  const handleSearch = e => {
    dispatch(setCategory(''));

    dispatch(setSearch(e.target.value));
  };

  const handleLanguage = language => {
    dispatch(setSearch(''));

    dispatch(setCategory(language));
  };

  const SemesterMenu = (
    <Menu>
      {pastSemester &&
        pastSemester.map((semester, key) => {
          return (
            <Menu.Item key={key}>
              <a onClick={() => handleCurrentSemester(semester)}>
                20{semester}학기
              </a>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  const LanguageMenu = (
    <Menu>
      {languageList &&
        languageList.map(res => {
          return (
            <Menu.Item key={res}>
              <a onClick={() => handleLanguage(res)}>{res}</a>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <StyledMainSearchContainer>
      <StyledDropDown>
        <Dropdown overlay={SemesterMenu} placement='bottomLeft'>
          <StyledSemesterButton>20{currentSemester}학기</StyledSemesterButton>
        </Dropdown>
      </StyledDropDown>
      <StyledSearchInput
        placeholder='세션명, 세션장, 사용 언어를 검색해보세요!'
        value={searchTerm}
        onChange={handleSearch}
      />
      <StyledDropDown>
        <Dropdown overlay={LanguageMenu} placement='bottomLeft'>
          <StyledSemesterButton>{selectedCategory ? selectedCategory : <span>사용 언어</span>}</StyledSemesterButton>
        </Dropdown>
      </StyledDropDown>
    </StyledMainSearchContainer>
  );
};

MainSearch.propTypes = {
  currentSemester: PropTypes.string,
  handleCurrentSemester: PropTypes.func,
};
