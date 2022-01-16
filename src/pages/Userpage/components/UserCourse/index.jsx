import React from 'react';

import PropTypes from 'prop-types';

import UserCourseCard from './UserCourseCard';
import UserCourseTop from './UserCourseTop';

function UserCourse({ userData }) {
  return (
    <>
      <UserCourseTop />
      <UserCourseCard userData={userData} />
    </>
  );
}

export default UserCourse;

UserCourse.propTypes = {
  userData: PropTypes.object,
};
