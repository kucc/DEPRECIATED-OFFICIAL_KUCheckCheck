import React from "react";
import { Typography } from "antd";
import { DescriptionForm, DescriptionLogo } from "./style";

const { Title, Text } = Typography;

function Description() {
  return (
    <DescriptionForm>
      <DescriptionLogo
        alt="KUCC Icon"
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
    </DescriptionForm>
  );
}

export default Description;