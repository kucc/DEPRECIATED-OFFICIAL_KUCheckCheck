// reducer의 타입들을 정리

export const SET_USER = 'set_user';
export const CLEAR_USER = 'clear_user';

// 아래로 리뉴얼
export const generateKeys = key => ({
  request: key,
  success: `${key}_SUCCESS`,
  failure: `${key}_FAILURE`,
});

export const generateActions = generatedKeys => ({
  request: () => ({ type: generatedKeys.request }),
  success: data => ({ type: generatedKeys.success, data }),
  failure: data => ({ type: generatedKeys.failure, data }),
});

/**
 * auth
 */
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SET_MEMBER = 'SET_MEMBER';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const SET_PROFILE_ID = 'SET_PROFILE_ID';

export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

/**
 *  main
 */
export const SET_STRING_INPUT = 'SET_STRING_INPUT';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_HAMBURGER = 'SET_HAMBURGER';

/**
 * common
 */
export const GET_COMMON_INFO = 'GET_COMMON_INFO';
export const GET_COMMON_INFO_SUCCESS = 'GET_COMMON_INFO_SUCCESS';
export const GET_COMMON_INFO_FAILURE = 'GET_COMMON_INFO_FAILURE';

/**
 * course
 */
export const GET_MAIN_COURSE = 'GET_MAIN_COURSE';
export const GET_MAIN_COURSE_SUCCESS = 'GET_MAIN_COURSE_SUCCESS';
export const GET_MAIN_COURSE_FAILURE = 'GET_COMMON_INFO_FAILURE';
