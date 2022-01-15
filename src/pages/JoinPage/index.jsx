import React from "react";
import JoinForm from "./components/JoinForm";
import Description from "../../components/Description";
import { StyledRow, StyledCol, Wrapper } from "./style";

function JoinPage() {
  return (
    <StyledRow>
      <StyledCol span={6} offset={8}>
        <Wrapper>
          <Description />
          <JoinForm />
        </Wrapper>
      </StyledCol>
    </StyledRow>
  );
}
export default JoinPage;
