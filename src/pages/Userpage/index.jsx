import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { StyledSideMargin } from "../../utility/COMMON_STYLE";
import UserCourse from "./components/UserCourse";
import UserInfo from "./components/UserInfo";
import { StyledBackground } from "./style";

function UserPage({ userData }) {
  return (
    <StyledBackground>
      <NavBar />
      <StyledSideMargin>
        <UserInfo userData={userData} />
        <UserCourse userData={userData} />
      </StyledSideMargin>
    </StyledBackground>
  );
}
export default UserPage;
