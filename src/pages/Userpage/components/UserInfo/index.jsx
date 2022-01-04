import React, { useState } from "react";
import UserInfoTop from "./UserInfoTop";
import UserInfoCard from "./UserInfoCard";
import { StyledUserInfoContainer } from "./style";

function UserInfo({ userData }) {
  const [changeState, setchangeState] = useState("");
  const handleChange = (data) => {
    setchangeState(data);
  };

  return (
    <StyledUserInfoContainer>
      <UserInfoTop userData={userData} onChangeFunc={handleChange} />
      <UserInfoCard userData={userData} key={changeState} />
    </StyledUserInfoContainer>
  );
}

export default UserInfo;
