import React from 'react';

import PropTypes from 'prop-types';

import { UserCourseTopContainer, UserCourseTopText } from './style';

function UserCourseTop({ mode }) {
  //세션 불러오기
  return (
    <UserCourseTopContainer>
      <UserCourseTopText>
        {mode === 'current' ? '현재' : '지난'} 세션/스터디
      </UserCourseTopText>
    </UserCourseTopContainer>
  );
}

export default UserCourseTop;

UserCourseTop.propTypes = {
  mode: PropTypes.string,
};
