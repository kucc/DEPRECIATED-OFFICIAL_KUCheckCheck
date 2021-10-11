import React from "react";
import { databaseService, storeService } from "../../../firebase";
import PSessionNewBox from "./PSessionNewBox";

export default function LoginBox() {
  const enrollHandler = async (sessionInfo) => {
    const {
      courseName,
      courseInfo,
      courseGoal,
      language,
      difficulty,
      requireTime,
      courseType,
    } = sessionInfo;
    await storeService
      .collection("courses")
      .add({
        courseType,
        language,
        difficulty,
        requireTime,
        courseName,
        courseInfo,
        courseGoal,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <>
      <PSessionNewBox enrollHandler={enrollHandler} />
    </>
  );
}
