import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import CourseAttendanceCard from "../CourseAttendance/CourseAttendanceCard";

import CourseAttendanceTop from "../CourseAttendance/CourseAttendanceTop";

function CourseAttendanceEdit({ courseData }) {
  const [courseAttendance, setcourseAttendance] = useState();
  const courseId = courseData.courseId && courseData.courseId;
  const courseName = courseData.courseId && courseData.courseName;
  const courseCheckAdmin = courseData.courseCheckAdmin;

  useEffect(() => {
    courseData.courseAttendance &&
      setcourseAttendance(courseData.courseAttendance);
  }, [courseData]);

  const onEditedAttendance = (data) => {
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
        isEditMode={true}
        courseAttendance={courseAttendance}
        courseCheckAdmin={courseCheckAdmin}
      />

      {courseAttendance &&
        courseAttendance.map((userData, key) => {
          return (
            <CourseAttendanceCard
              userData={userData}
              courseId={courseId}
              isEditMode={true}
              key={key}
              indexKey={key}
              editedAttendance={(data) => onEditedAttendance(data)}
            />
          );
        })}
    </>
  );
}

export default CourseAttendanceEdit;
