import { GET_COMMON_INFO, GET_COMMON_INFO_SUCCESS, GET_COMMON_INFO_FAILURE } from "@redux/actions/types";
import { INIT, SUCCESS, FAILURE } from "@utility/ALERT_MESSAGE";

const initialSearchState = {
  commonInfo: {
    status: INIT,
    data: {}
  },
};

export default function (state = initialSearchState, action) {
  switch (action.type) {
    case GET_COMMON_INFO:
      return {
        ...state,
        commonInfo: {
          status: INIT,
          data: {}
        }
      };
    case GET_COMMON_INFO_SUCCESS:
      return {
        ...state,
        commonInfo: {
          status: SUCCESS,
          data: action.data
        }
      }
    case GET_COMMON_INFO_FAILURE:
      return {
        ...state,
        commonInfo: {
          status: FAILURE,
          data: {}
        }
      };
    default:
      return state;
  }
}