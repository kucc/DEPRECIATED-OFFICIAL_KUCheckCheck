import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SUCCESS_APPLICATION } from "../../../constants/ERROR_MESSAGE";
import { firestoreService } from "../../../firebase";
import PSessionNewBox from "./PSessionNewBox";

export default function LoginBox() {
  // 이게 왜 Login Box지 ??
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const enrollHandler = async (sessionInfo) => {
    const {
      courseName,
      courseInfo,
      courseGoal,
      language,
      difficulty,
      requireTime,
      courseType,
      courseDate,
      coursePlace,
      courseNotice,
      courseMember,
      courseCurriculum,
    } = sessionInfo;
    await firestoreService
      .collection("courses")
      .add({
        courseType,
        language,
        difficulty,
        requireTime,
        courseName,
        courseInfo,
        courseGoal,
        courseDate,
        coursePlace,
        courseNotice,
        courseCurriculum,
        maxMemberNum: Number(courseMember),
        courseMember: [user.currentUser.uid],
        courseLeader: user.currentUser.displayName,
        courseAttendance: [
          {
            id: user.currentUser.uid,
            attendance: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          },
        ],
      })
      .then((docRef) => {
        alert(SUCCESS_APPLICATION);
        history.push("/");
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
  };

  return (
    <>
      <PSessionNewBox enrollHandler={enrollHandler} />
    </>
  );
}
