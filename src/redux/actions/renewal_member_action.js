import axios from 'axios';

import { removeToken } from '@/api';

import {
  GET_PROFILE,
  LOGIN,
  SET_MEMBER,
  SET_PROFILE_ID,
  SIGNUP,
  generateKeys,
} from './types';

export const getLoginKeys = generateKeys(LOGIN);

export async function loginRequest(data) {
  return await axios
    .post('/auth/signin', data)
    .then(response => {
      localStorage.setItem('accessToken', response.data.accessToken);

      return response;
    })
    .catch(error => {
      console.log(error);

      return error;
    });
}

export function setMember(data) {
  return {
    type: SET_MEMBER,
    data,
  };
}

export function logoutMember() {
  removeToken();
}

export const getSignupKeys = generateKeys(SIGNUP);

export async function signUpRequest(data) {
  return await axios
    .post('/auth/signup', data)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function setProfileId(user_id) {
  return {
    type: SET_PROFILE_ID,
    data: user_id,
  };
}

export const getProfileKeys = generateKeys(GET_PROFILE);

export async function getProfileRequest(user_id) {
  return await axios
    .get(`/auth/user/${user_id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
      alert('유저를 찾을 수 없습니다.');
      return error;
    });
}
