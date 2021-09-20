const API_URLS = {
    ///백엔드 맞추기!!! 수정전
    LOGOUT: 'api/users/logout',
    SIGNUP: 'api/users/signup',
    LOGIN: 'api/users/login',
    SIGNOUT: 'api/users/', // + userId (회원탈퇴)
    PROFILE_GET: 'api/users/', // + userId (프로필 조회)
    PROFILE_PUT: 'api/users/', // + userId (프로필 수정)
    MAIN_TOTAL: 'api/main', 
    MAIN_SESSION: 'api/main/sessions',
    MAIN_STUDIES: 'api/main/studies',
    SEARCH: 'api/classes/search', // + ?query=한글 (세션검색)
    DETAIL_SESSION : 'api/classes', //+ sessionID (세션 조회)
    DETAIL_SE_DEL : 'api/classes', //+ sessionID (세션 삭제)
    DETAIL_STUDIES : 'api/studies', //+ sessionID (스터디 조회)
    DETAIL_ST_DEL : 'api/studies', //+ sessionID (스터디 삭제)
  };
  
  export default API_URLS;