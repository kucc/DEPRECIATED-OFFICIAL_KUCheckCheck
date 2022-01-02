import React from "react";
import UserCoursePageCard from "./UserCoursePageCard";
import UserCoursePageTop from "./UserCoursePageTop";

function UserCoursePage({ userData }) {
  return (
    <div>
      <UserCoursePageTop />
      <UserCoursePageCard userData={userData} />
    </div>
  );
}

export default UserCoursePage;
