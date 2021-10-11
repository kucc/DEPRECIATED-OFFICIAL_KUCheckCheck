import React from "react";
import { StyledButton } from "./style";

function FullWidthButton({ htmlType, text, loading }) {
  return (
    <StyledButton type="danger" htmlType={htmlType} shape="round" loading={loading}>
      {text}
    </StyledButton>
  );
}

export default FullWidthButton;
