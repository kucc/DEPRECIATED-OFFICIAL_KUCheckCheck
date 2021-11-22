import React, { useEffect, useState } from "react";
import * as S from "../style";
import { firestoreService } from "../../../firebase";
import NavBar from "../../../components/NavBar/NavBar";

function RulesContainer() {
  const [Notices, setNotices] = useState([]);
  useEffect(() => {
    firestoreService
      .collection("notices")
      .get()
      .then((querySnapshot) => {
        let noticesArray = [];
        querySnapshot.forEach((doc) => {
          noticesArray.push(doc.data());
        });
        setNotices(noticesArray);
      });
  }, []);

  return (
    <S.StyledBackground>
      <S.StyledNavBarContainer>
        <NavBar />
      </S.StyledNavBarContainer>
      <S.SRulesBox>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 150px",
            paddingLeft: "18.24%",
            paddingRight: "14.24%",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              fontSize: "23px",
            }}
          >
            공지사항
          </div>
        </div>
        <S.SCollapse defaultActiveKey={["0"]} expandIconPosition="right">
          {Notices &&
            Notices.map((item, key) => (
              <S.SPanel header={item.title} key={key}>
                <p>{item.content}</p>
              </S.SPanel>
            ))}
        </S.SCollapse>
      </S.SRulesBox>
    </S.StyledBackground>
  );
}

export default RulesContainer;
