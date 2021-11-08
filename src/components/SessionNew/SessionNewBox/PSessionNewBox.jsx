import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Input, Select } from "antd";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import * as S from "../../Main/style";
import NavBar from "../../Common/NavBar";
import { Option } from "antd/lib/mentions";

function PSessionNewBox({ enrollHandler }) {
  //하나의 객체로..?
  const [courseName, setcourseName] = useState("");
  const [courseInfo, setcourseInfo] = useState("");
  const [courseGoal, setcourseGoal] = useState("");
  const [language, setlanguage] = useState("javascript");
  const [difficulty, setdifficulty] = useState("");
  const [requireTime, setrequireTime] = useState("");
  const [courseType, setcourseType] = useState("");
  const [selectedImg, setselectedImg] = useState("javascript");
  const [courseDate, setcourseDate] = useState("");
  const [coursePlace, setcoursePlace] = useState("");
  const [courseNotice, setcourseNotice] = useState("");
  const [courseMember, setcourseMember] = useState("");
  const [courseCurriculum, setcourseCurriculum] = useState({});

  const imgSource = {
    javascript: "./img/javascript.png",
    python: "./img/python.png",
    cLang: "./img/cLang.png",
  };

  // < How..? >
  // 폰트

  // < 등록 후 추가해야하는 정보 >
  // 코스 리더
  // 출첵담당자
  // 코스멤버
  // 출석

  const { TextArea } = Input;

  const onChangeTitle = (event) => {
    setcourseName(event.target.value);
  };

  const onChangeIntro = (event) => {
    setcourseInfo(event.target.value);
  };

  const onChangeGoal = (event) => {
    setcourseGoal(event.target.value);
  };

  const handleLanguage = (value) => {
    setselectedImg(value);
    setlanguage(value);
    console.log(value);
    console.log(language);
  };

  const handledifficult = (value) => {
    setdifficulty(value);
  };

  const handleTime = (value) => {
    setrequireTime(value);
  };

  const onChangecourseDate = (event) => {
    setcourseDate(event.target.value);
  };

  const onChangePlace = (event) => {
    setcoursePlace(event.target.value);
  };
  const onChangeNotice = (event) => {
    setcourseNotice(event.target.value);
  };
  const onChangeMember = (event) => {
    setcourseMember(event.target.value);
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
        <p style={{ fontSize: "20px", fontFamily: "NexonBo" }}>등록하기</p>

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
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              fontFamily: "NexonBo",
              margin: "5%",
            }}
          >
            사용언어
          </p>
          <img
            style={{ width: "80px", borderRadius: "50px", marginRight: "3%" }}
            src={`./img/${selectedImg}.png`}
          />

          <Select
            defaultValue="javascript"
            style={{ width: 120, marginRight: "3%" }}
            onChange={handleLanguage}
          >
            <Option value="javascript">javascript</Option>
            <Option value="python">python</Option>
            <Option value="Clang">Clang</Option>
          </Select>

          <p
            style={{
              fontSize: "15px",
              marginLeft: "15%",
              marginTop: "2%",
              marginRight: "2%",
              fontFamily: "NexonBo",
            }}
          >
            난이도 / 투자 시간
          </p>

          <Select
            defaultValue="난이도"
            style={{ width: 100 }}
            onChange={handledifficult}
            style={{ margin: "0px" }}
          >
            <Option value="easy">초급</Option>
            <Option value="medium">중급</Option>
            <Option value="hard">고급</Option>
          </Select>

          <Select
            defaultValue="투자 시간"
            style={{ width: 120 }}
            onChange={handleTime}
            style={{ margin: "30px" }}
          >
            <Option value="1">1학점</Option>
            <Option value="2">2학점</Option>
            <Option value="3">3학점</Option>
          </Select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              fontFamily: "NexonBo",
              margin: "5%",
            }}
          >
            세션 제목
          </p>
          <TextArea
            maxLength={50}
            onChange={onChangeTitle}
            placeholder="50자 이내"
            autoSize={{ minRows: 1 }}
            style={{ width: "100%" }}
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
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>세션 소개</p>
          <TextArea
            maxLength={200}
            onChange={onChangeIntro}
            placeholder="200자 이내"
            backgroundColor="red"
            autoSize={{ minRows: 3 }}
          />
        </div>

        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>세션 목표</p>
          <TextArea
            maxLength={200}
            onChange={onChangeGoal}
            placeholder="200자 이내"
            autoSize={{ minRows: 3 }}
            borderRadius="50px"
          />
        </div>

        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>진행 요일</p>
          <TextArea
            maxLength={200}
            onChange={onChangecourseDate}
            placeholder="100자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
          />
        </div>

        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>참여 인원</p>
          <TextArea
            maxLength={200}
            onChange={onChangeMember}
            placeholder="숫자만 적어주세요. ex) 6"
            autoSize={{ minRows: 1 }}
            borderRadius="50px"
          />
        </div>

        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>
            진행 장소 및 방법
          </p>
          <TextArea
            maxLength={200}
            onChange={onChangePlace}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
          />
        </div>

        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>유의 사항</p>
          <TextArea
            maxLength={200}
            onChange={onChangeNotice}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
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
          커리큘럼
        </Button>

        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>1주차</p>
          <TextArea
            maxLength={200}
            onChange={(event) => {
              setcourseCurriculum({
                ...courseCurriculum,
                first: event.target.value,
              });
            }}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
          />
        </div>
        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>2주차</p>
          <TextArea
            maxLength={200}
            onChange={(event) => {
              setcourseCurriculum({
                ...courseCurriculum,
                second: event.target.value,
              });
            }}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
          />
        </div>
        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>3주차</p>
          <TextArea
            maxLength={200}
            onChange={(event) => {
              setcourseCurriculum({
                ...courseCurriculum,
                third: event.target.value,
              });
            }}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
          />
        </div>
        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>4주차</p>
          <TextArea
            maxLength={200}
            onChange={(event) => {
              setcourseCurriculum({
                ...courseCurriculum,
                forth: event.target.value,
              });
            }}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
          />
        </div>
        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>5주차</p>
          <TextArea
            maxLength={200}
            onChange={(event) => {
              setcourseCurriculum({
                ...courseCurriculum,
                fifth: event.target.value,
              });
            }}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
          />
        </div>
        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>6주차</p>
          <TextArea
            maxLength={200}
            onChange={(event) => {
              setcourseCurriculum({
                ...courseCurriculum,
                sixth: event.target.value,
              });
            }}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
          />
        </div>
        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>7주차</p>
          <TextArea
            maxLength={200}
            onChange={(event) => {
              setcourseCurriculum({
                ...courseCurriculum,
                seventh: event.target.value,
              });
            }}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
            borderRadius="50px"
          />
        </div>
        <div>
          <p style={{ fontSize: "15px", fontFamily: "NexonBo" }}>8주차</p>
          <TextArea
            maxLength={200}
            onChange={(event) => {
              setcourseCurriculum({
                ...courseCurriculum,
                eighth: event.target.value,
              });
            }}
            placeholder="200자 이내"
            autoSize={{ minRows: 2 }}
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
              courseDate,
              coursePlace,
              courseNotice,
              courseMember,
              courseCurriculum,
            };
            console.log(sessionInfo);
            await enrollHandler(sessionInfo);
          }}
        >
          등록완료
        </Button>
      </div>
    </div>
  );
}
export default PSessionNewBox;
