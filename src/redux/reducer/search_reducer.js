// reducer의 기능 구현

import { SET_CATEGORY, SET_LANGUAGE, SET_SEARCH } from "../actions/types";

const initialSearchState = {
  searchTerm: "",
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
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
