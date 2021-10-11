import React from "react";
import NavBar from "../../components/Common/NavBar";
import UserCoursePage from "./components/UserCoursePage";
import UserMyPage from "./components/UserMyPage";
import {
  StyledBackground,
  StyledMainContainer,
  StyledNavBarContainer,
} from "./style";

function Mypage() {
  return (
    <StyledBackground>
      <StyledNavBarContainer>
        <NavBar />
      </StyledNavBarContainer>
      <StyledMainContainer>
        <UserMyPage />
        <UserCoursePage />
      </StyledMainContainer>
    </StyledBackground>
  );
}
export default Mypage;
