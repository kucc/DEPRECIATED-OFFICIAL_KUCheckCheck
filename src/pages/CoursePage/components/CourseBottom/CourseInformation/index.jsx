import React from 'react';

import PropTypes from 'prop-types';

const CourseInformation = ({ courseData }) => {
  console.log(courseData);
  return <div></div>;
};

export default CourseInformation;

CourseInformation.propTypes = {
  courseData: PropTypes.object,
};
