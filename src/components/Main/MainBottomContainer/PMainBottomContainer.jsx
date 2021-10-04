import { Button, Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { storeService } from "../../../firebase";
import SessionContainer from "../SessionContainer/SessionContainer";
// import { useRecoilState } from "recoil";
// import { userState } from "../../../recoil/userState";
import * as S from "../style";

function PMainBottomContainer() {
  // Search를 redux에서 사용?? Database에서 사용??
  // const [search, setSearch] = useState(useRecoilState(userState).category);
  const [courseSelect, setcourseSelect] = useState(0);
  const [sessionContainerArray, setsessionContainerArray] = useState([]);

  useEffect(() => {
    storeService
      .collection("sessions")
      .get()
      .then((querySnapshot) => {
        let sessionArray = [];
        querySnapshot.forEach((doc) => {
          const sessionsData = {
            id: doc.id,
            ...doc.data(),
          };
          sessionArray.push(sessionsData);
        });
        setsessionContainerArray(sessionArray);
      });
  }, []);

  const renderSession = (sessions) => {
    sessions &&
      sessions.map((session) => {
        console.log(session);
      });
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          21-1 학기
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          20-2 학기
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          20-1 학기
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <S.MainBottomWrapper>
        <S.MainBottomBtnCont>
          <S.MainSessDuration>
            <Dropdown overlay={menu} placement="bottomLeft">
              <Button
                type="danger"
                style={{ width: "100%", height: "40px", borderRadius: "25px" }}
              >
                21-2 학기
              </Button>
            </Dropdown>
          </S.MainSessDuration>
          <S.MainSessTab>
            <S.MainSessItem onClick={() => setcourseSelect(1)}>
              {courseSelect == 1 ? (
                <S.MainSessItemOnClick>전체</S.MainSessItemOnClick>
              ) : (
                <S.MainSessItemOffClick>전체</S.MainSessItemOffClick>
              )}
              <S.MainVerticalLine />
            </S.MainSessItem>
            <S.MainSessItem onClick={() => setcourseSelect(2)}>
              {courseSelect == 2 ? (
                <S.MainSessItemOnClick>세션</S.MainSessItemOnClick>
              ) : (
                <S.MainSessItemOffClick>세션</S.MainSessItemOffClick>
              )}
              <S.MainVerticalLine />
            </S.MainSessItem>
            <S.MainSessItem onClick={() => setcourseSelect(3)}>
              {courseSelect == 3 ? (
                <S.MainSessItemOnClick>스터디</S.MainSessItemOnClick>
              ) : (
                <S.MainSessItemOffClick>스터디</S.MainSessItemOffClick>
              )}
            </S.MainSessItem>
          </S.MainSessTab>
          <S.MainSessRig>
            <Button
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "25px",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 1.5px",
              }}
            >
              등록하기
            </Button>
          </S.MainSessRig>
        </S.MainBottomBtnCont>
        {sessionContainerArray &&
          sessionContainerArray.map((session) => {
            return <SessionContainer key={session.id} session={session} />;
          })}
      </S.MainBottomWrapper>
    </>
  );
}
export default PMainBottomContainer;
