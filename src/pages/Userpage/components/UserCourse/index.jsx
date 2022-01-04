import React from "react";
import UserCourseCard from "./UserCourseCard";
import UserCourseTop from "./UserCourseTop";

function UserCourse({ userData }) {
  return (
    <>
      <UserCourseTop />
      <UserCourseCard userData={userData} />
    </>
  );
}

export default UserCourse;
