import { Button, Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestoreService } from "../../../firebase";
import CourseContainer from "../CourseContainer/CourseContainer";
import * as S from "../style";

function PMainBottomContainer() {
  // Search를 redux에서 사용?? Database에서 사용??
  const [courseSelect, setcourseSelect] = useState(0);
  const [courseContainerArray, setcourseContainerArray] = useState([]);
  const [filterResults, setfilterResults] = useState([]);
  const [currentSemester, setcurrentSemester] = useState("");
  const [pastSemester, setpastSemester] = useState([]);
  const user = useSelector((state) => state.user);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  // 검색 기능
  useEffect(() => {
    const regex = new RegExp(searchTerm, "gi");
    const searchResults = courseContainerArray.reduce((acc, course) => {
      if (
        course.courseName.match(regex) ||
        // courseLeader 정보가 없어서 주석처리 해둠. 원래 있어야할 기능.
        course.courseLeader.match(regex) ||
        course.language.match(regex)
      ) {
        acc.push(course);
      }
      return acc;
    }, []);
    setfilterResults(searchResults);
  }, [searchTerm, courseContainerArray]);

  // course toggle 기능
  const matchCourseSelect = (num) => {
    const regex = new RegExp(searchTerm, "gi");
    const matchResults = courseContainerArray.reduce((acc, course) => {
      if (course.courseType && course.courseType === num) {
        if (searchTerm) {
          if (course.courseName.match(regex) || course.language.match(regex)) {
            acc.push(course);
          }
        } else {
          acc.push(course);
        }
      }
      return acc;
    }, []);
    setfilterResults(matchResults);
  };

  // 학기 선택 기능
  useEffect(() => {
    firestoreService
      .collection("courses")
      .get()
      .then((querySnapshot) => {
        let courseArray = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().semester === currentSemester) {
            const coursesData = {
              id: doc.id,
              ...doc.data(),
            };
            courseArray.push(coursesData);
          }
        });
        setcourseContainerArray(courseArray);
      });
  }, [currentSemester]);

  useEffect(() => {
    if (courseSelect === 1) {
      matchCourseSelect(1);
    } else if (courseSelect === 2) {
      matchCourseSelect(2);
    }
  }, [courseSelect, courseContainerArray]);

  //세션 불러오기
  useEffect(() => {
    firestoreService
      .collection("common")
      .doc("commonInfo")
      .get()
      .then((doc) => {
        setcurrentSemester(doc.data().currentSemester);
        // 배열을 역순으로 저장해줌
        setpastSemester(doc.data().pastSemester.reverse());
      });

    firestoreService
      .collection("courses")
      .get()
      .then((querySnapshot) => {
        let courseArray = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().semester === currentSemester) {
            const coursesData = {
              id: doc.id,
              ...doc.data(),
            };
            courseArray.push(coursesData);
          }
        });
        setcourseContainerArray(courseArray);
      });
  }, []);

  const menu = (
    // 학기를 클릭했을 때 해야할 일
    <Menu>
      {pastSemester &&
        pastSemester.map((semester, key) => {
          return (
            <Menu.Item key={key}>
              <a onClick={() => setcurrentSemester(semester)}>
                {semester} 학기
              </a>
            </Menu.Item>
          );
        })}
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
                {currentSemester} 학기
              </Button>
            </Dropdown>
          </S.MainSessDuration>
          <S.MainSessTab>
            <S.MainSessItem onClick={() => setcourseSelect(0)}>
              {courseSelect === 0 ? (
                <S.MainSessItemOnClick>전체</S.MainSessItemOnClick>
              ) : (
                <S.MainSessItemOffClick>전체</S.MainSessItemOffClick>
              )}
              <S.MainVerticalLine />
            </S.MainSessItem>
            <S.MainSessItem onClick={() => setcourseSelect(1)}>
              {courseSelect === 1 ? (
                <S.MainSessItemOnClick>세션</S.MainSessItemOnClick>
              ) : (
                <S.MainSessItemOffClick>세션</S.MainSessItemOffClick>
              )}
              <S.MainVerticalLine />
            </S.MainSessItem>
            <S.MainSessItem onClick={() => setcourseSelect(2)}>
              {courseSelect === 2 ? (
                <S.MainSessItemOnClick>스터디</S.MainSessItemOnClick>
              ) : (
                <S.MainSessItemOffClick>스터디</S.MainSessItemOffClick>
              )}
            </S.MainSessItem>
          </S.MainSessTab>
          <S.MainSessRig>
            {user.currentUser && (
              <Button
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "25px",
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 1.5px",
                  display: "grid",
                  placeItems: "center",
                }}
                href="/session-new"
              >
                등록하기
              </Button>
            )}
          </S.MainSessRig>
        </S.MainBottomBtnCont>
        {searchTerm || courseSelect !== 0
          ? filterResults.map((course) => {
              return (
                <CourseContainer
                  key={course.id}
                  course={course}
                  CourseApplicationState={true}
                />
              );
            })
          : courseContainerArray.map((course) => {
              return (
                <CourseContainer
                  key={course.id}
                  course={course}
                  CourseApplicationState={true}
                />
              );
            })}
      </S.MainBottomWrapper>
    </>
  );
}
export default PMainBottomContainer;
