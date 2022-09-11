import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, SET_MEMBER, REMOVE_MEMBER } from '../actions/types';
import { INIT, SUCCESS, FAILURE } from "@utility/ALERT_MESSAGE";

const initialUserState = {
    login: {
        status: INIT,
    },
    currentMember: null,
};

export default function (state = initialUserState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: {
                    state: INIT
                }
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    status: SUCCESS,
                }
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                login: {
                    status: FAILURE,
                    data: action.error
                }
            };
        case SET_MEMBER:
            return {
                ...state,
                currentMember: action.data
            }
        case REMOVE_MEMBER:
            return {
                ...state,
                currentMember: null
            }
        default:
            return state;
    }
}
