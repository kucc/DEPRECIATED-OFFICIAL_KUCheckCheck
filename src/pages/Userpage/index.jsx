import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import UserCoursePage from "./components/UserCoursePage";
import UserInfo from "./components/UserInfo";
import { StyledBackground, StyledMainContainer } from "./style";

function UserPage({ userData }) {
  return (
    <StyledBackground>
      <NavBar />
      <StyledMainContainer>
        <UserInfo userData={userData} />
        <UserCoursePage userData={userData} />
      </StyledMainContainer>
    </StyledBackground>
  );
}
export default UserPage;
