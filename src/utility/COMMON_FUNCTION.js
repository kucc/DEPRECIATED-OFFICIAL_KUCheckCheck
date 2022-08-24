export const SINGLE_PATHNAMES_LIST = ['/login', '/signup'];

export const RENEWAL_PATH = { // 리뉴얼 페이지 PATH
  login: '/login', // 로그인
  signup: '/signup', // 회원가입
  main: '/main', // 메인
  courseCreate: '/course/create', // 세션 등록
  courseDetail: '/course/detail/:id', // 세션 소개
  attendance: '/attendance', // 출결 관리
  timeTable: '/new/timetable', // 동방 시간표
  profile: '/profile', // 내 정보
  notice: '/notice', // 공지사항
  admin: '/admin', // 관리자
}

export const RandomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export const renderWord = courseType => {
  if (courseType === 1) {
    return '세션';
  } else if (courseType === 2) {
    return '스터디';
  } else if (courseType === 3) {
    return '프로젝트';
  }
};

const emojis = [
  '🧕',
  '👮‍♀️',
  '👮',
  '👮‍♂️',
  '👷‍♀️',
  '👷',
  '👷‍♂️',
  '💂‍♀️',
  '💂',
  '💂‍♂️',
  '🕵️‍♀️',
  '🕵️',
  '🕵️‍♂️',
  '👩‍⚕️',
  '🧑',
  '👨‍⚕️',
  '👩‍🌾',
  '🧑',
  '👨‍🌾',
  '👩‍🍳',
  '🧑',
  '👨‍🍳',
  '👩‍🎓',
  '🧑',
  '👨‍🎓',
  '👩‍🎤',
  '🧑',
  '👨‍🎤',
  '👩‍🏫',
  '🧑',
  '👨‍🏫',
  '👩‍🏭',
  '🧑',
  '👨‍🏭',
  '👩‍💻',
  '🧑',
  '👨‍💻',
  '👩‍💼',
  '🧑',
  '👨‍💼',
  '👩‍🔧',
  '🧑',
  '👨‍🔧',
  '👩‍🔬',
  '🧑',
  '👨‍🔬',
  '👩‍🎨',
  '🧑',
  '👨‍🎨',
  '👩‍🚒',
  '🧑',
  '👨‍🚒',
  '👩‍✈️',
  '🧑',
  '👨‍✈️',
  '👩‍🚀',
  '🧑',
  '👨‍🚀',
  '👩‍⚖️',
  '🧑',
  '👨‍⚖️',
  '👰',
  '👰',
  '👰',
  '🤵',
  '🤵',
  '🤵',
  '👸',
  '🤴',
  '🥷',
  '🦸‍♀️',
  '🦸',
  '🦸‍♂️',
  '🦹‍♀️',
  '🦹',
  '🦹‍♂️',
  '🧙‍♀️',
  '🧙',
  '🧙‍♂️',
  '🧝‍♀️',
  '🧝',
  '🧝‍♂️',
  '🧛‍♀️',
  '🧛',
  '🧛‍♂️',
  '🧟‍♀️',
  '🧟',
  '🧟‍♂️',
  '🧞‍♀️',
  '🧞',
  '🧞‍♂️',
  '🧜‍♀️',
  '🧜',
  '🧜‍♂️',
  '🧚‍♀️',
  '🧚',
  '🧚‍♂️',
  '🙇‍♀️',
  '🙇',
  '🙇‍♂️',
  '💁‍♀️',
  '💁',
  '💁‍♂️',
  '🙅‍♀️',
  '🙅',
  '🙅‍♂️',
  '🙆‍♀️',
  '🙆',
  '🙆‍♂️',
  '🙋‍♀️',
  '🙋',
  '🙋‍♂️',
  '🤦‍♀️',
  '🤦',
  '🤦‍♂️',
  '🤷‍♀️',
  '🤷',
  '🤷‍♂️',
  '🙎‍♀️',
  '🙎',
  '🙎‍♂️',
  '🙍‍♀️',
  '🙍',
  '🙍‍♂️',
];
