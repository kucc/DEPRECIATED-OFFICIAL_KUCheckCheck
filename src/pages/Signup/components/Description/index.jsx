import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

function Description() {
  return (
    <div style={{ textAlign: "center", placeItems: "center" }}>
      <img
        alt="KUCC Icon"
        style={{ width: "120px" }}
        src={"./img/KUCCicon.png"}
      />
      <Title>
        KUCC
        <br />
        길라잡이
      </Title>
      <Text>
        고려대학교 중앙 컴퓨터 동아리
        <br />
        세션/스터디 관리 시스템
      </Text>
    </div>
  );
}

export default Description;
