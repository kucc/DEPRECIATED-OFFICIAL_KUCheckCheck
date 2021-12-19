import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import TimeTable from "../../components/TimeTable/TimeTable";
import { StyledBackground, StyledNavBarContainer } from "./style";

function TimeTablePage() {
  return (
    <StyledBackground>
      <StyledNavBarContainer>
        <NavBar />
      </StyledNavBarContainer>
      <TimeTable editable={false} />;
    </StyledBackground>
  );
}
export default TimeTablePage;
