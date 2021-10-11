import React, { useState } from "react";
import { firestoreService } from "../../../firebase";
import * as S from "../../Main/style";
import { Collapse } from "antd";
import antdStyled from "styled-components";
import NavBar from "../../Common/NavBar";
import allContent from "../rulesContent.json";
import "./PRules.css";

function PRulesContainer() {
  const { Panel } = Collapse;
  // const Panel = antdStyled(Collapse)`

  // `;
  return (
    <div className="PRules">
      <NavBar></NavBar>
      <p
        style={{
          fontSize: "23px",
        }}
      >
        공지사항
      </p>
      <Collapse
        defaultActiveKey={["1"]}
        expandIconPosition="right"
        style={{
          backgroundColor: "black",
        }}
      >
        <Panel header="21-2 KUCC 회비 및 보증금 납부" key="1" FontColor="white">
          <p>{allContent.content[0].fee}</p>
        </Panel>
        <Panel header="21-2 KUCC 세션 및 스터디 신청 안내" key="2">
          <p>{allContent.content[1].application}</p>
        </Panel>
        <Panel header="21-2 KUCC 세션 및 스터디 활동 안내" key="3">
          <p>{allContent.content[2].activity}</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default PRulesContainer;
