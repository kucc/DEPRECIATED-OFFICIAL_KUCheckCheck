import { generateKeys, generateActions, LOGIN, SET_MEMBER, REMOVE_MEMBER, SIGNUP } from './types';
import axios from '@/api/apiBase';
import { removeToken } from '@/api/TokenAction';

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
                console.log(error)
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
    removeToken();
    
    return {
        type: REMOVE_MEMBER,
    }
}

export const getSignupKeys = generateKeys(SIGNUP);
const getSignupActions = generateActions(getSignupKeys);

export function signUpRequest(data) {
    return (dispatch) => {
        dispatch(getSignupActions.request());
        return axios.post('/auth/signup', data)
            .then(() => {
                dispatch(getSignupActions.success());
            }).catch((error) => {
                console.log(error);
                dispatch(getSignupActions.failure(error));
            })
    }
}