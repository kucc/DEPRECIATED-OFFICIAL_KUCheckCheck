import React from "react";
import LoginForm from "./components/LoginForm";
import Description from "../../components/Description";
import { StyledRow, StyledCol, Wrapper } from "./style";
import DefaultLogo from "../../components/DefaultLogo";

function LoginPage() {
  return (
    <StyledRow>
      <StyledCol span={6} offset={8}>
        <Wrapper>
          <Description />
          <LoginForm />
          <a
            href="/signup"
            style={{
              textAlign: "center",
              textDecoration: "none",
              display: "block",
            }}
          >
            JOIN
          </a>
          <DefaultLogo logoName="type-1-3" width="80px" height="80px" />
        </Wrapper>
      </StyledCol>
    </StyledRow>
  );
}
export default LoginPage;