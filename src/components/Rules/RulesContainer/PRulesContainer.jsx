import React, { useEffect, useState } from "react";
import * as S from "./style";
import NavBar from "../../Common/NavBar";
import { Button } from "antd";
import { firestoreService } from "../../../firebase";

function PRulesContainer() {
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
    <>
      <NavBar></NavBar>
      <S.SRulesBox>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 150px",
            marginLeft: "18.24%",
            marginRight: "14.24%",
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
          <Button
            loading={false}
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "25px",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 1.5px",
              display: "grid",
              placeItems: "center",
            }}
            // 버튼 누르면 공지 수정 페이지로,
            // href=""
          >
            공지 등록 및 수정
          </Button>
        </div>
        <S.SCollapse defaultActiveKey={["1"]} expandIconPosition="right">
          {Notices &&
            Notices.map((item, key) => (
              <S.SPanel header={item.title} key={key}>
                <p>{item.content}</p>
              </S.SPanel>
            ))}
          {/* <S.SPanel header="21-2 KUCC 회비 및 보증금 납부" key="1">
            <p>{allContent.content[0].fee}</p>
          </S.SPanel>
          <S.SPanel header="21-2 KUCC 세션 및 스터디 신청 안내" key="2">
            <p>{allContent.content[1].application}</p>
          </S.SPanel>
          <S.SPanel header="21-2 KUCC 세션 및 스터디 활동 안내" key="3">
            <p>{allContent.content[2].activity}</p>
          </S.SPanel> */}
        </S.SCollapse>
      </S.SRulesBox>
    </>
  );
}

export default PRulesContainer;
