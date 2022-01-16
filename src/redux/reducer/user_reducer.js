// reducer의 기능 구현
import { CLEAR_USER, SET_USER } from '../actions/types';

const initialUserState = {
  currentUser: null,
  isLogin: false,
  category: null,
};

export default function (state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isLogin: true,
        currentUser: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        isLogin: false,
        currentUser: null,
      };
    default:
      return state;
  }
}
