import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SessionContainer from "../../../../../components/Main/SessionContainer/SessionContainer";
import { firestoreService } from "../../../../../firebase";

function UserCoursePageCard() {
  const user = useSelector((state) => state.user.currentUser);
  const [courseContainerArray, setcourseContainerArray] = useState([]);
  useEffect(() => {
    if (user) {
      firestoreService
        .collection("users")
        .doc(user.uid)
        .get()
        .then((querySnapshot) => {
          setcourseContainerArray(querySnapshot.data().courseHistory);
        });
    }
  }, [user]);

  // console.log(courseContainerArray);

  return (
    <div>
      {courseContainerArray &&
        courseContainerArray.map((course) => {
          // console.log(course.id);
          return <SessionContainer key={course.id} course={course} />;
        })}
    </div>
  );
}

export default UserCoursePageCard;
