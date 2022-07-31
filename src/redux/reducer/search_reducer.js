// reducer의 기능 구현
import { SET_CATEGORY, SET_SEARCH } from '../actions/types';

const initialSearchState = {
  searchTerm: '', // 검색 문자열
  category: '', // 빠른검색 태크
};

export default function (state = initialSearchState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}
