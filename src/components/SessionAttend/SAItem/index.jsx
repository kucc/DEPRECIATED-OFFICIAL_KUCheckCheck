import React from "react";
import PSAItem from "./PSAItem";

export default function SAItem({ name, userId, userAttend }) {
  return (
    <>
      <PSAItem name={name} userId={userId} userAttend={userAttend} />
    </>
  );
}
