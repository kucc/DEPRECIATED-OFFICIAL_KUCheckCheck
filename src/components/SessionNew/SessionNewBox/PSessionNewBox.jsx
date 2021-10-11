import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";
import { Button, Dropdown, Menu, Input, Form, Select } from "antd";
import "antd/dist/antd.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import * as S from "../../Main/style";
import NavBar from "../../Common/NavBar";

function PSessionNewBox({ enrollHandler }) {
  //하나의 객체로..?
  const [courseName, setcourseName] = useState("");
  const [courseInfo, setcourseInfo] = useState("");
  const [courseGoal, setcourseGoal] = useState("");
  const [language, setlanguage] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [requireTime, setrequireTime] = useState("");
  const [courseType, setcourseType] = useState("");

  const handleLanguage = (event) => {
    setlanguage(event.key);
  };

  const handledifficult = (event) => {
    setdifficulty(event.key);
  };

  const handleTime = (event) => {
    setrequireTime(event.key);
  };

  // < How..? >
  // 커리큘럼 등록?
  // 이미지 가져오기
  // 폰트

  // < 등록 후 추가해야하는 정보 >
  // 코스 리더
  // 출첵담당자
  // 코스멤버
  // 출석
  // 학기 - 자동?

  //< 이건 XD에는 있는데 API에는 없는 정보 >
  // 진행요일
  // 참여요일
  // 유의사항
  // 진행장소 및 방법

  const menu1 = (
    <Menu onClick={handleLanguage}>
      <Menu.Item key="javascript">자바스크립트</Menu.Item>
      <Menu.Item key="python">파이썬</Menu.Item>
      <Menu.Item key="CLang">C언어</Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu onClick={handledifficult}>
      <Menu.Item key="easy">초급</Menu.Item>
      <Menu.Item key="soso">중급</Menu.Item>
      <Menu.Item key="hard">고급</Menu.Item>
    </Menu>
  );

  const menu3 = (
    <Menu onClick={handleTime}>
      <Menu.Item key="1">1학점</Menu.Item>
      <Menu.Item key="2">2학점</Menu.Item>
      <Menu.Item key="3">3학점</Menu.Item>
    </Menu>
  );

  const { TextArea } = Input;

  const onChangeTitle = (event) => {
    setcourseName(event.target.value);
    console.log(courseName);
  };

  const onChangeIntro = (event) => {
    setcourseInfo(event.target.value);
    console.log(courseInfo);
  };

  const onChangeGoal = (event) => {
    setcourseGoal(event.target.value);
    console.log(courseGoal);
  };

  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "15%",
        }}
      >
        <p style={{ fontSize: "20px" }}>등록하기</p>
        {/* 이거 일단 앞에 쓴거 가져다 쓴건데, antD로? 그리고 세션 스터디 통합할거면 없어도 될 듯? */}
        <S.MainSessTab>
          <S.MainSessItem onClick={() => setcourseType(1)}>
            {courseType === 1 ? (
              <S.MainSessItemOnClick>세션</S.MainSessItemOnClick>
            ) : (
              <S.MainSessItemOffClick>세션</S.MainSessItemOffClick>
            )}
            <S.MainVerticalLine />
          </S.MainSessItem>
          <S.MainSessItem onClick={() => setcourseType(2)}>
            {courseType === 2 ? (
              <S.MainSessItemOnClick>스터디</S.MainSessItemOnClick>
            ) : (
              <S.MainSessItemOffClick>스터디</S.MainSessItemOffClick>
            )}
          </S.MainSessItem>
        </S.MainSessTab>
      </div>

      <div
        style={{
          display: "grid",
          height: "100vh",
          placeItems: "left",
          gridTemplateRows: "100px auto",
          marginLeft: "10%",
          marginRight: "10%",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "5%",
        }}
      >
        <Button
          type="primary"
          shape="round"
          size={"large"}
          style={{
            backgroundColor: "black",
            border: "0px",
            width: "150px",
            height: "50px",
          }}
        >
          필수 정보
        </Button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "15px" }}>사용언어</p>
          <img src={"../../../../img/javascript.png"} />
          <Dropdown overlay={menu1}>
            <Button style={{ margin: "30px" }}>
              사용 언어 <DownOutlined />
            </Button>
          </Dropdown>

          <p style={{ fontSize: "15px" }}>난이도/투자 시간</p>
          <Dropdown overlay={menu2}>
            <Button style={{ margin: "30px" }}>
              난이도 <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu3}>
            <Button>
              투자 시간 <DownOutlined />
            </Button>
          </Dropdown>
        </div>

        <div>
          <p style={{ fontSize: "15px" }}>세션 제목</p>
          <TextArea
            maxLength={50}
            onChange={onChangeTitle}
            placeholder="50자 이내"
            autoSize={{ minRows: 1 }}
          />
        </div>

        <Button
          type="primary"
          shape="round"
          size={"large"}
          style={{
            backgroundColor: "black",
            border: "0px",
            width: "150px",
            height: "50px",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          세부 정보
        </Button>

        <div>
          <p style={{ fontSize: "15px" }}>세션 소개</p>
          <TextArea
            maxLength={200}
            onChange={onChangeIntro}
            placeholder="200자 이내"
            backgroundColor="red"
            autoSize={{ minRows: 3 }}
          />
        </div>

        <div>
          <p style={{ fontSize: "15px" }}>세션 목표</p>
          <TextArea
            maxLength={200}
            onChange={onChangeGoal}
            placeholder="200자 이내"
            autoSize={{ minRows: 3 }}
            borderRadius="50px"
          />
        </div>

        <Button
          type="primary"
          shape="round"
          size={"large"}
          style={{
            backgroundColor: "red",
            border: "0px",
            width: "rgba(195,33,31)",
            height: "50px",
          }}
          onClick={async (e) => {
            e.preventDefault();
            const sessionInfo = {
              courseName,
              courseInfo,
              courseGoal,
              language,
              difficulty,
              requireTime,
              courseType,
            };
            console.log(sessionInfo);
            await enrollHandler(sessionInfo);
          }}
        >
          등록완료
        </Button>
      </div>

      {/* <br></br>
      <br></br>
      <br></br>

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "default",
        }}
        // onValuesChange={onFormLayoutChange}
        size={"default"}
      ></Form>

      <Form.Item label="사용 언어">
        <Select>
          <Select.Option value="javascript">자바스크립트</Select.Option>
          <Select.Option value="python">파이썬</Select.Option>
          <Select.Option value="cLang">C언어</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="세션제목">
        <Input />
      </Form.Item> */}
    </div>
  );
}
export default PSessionNewBox;
