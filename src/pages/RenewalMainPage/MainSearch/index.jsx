import React from 'react';

import { Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  setSearchLanguage,
  setSearchStringInput,
} from '@redux/actions/renewal_search_action';


import { MagnifyingGlassIcon } from '@/svg';
import { StyledDownArrow } from '@utility/COMMON_STYLE';

import {
  StyledDropDown,
  StyledMainSearchContainer,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchContainer
} from './style';

export const MainSearch = ({ currentSemester, handleCurrentSemester }) => {
  const dispatch = useDispatch();

  const { pastSemester } = useSelector(state => state.common.commonInfo.data);
  const searchStringInput = useSelector(state => state.search.stringInput);
  const searchLanguage = useSelector(state => state.search.language);

  const languageList = ['Database', 'Html', 'Javascript', 'Node', 'React', 'C'];

  const handleSearch = e => {
    dispatch(setSearchLanguage(''));

    dispatch(setSearchStringInput(e.target.value));
  };

  const handleLanguage = language => {
    dispatch(setSearchStringInput(''));

    dispatch(setSearchLanguage(language));
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
          <StyledSearchButton>20{currentSemester}학기</StyledSearchButton>
        </Dropdown>
      </StyledDropDown>
      <StyledSearchContainer>
        <StyledSearchInput
          placeholder='세션명, 세션장, 사용 언어를 검색해보세요!'
          value={searchStringInput}
          onChange={handleSearch}
        />
        <MagnifyingGlassIcon />
      </StyledSearchContainer>
      <StyledDropDown>
        <Dropdown overlay={LanguageMenu} placement='bottomLeft'>
          <StyledSearchButton>
            {searchLanguage ? (
              searchLanguage
            ) : (
              <>
                <StyledDownArrow width='5' />
                <span>사용 언어</span>
              </>
            )}
          </StyledSearchButton>
        </Dropdown>
      </StyledDropDown>
    </StyledMainSearchContainer>
  );
};

MainSearch.propTypes = {
  currentSemester: PropTypes.string,
  handleCurrentSemester: PropTypes.func,
};
