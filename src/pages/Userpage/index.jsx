import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import UserCoursePage from "./components/UserCoursePage";
import UserPage from "./components/UserPage";
import {
  StyledBackground,
  StyledMainContainer,
  StyledNavBarContainer,
} from "./style";

function Userpage() {
  return (
    <StyledBackground>
      <NavBar />
      <StyledMainContainer>
        <UserPage />
        <UserCoursePage />
      </StyledMainContainer>
    </StyledBackground>
  );
}
export default Userpage;
