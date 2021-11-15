import { Empty } from "antd";
import React, { useEffect, useState } from "react";
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

  console.log(courseContainerArray);

  return (
    <div>
      {courseContainerArray.length > 0 ? (
        courseContainerArray.map((course) => {
          return (
            <CourseContainer
              key={course.id}
              course={course}
              CourseApplicationState={false}
            />
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default UserCoursePageCard;
