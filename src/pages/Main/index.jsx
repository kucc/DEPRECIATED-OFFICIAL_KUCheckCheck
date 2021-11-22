import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MainBottomContainer from "./MainBottomContainer";
import MainTopContainer from "./MainTopContainer";

function Main() {
  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      <div style={{ backgroundColor: "white" }}>
        <NavBar />
      </div>
      <MainTopContainer />
      <MainBottomContainer />
    </div>
  );
}
export default Main;
