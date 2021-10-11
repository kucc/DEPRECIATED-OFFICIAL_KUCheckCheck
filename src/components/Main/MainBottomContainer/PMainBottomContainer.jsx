import { Button, Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestoreService } from "../../../firebase";
import SessionContainer from "../SessionContainer/SessionContainer";
import * as S from "../style";

function PMainBottomContainer() {
  // Search를 redux에서 사용?? Database에서 사용??
  // const [search, setSearch] = useState(useRecoilState(userState).category);
  const [courseSelect, setcourseSelect] = useState(0);
  const [courseContainerArray, setcourseContainerArray] = useState([]);
  const [searchResults, setsearchResults] = useState([]);

  const searchTerm = useSelector((state) => state.search.searchTerm);

  // 검색 기능
  useEffect(() => {
    const regex = new RegExp(searchTerm, "gi");
    const searchResults = courseContainerArray.reduce((acc, course) => {
      if (
        (course.courseName && course.courseName.match(regex)) ||
        course.courseLeader.match(regex) ||
        course.language.match(regex)
      ) {
        acc.push(course);
      }
      return acc;
    }, []);
    console.log(searchResults);
    setsearchResults(searchResults);
  }, [searchTerm]);

  // course toggle 기능
  const matchCourseSelect = (num) => {
    const regex = new RegExp(searchTerm, "gi");
    const searchResults = courseContainerArray.reduce((acc, course) => {
      if (course.type && course.type === num) {
        if (searchTerm) {
          if (
            course.courseName.match(regex) ||
            course.courseLeader.match(regex) ||
            course.language.match(regex)
          ) {
            acc.push(course);
          }
        } else {
          acc.push(course);
        }
      }
      return acc;
    }, []);
    setsearchResults(searchResults);
  };

  useEffect(() => {
    if (courseSelect === 1) {
      matchCourseSelect(1);
    } else if (courseSelect === 2) {
      matchCourseSelect(2);
    }
  }, [courseSelect, searchTerm]);

  //세션 불러오기
  useEffect(() => {
    firestoreService
      .collection("courses")
      .get()
      .then((querySnapshot) => {
        let courseArray = [];
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          const coursesData = {
            id: doc.id,
            ...doc.data(),
          };
          courseArray.push(coursesData);
        });
        setcourseContainerArray(courseArray);
      });
  }, []);

  const menu = (
    // 학기를 클릭했을 때 해야할 일
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
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "25px",
                  backgroundColor: "#c32020",
                  borderColor: "#c32020",
                }}
              >
                21-2 학기
              </Button>
            </Dropdown>
          </S.MainSessDuration>
          <S.MainSessTab>
            <S.MainSessItem onClick={() => setcourseSelect(0)}>
              {courseSelect == 0 ? (
                <S.MainSessItemOnClick>전체</S.MainSessItemOnClick>
              ) : (
                <S.MainSessItemOffClick>전체</S.MainSessItemOffClick>
              )}
              <S.MainVerticalLine />
            </S.MainSessItem>
            <S.MainSessItem onClick={() => setcourseSelect(1)}>
              {courseSelect == 1 ? (
                <S.MainSessItemOnClick>세션</S.MainSessItemOnClick>
              ) : (
                <S.MainSessItemOffClick>세션</S.MainSessItemOffClick>
              )}
              <S.MainVerticalLine />
            </S.MainSessItem>
            <S.MainSessItem onClick={() => setcourseSelect(2)}>
              {courseSelect == 2 ? (
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
              href="/session-new"
            >
              등록하기
            </Button>
          </S.MainSessRig>
        </S.MainBottomBtnCont>
        {searchTerm || courseSelect !== 0
          ? searchResults.map((course) => {
              return <SessionContainer key={course.id} course={course} />;
            })
          : courseContainerArray.map((course) => {
              return <SessionContainer key={course.id} course={course} />;
            })}
      </S.MainBottomWrapper>
    </>
  );
}
export default PMainBottomContainer;
