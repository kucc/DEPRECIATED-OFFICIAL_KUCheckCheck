// reducer를 전역으로 뿌려줌
import { combineReducers } from 'redux';

import user from './auth_reducer';
import member from './renewal_member_reducer';
import main from './renewal_main_reducer';
import common from './renewal_common_reducer';
import course from './renewal_course_reducer';

const rootReducer = combineReducers({
  user,
  member,
  main,
  common,
  course
});

export default rootReducer;
