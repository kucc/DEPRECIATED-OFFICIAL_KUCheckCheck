import React from "react";
import NavBar from "../../components/Common/NavBar";
import Footer from "../../components/Footer";
import { MainTopContainer, MainBottomContainer } from "../../components/Main";

function Main() {
  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      <div style={{ backgroundColor: "white" }}>
        <NavBar />
      </div>
      <MainTopContainer />
      <MainBottomContainer />
      <Footer />
    </div>
  );
}
export default Main;
