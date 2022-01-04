import React, { useEffect, useState } from "react";
import { firestoreService } from "../../../firebase";
import NavBar from "../../../components/NavBar/NavBar";
import {
  StyledRulesBox,
  StyledRulesCollapse,
  StyledRulesTitle,
  StyledBackground,
  StyledRulesPanel,
} from "../style";

function RulesContainer() {
  const [Notices, setNotices] = useState([]);
  useEffect(() => {
    async function loadNoticesData() {
      const noticesData = await firestoreService.collection("notices").get();
      // 임시 배열에 Data를 push
      let noticesArray = [];
      noticesData.forEach((doc) => {
        console.log(doc.data());
        noticesArray.push(doc.data());
      });
      setNotices(noticesArray);
    }
    loadNoticesData();
  }, []);

  return (
    <StyledBackground>
      <NavBar />
      <StyledRulesBox>
        <StyledRulesTitle>공지사항</StyledRulesTitle>
        <StyledRulesCollapse
          defaultActiveKey={["0"]}
          expandIconPosition="right"
        >
          {Notices &&
            Notices.map((item, key) => (
              <StyledRulesPanel header={item.title} key={key}>
                <p>{item.content}</p>
              </StyledRulesPanel>
            ))}
        </StyledRulesCollapse>
      </StyledRulesBox>
    </StyledBackground>
  );
}

export default RulesContainer;
