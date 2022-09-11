import { generateKeys, generateActions, LOGIN, SET_MEMBER, REMOVE_MEMBER } from './types';
import axios from '@/api/apiBase';


export const getLoginKeys = generateKeys(LOGIN);
const getLoginActions = generateActions(getLoginKeys);

export function loginRequest(data) {
    return (dispatch) => {
        dispatch(getLoginActions.request());
        return axios.post('/auth/signin', data)
            .then((response) => {
                localStorage.setItem('accessToken', response.data.accessToken);
                dispatch(getLoginActions.success());
            }).catch((error) => {
                console.log(error);
                dispatch(getLoginActions.failure(error));
            });
    }
}

export function setMember(data) {
    return {
        type: SET_MEMBER,
        data
    }
}

export function logoutMember() {
    localStorage.removeItem('accessToken');
    return {
        type: REMOVE_MEMBER,
    }
}
