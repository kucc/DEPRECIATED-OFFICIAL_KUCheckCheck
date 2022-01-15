import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { StyledBackground } from "../NoticePage/style";
import MainBottomContainer from "./MainBottomContainer";
import MainTopContainer from "./MainTopContainer";

function MainPage() {
  return (
    <StyledBackground>
      <NavBar isMain={true} />
      <MainTopContainer />
      <MainBottomContainer />
    </StyledBackground>
  );
}
export default MainPage;
