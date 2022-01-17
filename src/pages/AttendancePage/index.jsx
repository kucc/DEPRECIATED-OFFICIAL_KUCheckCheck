import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import CourseAttendanceCard from './CourseAttendanceCard';
import CourseAttendanceTop from './CourseAttendanceTop';

function AttendacePage({ courseData }) {
  const courseName = courseData.courseName;
  const userData = courseData.courseAttendance;
  const courseId = courseData.courseId;
  const courseCheckAdmin = courseData.courseCheckAdmin;
  const [isEditMode, setIsEditMode] = useState(false);
  const [courseAttendance, setcourseAttendance] = useState();

  useEffect(() => {
    courseData.courseAttendance &&
      setcourseAttendance(courseData.courseAttendance);
  }, [courseData]);

  const onEditedAttendance = data => {
    let newcourseAttendance = courseAttendance;
    courseAttendance.map((course, key) => {
      if (course.id === data.id) {
        newcourseAttendance[key] = data;
      }
    });
    setcourseAttendance(newcourseAttendance);
  };

  return (
    <>
      <CourseAttendanceTop
        courseName={courseName}
        courseId={courseId}
        isEditMode={isEditMode}
        toggleEditMode={() => setIsEditMode(prev => !prev)}
        courseAttendance={courseAttendance}
        courseCheckAdmin={courseCheckAdmin}
      />
      {userData &&
        userData.map((userData, key) => {
          return (
            <CourseAttendanceCard
              key={key}
              userData={userData}
              isEditMode={isEditMode}
              editedAttendance={data => onEditedAttendance(data)}
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
