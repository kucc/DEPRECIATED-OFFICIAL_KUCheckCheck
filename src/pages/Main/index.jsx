import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { StyledBackground } from "../Rules/style";
import MainBottomContainer from "./MainBottomContainer";
import MainTopContainer from "./MainTopContainer";

function Main() {
  return (
    <StyledBackground>
      <NavBar isMain={true} />
      <MainTopContainer />
      <MainBottomContainer />
    </StyledBackground>
  );
}
export default Main;
