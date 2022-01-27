import React from 'react';

import { UserCourseTopContainer, UserCourseTopText } from './style';

function UserCourseTop() {
  //세션 불러오기
  return (
    <UserCourseTopContainer>
      <UserCourseTopText>지난 세션/스터디</UserCourseTopText>
    </UserCourseTopContainer>
  );
}

export default UserCourseTop;
