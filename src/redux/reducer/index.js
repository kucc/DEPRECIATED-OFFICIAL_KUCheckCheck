// reducer를 전역으로 뿌려줌
import { combineReducers } from 'redux';

import main from './renewal_main_reducer';
import user from './user_reducer';
import common from './renewal_common_reducer';
import course from './renewal_course_reducer';

const rootReducer = combineReducers({
  user,
  main,
  common,
  course
});

export default rootReducer;
