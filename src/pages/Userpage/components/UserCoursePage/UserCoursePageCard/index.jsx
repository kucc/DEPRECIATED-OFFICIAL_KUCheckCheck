import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseContainer from "../../../../../components/Main/CourseContainer/CourseContainer";
import { firestoreService } from "../../../../../firebase";

function UserCoursePageCard() {
  const userId = document.location.href.split("/")[4];

  const [courseContainerArray, setcourseContainerArray] = useState([]);
  useEffect(() => {
    firestoreService
      .collection("users")
      .doc(userId)
      .get()
      .then((querySnapshot) => {
        setcourseContainerArray(querySnapshot.data().courseHistory);
      });
  }, []);

  // console.log(courseContainerArray);

  return (
    <div>
      {courseContainerArray &&
        courseContainerArray.map((course) => {
          // console.log(course.id);
          return (
            <CourseContainer
              key={course.id}
              course={course}
              CourseApplicationState={false}
            />
          );
        })}
    </div>
  );
}

export default UserCoursePageCard;
