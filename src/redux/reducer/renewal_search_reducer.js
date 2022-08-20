// reducer의 기능 구현
import { SET_STRING_INPUT, SET_LANGUAGE } from '../actions/types';

const initialSearchState = {
  stringInput: '', // 문자열 입력
  language: '', // 사용 언어
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
    default:
      return state;
  }
}
