// reducer의 기능 구현

import { SET_SEARCH } from "../actions/types";

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
    default:
      return state;
  }
}
