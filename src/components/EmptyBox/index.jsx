import { Empty } from "antd";
import React from "react";
import { StyledEmptyBox } from "./style";

function EmptyBox() {
  return (
    <StyledEmptyBox>
      <img style={{ width: "100px" }} src="./img/logo/type-3-4.png" />
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "rgb(67, 67, 67)",
        }}
      >
        정보가 없습니다.
      </div>
      {/* <Empty/> */}
    </StyledEmptyBox>
  );
}

export default EmptyBox;
