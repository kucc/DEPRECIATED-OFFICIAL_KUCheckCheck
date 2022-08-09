// reducer를 전역으로 뿌려줌
import { combineReducers } from 'redux';

import search from './search_reducer';
import user from './user_reducer';
import common from './common_reducer';
import course from './course_reducer';

const rootReducer = combineReducers({
  user,
  search,
  common,
  course
});

export default rootReducer;
