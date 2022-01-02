import React, { useState } from "react";
import UserPageCard from "./UserInfoCard";
import UserPageTop from "./UserInfoTop";

function UserInfo({ userData }) {
  const [changeState, setchangeState] = useState("");
  const handleChange = (data) => {
    setchangeState(data);
  };

  return (
    <div style={{ display: "grid", gridTemplateRows: "100px auto" }}>
      <UserPageTop userData={userData} onChangeFunc={handleChange} />
      <UserPageCard userData={userData} key={changeState} />
    </div>
  );
}

export default UserInfo;
