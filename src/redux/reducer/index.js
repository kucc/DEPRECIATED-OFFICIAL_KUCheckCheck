// reducer를 전역으로 뿌려줌

import { combineReducers } from "redux";
import user from "./user_reducer";
import search from "./search_reducer";
const rootReducer = combineReducers({
  user,
  search,
});

export default rootReducer;
