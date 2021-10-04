import React from "react";
import NavBar from "../../components/Common/NavBar";
import { MainTopContainer, MainBottomContainer } from "../../components/Main";

function Main() {
  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      <NavBar />
      <MainTopContainer />
      <MainBottomContainer />
    </div>
  );
}
export default Main;
