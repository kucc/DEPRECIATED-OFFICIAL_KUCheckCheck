import React from "react";
import NavBar from "../../components/Common/NavBar";
import { MainTopContainer, MainBottomContainer } from "../../components/Main";
import RandomEmoji from "../../components/RandomEmoji/RandomEmoji";

function Main() {
  console.log(RandomEmoji());
  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      <NavBar />
      <MainTopContainer />
      <MainBottomContainer />
    </div>
  );
}
export default Main;
