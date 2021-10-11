import React from "react";
import SignUpForm from "./components/SignUpForm";
import Description from "./components/Description";
import { StyledRow, StyledCol, Wrapper } from "./style";

function SignUp() {
  return (
    <StyledRow>
      <StyledCol span={6} offset={8}>
        <Wrapper>
          <Description />
          <SignUpForm />
        </Wrapper>
      </StyledCol>
    </StyledRow>
  );
}
export default SignUp;
