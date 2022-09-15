// reducer의 기능 구현
import { SET_STRING_INPUT, SET_LANGUAGE, SET_HAMBURGER } from '../actions/types';

const initialSearchState = {
  stringInput: '', // 문자열 입력
  language: '', // 사용 언어
  isHamburger: false // 모바일 햄버거 
};

export default function (state = initialSearchState, action) {
  switch (action.type) {
    case SET_STRING_INPUT:
      return {
        ...state,
        stringInput: action.data,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.data,
      };
    case SET_HAMBURGER:
      return {
        ...state,
        isHamburger: action.data,
      };
    default:
      return state;
  }
}
