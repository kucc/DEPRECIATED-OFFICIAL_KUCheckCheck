import { useEffect, useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import { FaHashtag } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import {
  setSearchLanguage,
  setSearchStringInput,
} from '@redux/actions/renewal_main_action';

import { BlackIcon } from '@components';

import useWindowDimensions from '@hooks/useWindowDimensions';

import {
  StyledQuickSearchContainer,
  StyledQuickSearchText,
  StyledSearchBar,
  StyledSearchBtn,
  StyledSearchContainer,
  StyledTag,
} from './style';

function MainSearch() {
  const dispatch = useDispatch();

  const selectedCategory = useSelector(state => state.main.language);
  const searchTerm = useSelector(state => state.main.stringInput);

  const [randomCategory, setrandomCategory] = useState([]);
  const { width } = useWindowDimensions();
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const searchValueClear = () => {
    dispatch(setSearchStringInput(''));
    dispatch(setSearchLanguage(''));
  };

  useEffect(() => {
    // random인 요소를 4개 가진 배열을 생성
    const categoryData = [
      'Web',
      'App',
      '알고리즘',
      '머신러닝',
      'C',
      'Python',
      'Javascript',
      'Java',
    ];
    var newArray = [];
    const num = isMobile ? 3 : 4;
    while (newArray.length < num) {
      const category = categoryData.splice(
        Math.floor(Math.random() * categoryData.length),
        1,
      )[0];
      newArray.push(category);
    }
    setrandomCategory(newArray);
    // redux 값을 초기화
    searchValueClear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeSearch = e => {
    dispatch(setSearchLanguage(''));

    dispatch(setSearchStringInput(e.target.value));
  };

  const handleCategory = tag => {
    if (tag !== selectedCategory) {
      // isChecked
      dispatch(setSearchStringInput(''));

      dispatch(setSearchLanguage(tag));
    } else {
      // unChecked
      searchValueClear();
    }
  };

  return (
    <>
      <StyledSearchContainer>
        <StyledSearchBtn className='out-shadow-middle border-radius-all'>
          <BiSearch />
        </StyledSearchBtn>
        <StyledSearchBar
          value={searchTerm}
          screenWidth={width}
          className='out-shadow-middle border-radius-all'
          onChange={changeSearch}
          placeholder='세션/스터디명 ex) C스터디'
        />
      </StyledSearchContainer>
      <StyledQuickSearchContainer>
        <StyledQuickSearchText>
          <BlackIcon IconComponent={<FaHashtag color='white' />} />
          &ensp;빠른 검색
        </StyledQuickSearchText>
        <div className='top-margin'>
          {randomCategory.map(tag => (
            <StyledTag
              key={tag}
              className='border-radius-all'
              checked={selectedCategory === tag}
              onClick={() => handleCategory(tag)}>
              {tag}
            </StyledTag>
          ))}
        </div>
      </StyledQuickSearchContainer>
    </>
  );
}
export default MainSearch;
