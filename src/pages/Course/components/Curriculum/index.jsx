import React from "react";
import { Timeline } from "antd";
import { StyledContainer } from "./style";

function Curriculum() {
  const curriculum = [
    "1주차에는 이런걸 할거에요",
    "2주차에는 이런걸 할거에요",
    "3주차에는 이런걸 할거에요",
    "4주차에는 이런걸 할거에요",
    "5주차에는 이런걸 할거에요",
  ];

  return (
    <StyledContainer>
      <Timeline mode="left">
        {curriculum.map((el, i) => {
          return <Timeline.Item color="gray" label={`${i + 1}주차`}>{el}</Timeline.Item>;
        })}
      </Timeline>
    </StyledContainer>
  );
}

export default Curriculum;
