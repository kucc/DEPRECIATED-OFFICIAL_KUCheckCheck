import { Button, Dropdown, Empty, Menu, Skeleton } from "antd";
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
  const searchCategory = useSelector((state) => state.search.category);
  const searchLanguage = useSelector((state) => state.search.language);

  // 다양한 조건에 의한 filter, 1. 검색어, 2. tag(Category, Language), 3. 세션/스터디/프로젝트 분류
  useEffect(() => {
    // course의 id만을 가지는 배열을 복사
    const courseContainerArrayId = courseContainerArray.reduce(
      (acc, course) => {
        acc.push(course.id);
        return acc;
      },
      []
    );

    let searchTermResults = [...courseContainerArrayId];
    let searchCategoryResults = [...courseContainerArrayId];
    let searchLanguageResults = [...courseContainerArrayId];
    let courseToggleResults = [...courseContainerArrayId];

    // 1. 검색에 의한 filter
    if (searchTerm) {
      const regex = new RegExp(searchTerm, "gi");
      searchTermResults = courseContainerArray.reduce((acc, course) => {
        if (
          // courseName 검색
          course.courseName.match(regex) ||
          // courseLeader 검색
          course.courseLeader.name.match(regex) ||
          // courseLanguage 검색
          course.language.match(regex)
        ) {
          acc.push(course.id);
        }
        return acc;
      }, []);
    }
    // 2-1. Category에 의한 filter
    if (searchCategory) {
      searchCategoryResults = courseContainerArray.reduce((acc, course) => {
        if (searchCategory === "Web") {
          if (
            ["Database", "Html", "Javascript", "Node", "React"].includes(
              course.language
            )
          ) {
            acc.push(course.id);
          }
        } else if (searchCategory === "App") {
          // Java도 포함??
          if (
            ["Java", "Kotlin", "ReactNative", "Swift"].includes(course.language)
          ) {
            acc.push(course.id);
          }
        } else if (searchCategory === "알고리즘") {
          if (course.language === "Algorithm") {
            acc.push(course.id);
          }
        } else if (searchCategory === "머신러닝") {
          if (course.language === "MachineLearning") {
            acc.push(course.id);
          }
        }
        return acc;
      }, []);
    }
    // 2-2. Language에 의한 filter
    if (searchLanguage) {
      searchLanguageResults = courseContainerArray.reduce((acc, course) => {
        if (searchLanguage === "C") {
          if (course.language === "C") {
            acc.push(course.id);
          }
        } else if (searchLanguage === "Python") {
          if (course.language === "Python") {
            acc.push(course.id);
          }
        } else if (searchLanguage === "Javascript") {
          if (course.language === "Javascript") {
            acc.push(course.id);
          }
        } else if (searchLanguage === "Java") {
          if (course.language === "Java") {
            acc.push(course.id);
          }
        }
        return acc;
      }, []);
    }
    // 3. 세션/스터디/프로젝트 분류
    if (courseSelect) {
      // Type 1. 세션
      if (courseSelect === 1) {
        courseToggleResults = courseContainerArray.reduce((acc, course) => {
          if (course.courseType && course.courseType === 1) {
            acc.push(course.id);
          }
          return acc;
        }, []);
        // Type 2. 스터디
      } else if (courseSelect === 2) {
        courseToggleResults = courseContainerArray.reduce((acc, course) => {
          if (course.courseType && course.courseType === 2) {
            acc.push(course.id);
          }
          return acc;
        }, []);
      } else if (courseSelect === 3) {
        courseToggleResults = courseContainerArray.reduce((acc, course) => {
          if (course.courseType && course.courseType === 3) {
            acc.push(course.id);
          }
          return acc;
        }, []);
      }
    }
    // 4가지의 배열 중 겹치는 course만 filter 함.
    const filteredResults = courseContainerArray.reduce((acc, course) => {
      if (
        searchTermResults.indexOf(course.id) > -1 &&
        searchCategoryResults.indexOf(course.id) > -1 &&
        searchLanguageResults.indexOf(course.id) > -1 &&
        courseToggleResults.indexOf(course.id) > -1
      ) {
        acc.push(course);
      }
      return acc;
    }, []);
    // filterResult에 넣어줌.
    setfilterResults(filteredResults);
  }, [
    searchTerm,
    searchCategory,
    searchLanguage,
    courseSelect,
    courseContainerArray,
  ]);

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

  const renderCourse = () => {
    if (searchTerm || courseSelect !== 0 || searchCategory || searchLanguage) {
      if (filterResults.length === 0) {
        return <Empty style={{ marginTop: "50px" }} />;
      } else {
        return filterResults.map((course) => {
          return (
            <CourseContainer
              key={course.id}
              course={course}
              CourseApplicationState={true}
            />
          );
        });
      }
    } else {
      if (courseContainerArray.length === 0) {
        return <Skeleton />;
      } else {
        return courseContainerArray.map((course) => {
          return (
            <CourseContainer
              key={course.id}
              course={course}
              CourseApplicationState={true}
            />
          );
        });
      }
    }
  };

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
              <S.MainVerticalLine />
            </S.MainSessItem>
            <S.MainSessItem onClick={() => setcourseSelect(3)}>
              {courseSelect === 3 ? (
                <S.MainSessItemOnClick>프로젝트</S.MainSessItemOnClick>
              ) : (
                <S.MainSessItemOffClick>프로젝트</S.MainSessItemOffClick>
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
        {renderCourse()}
      </S.MainBottomWrapper>
    </>
  );
}
export default PMainBottomContainer;
