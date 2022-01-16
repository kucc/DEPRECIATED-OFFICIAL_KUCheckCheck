import React from 'react';

import PropTypes from 'prop-types';

import CourseAttendanceCard from './CourseAttendanceCard';
import CourseAttendanceTop from './CourseAttendanceTop';

function AttendacePage({ courseData }) {
  const courseName = courseData.courseName;
  const userData = courseData.courseAttendance;
  const courseId = courseData.courseId;
  const courseCheckAdmin = courseData.courseCheckAdmin;

  return (
    <>
      <CourseAttendanceTop
        courseName={courseName}
        courseId={courseId}
        isEditMode={false}
        courseCheckAdmin={courseCheckAdmin}
      />
      {userData &&
        userData.map((userData, key) => {
          return (
            <CourseAttendanceCard
              key={key}
              userData={userData}
              isEditMode={false}
            />
          );
        })}
    </>
  );
}

export default AttendacePage;

AttendacePage.propTypes = {
  courseData: PropTypes.object,
};
