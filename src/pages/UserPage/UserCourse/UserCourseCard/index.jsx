import React from 'react';

import { Timeline } from 'antd';
import PropTypes from 'prop-types';

import { CourseContainer, EmptyBox } from '@components';

import {
  StyledCourseCardContainer,
  StyledCourseItemContainer,
  StyledCourseSemester,
  StyledTimelineItem,
} from './style';

function UserCourseCard({ courses, option }) {
  return (
    <StyledCourseCardContainer>
      {courses?.length > 0 ? (
        // courseHistory가 있으면 목록을 출력
        courses.map((course, key) => {
          return (
            <Timeline key={key}>
              <StyledCourseItemContainer>
                <StyledCourseSemester>{course.semester}</StyledCourseSemester>
                <StyledTimelineItem>
                  <CourseContainer
                    key={course.id}
                    course={course}
                    // active : 수강 신청 할 수 있는 상태
                    // cancel : 취소할 수 있는 상태
                    // nonActive : 없는 상태
                    CourseApplicationState={option}
                  />
                </StyledTimelineItem>
              </StyledCourseItemContainer>
            </Timeline>
          );
        })
      ) : (
        // 없으면 Empty Box를 출력
        <EmptyBox />
      )}
    </StyledCourseCardContainer>
  );
}

export default UserCourseCard;

UserCourseCard.propTypes = {
  courses: PropTypes.array,
  option: PropTypes.string,
};
