import React, { useState } from 'react';

import cx from 'classnames';

import {
  StyledCourseContainer,
  StyledCourseTab,
  StyledTab,
  StyledTabText,
} from './style';

export const MainCourseTab = () => {
  const [courseTab, setCourseTab] = useState(0);

  return (
    <StyledCourseContainer>
      <StyledCourseTab>
        <StyledTab onClick={() => setCourseTab(0)}>
          <StyledTabText className={cx({ active: courseTab === 0 })}>
            전체
          </StyledTabText>
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(1)}>
          <StyledTabText className={cx({ active: courseTab === 1 })}>
            세션
          </StyledTabText>
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(2)}>
          <StyledTabText className={cx({ active: courseTab === 2 })}>
            스터디
          </StyledTabText>
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(3)}>
          <StyledTabText className={cx({ active: courseTab === 3 })}>
            프로젝트
          </StyledTabText>
        </StyledTab>
      </StyledCourseTab>
    </StyledCourseContainer>
  );
};
