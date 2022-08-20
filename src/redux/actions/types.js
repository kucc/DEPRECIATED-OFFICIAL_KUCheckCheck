// reducer의 타입들을 정리

export const SET_USER = 'set_user';
export const CLEAR_USER = 'clear_user';

export const SET_SEARCH = 'set_search';
export const SET_CATEGORY = 'set_category';


// 아래로 리뉴얼
export const generateKeys = (key) => ({
    request: key,
    success: `${key}_SUCCESS`,
    failure: `${key}_FAILURE`,
});

export const generateActions = (generatedKeys) => ({
    request: () => ({ type: generatedKeys.request }),
    success: (data) => ({ type: generatedKeys.success, data }),
    failure: () => ({ type: generatedKeys.failure }),
});

export const GET_COMMON_INFO = 'GET_COMMON_INFO';
export const GET_COMMON_INFO_SUCCESS = 'GET_COMMON_INFO_SUCCESS';
export const GET_COMMON_INFO_FAILURE = 'GET_COMMON_INFO_FAILURE';

export const GET_MAIN_COURSE = 'GET_MAIN_COURSE';
export const GET_MAIN_COURSE_SUCCESS = 'GET_MAIN_COURSE_SUCCESS';
export const GET_MAIN_COURSE_FAILURE = 'GET_COMMON_INFO_FAILURE';
