import React, { useState } from "react";
import { Button, Select } from "antd";
import "antd/dist/antd.css";
import { Option } from "antd/lib/mentions";
import {
  CHECK_TOP_SESSION_OR_STUDY,
  FORM_IS_NOT_FULL,
} from "../../../utility/ALERT_MESSAGE";
import {
  StyledBackground,
  StyledBlackButton,
  StyledBottomContainer,
  StyledInputBox,
  StyledInputNumber,
  StyledText,
  StyledTextArea,
  StyledTopContainer,
} from "../style";
import NavBar from "../../../components/NavBar/NavBar";

function CourseRegisterBox({ enrollHandler }) {
  //하나의 객체로..?
  const [courseName, setcourseName] = useState("");
  const [courseInfo, setcourseInfo] = useState("");
  const [courseGoal, setcourseGoal] = useState("");
  const [language, setlanguage] = useState("C");
  const [difficulty, setdifficulty] = useState("");
  const [requireTime, setrequireTime] = useState("");
  const [courseType, setcourseType] = useState(1);
  const [selectedImg, setselectedImg] = useState("C");
  const [courseDate, setcourseDate] = useState("");
  const [coursePlace, setcoursePlace] = useState("");
  const [courseNotice, setcourseNotice] = useState("");
  const [courseMember, setcourseMember] = useState("");
  const [courseCurriculum, setcourseCurriculum] = useState({});

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
  const onChangeMember = (value) => {
    // antd의 input number로 유효성 검사 완료.
    setcourseMember(value);
  };

  return (
    <StyledBackground>
      <NavBar />
      <StyledTopContainer>
        <p style={{ fontSize: "20px", fontFamily: "NexonBo" }}>등록하기</p>

        {/* <S.MainSessTab style={{ marginBottom: "17px" }}>
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
            <S.MainVerticalLine />
          </S.MainSessItem>
          <S.MainSessItem onClick={() => setcourseType(3)}>
            {courseType === 3 ? (
              <S.MainSessItemOnClick>프로젝트</S.MainSessItemOnClick>
            ) : (
              <S.MainSessItemOffClick>프로젝트</S.MainSessItemOffClick>
            )}
          </S.MainSessItem>
        </S.MainSessTab> */}
      </StyledTopContainer>

      <StyledBottomContainer className="border-radius-all">
        <div>
          <StyledBlackButton className="border-radius-all">
            필수 정보
          </StyledBlackButton>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50% 50%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "130px auto",
                alignItems: "center",
                borderRight: "1px solid #b6b6b677",
              }}
            >
              <StyledText style={{ marginTop: "30px" }}>사용언어</StyledText>
              <div>
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    marginRight: "20px",
                    objectFit: "contain",
                  }}
                  src={`./img/icon/${selectedImg}.png`}
                />

                <Select
                  style={{ width: "calc(100% - 150px)", marginRight: "50px" }}
                  defaultValue="C"
                  onChange={handleLanguage}
                >
                  <Option value="C">C</Option>
                  <Option value="Cpp">C++</Option>
                  <Option value="Csharp">C#</Option>
                  <Option value="Database">데이터베이스</Option>
                  <Option value="Go">Go</Option>
                  <Option value="Html">HTML & CSS</Option>
                  <Option value="Java">Java</Option>
                  <Option value="Javascript">Javascript</Option>
                  <Option value="Kotlin">Kotlin</Option>
                  <Option value="MachineLearning">기계 학습</Option>
                  <Option value="Node">Node.js</Option>
                  <Option value="Python">Python</Option>
                  <Option value="React">React.js</Option>
                  <Option value="ReactNative">React Native</Option>
                  <Option value="Ruby">Ruby</Option>
                  <Option value="Scala">Scala</Option>
                  <Option value="Swift">Swift</Option>
                  <Option value="Algorithm">자료구조 & 알고리즘</Option>
                  <Option value="Etc">기타</Option>
                </Select>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "130px auto auto",
                alignItems: "center",
              }}
            >
              <StyledText
                style={{
                  margin: "30px",
                }}
              >
                난이도 / <br /> 투자 시간
              </StyledText>

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
          </div>
          <StyledInputBox>
            <StyledText style={{ marginTop: "30px" }}>세션 제목</StyledText>
            <StyledTextArea
              allowClear={true}
              maxLength={50}
              onChange={onChangeTitle}
              placeholder="50자 이내"
              autoSize={true}
            />
          </StyledInputBox>
        </div>

        <div>
          <StyledBlackButton className="border-radius-all">
            세부 정보
          </StyledBlackButton>

          <StyledInputBox style={{ marginTop: "20px" }}>
            <StyledText>세션 소개</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangeIntro}
              placeholder="200자 이내"
              autoSize={{ minRows: 3 }}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>세션 목표</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangeGoal}
              placeholder="200자 이내"
              autoSize={{ minRows: 3 }}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>진행 요일</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangecourseDate}
              placeholder="100자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>참여 인원</StyledText>
            <StyledInputNumber
              onChange={onChangeMember}
              placeholder="숫자만 적어주세요. ex) 6"
              min={1}
              max={100}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>진행 장소 및 방법</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangePlace}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledText>유의 사항</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={onChangeNotice}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
        </div>

        <div>
          <StyledBlackButton className="border-radius-all">
            커리큘럼
          </StyledBlackButton>

          <StyledInputBox style={{ marginTop: "20px" }}>
            <StyledText>1주차</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={(event) => {
                setcourseCurriculum({
                  ...courseCurriculum,
                  first: event.target.value,
                });
              }}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
          <StyledInputBox>
            <StyledText>2주차</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={(event) => {
                setcourseCurriculum({
                  ...courseCurriculum,
                  second: event.target.value,
                });
              }}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
          <StyledInputBox>
            <StyledText>3주차</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={(event) => {
                setcourseCurriculum({
                  ...courseCurriculum,
                  third: event.target.value,
                });
              }}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
          <StyledInputBox>
            <StyledText>4주차</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={(event) => {
                setcourseCurriculum({
                  ...courseCurriculum,
                  forth: event.target.value,
                });
              }}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
          <StyledInputBox>
            <StyledText>5주차</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={(event) => {
                setcourseCurriculum({
                  ...courseCurriculum,
                  fifth: event.target.value,
                });
              }}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
          <StyledInputBox>
            <StyledText>6주차</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={(event) => {
                setcourseCurriculum({
                  ...courseCurriculum,
                  sixth: event.target.value,
                });
              }}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
          <StyledInputBox>
            <StyledText>7주차</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={(event) => {
                setcourseCurriculum({
                  ...courseCurriculum,
                  seventh: event.target.value,
                });
              }}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
          <StyledInputBox>
            <StyledText>8주차</StyledText>
            <StyledTextArea
              maxLength={200}
              onChange={(event) => {
                setcourseCurriculum({
                  ...courseCurriculum,
                  eighth: event.target.value,
                });
              }}
              placeholder="200자 이내"
              autoSize={{ minRows: 2 }}
            />
          </StyledInputBox>
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
            if (
              !courseName ||
              !courseInfo ||
              !courseGoal ||
              !language ||
              !difficulty ||
              !requireTime ||
              !courseDate ||
              !coursePlace ||
              !courseNotice ||
              !courseMember ||
              !courseCurriculum
            ) {
              alert(FORM_IS_NOT_FULL);
            } else if (!courseType) {
              alert(CHECK_TOP_SESSION_OR_STUDY);
            } else {
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
              await enrollHandler(sessionInfo);
            }
          }}
        >
          등록하기
        </Button>
      </StyledBottomContainer>
    </StyledBackground>
  );
}
export default CourseRegisterBox;
