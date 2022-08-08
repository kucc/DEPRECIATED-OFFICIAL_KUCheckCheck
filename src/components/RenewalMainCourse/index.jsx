import React from 'react';

import PropTypes from 'prop-types';

export const RenewalMainCourse = ({ key, course }) => {
  console.log(course);

  return (
    <>
      <div key={key}>
        <span>{course.id}</span>
        <div>{course.courseLeader.name}</div>
      </div>
    </>
  );
};

RenewalMainCourse.propTypes = {
  key: PropTypes.string.isRequired,
  course: PropTypes.objectOf(PropTypes.string).isRequired,
};
