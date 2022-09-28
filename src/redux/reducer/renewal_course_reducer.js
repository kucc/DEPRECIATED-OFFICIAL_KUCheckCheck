import {
  GET_MAIN_COURSE,
  GET_MAIN_COURSE_FAILURE,
  GET_MAIN_COURSE_SUCCESS,
} from '@redux/actions/types';

import { FAILURE, INIT, SUCCESS } from '@utility/ALERT_MESSAGE';

const initialSearchState = {
  mainCourse: {
    status: INIT,
    data: [],
  },
};

export default function (state = initialSearchState, action) {
  switch (action.type) {
    case GET_MAIN_COURSE:
      return {
        ...state,
        mainCourse: {
          status: INIT,
          data: [],
        },
      };
    case GET_MAIN_COURSE_SUCCESS:
      return {
        ...state,
        mainCourse: {
          status: SUCCESS,
          data: action.data,
        },
      };
    case GET_MAIN_COURSE_FAILURE:
      return {
        ...state,
        mainCourse: {
          status: FAILURE,
          data: [],
        },
      };
    default:
      return state;
  }
}
