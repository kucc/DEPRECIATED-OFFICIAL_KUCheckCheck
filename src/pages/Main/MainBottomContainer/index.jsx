import { Button, Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestoreService } from "../../../firebase";
import CourseContainer from "../../../components/CourseContainer/CourseContainer";
import EmptyBox from "../../../components/EmptyBox";
import WhiteShadowButton from "../../../components/Buttons/WhiteShadowButton";
import { useHistory } from "react-router-dom";
import {
  StyledMainBottomBtnCont,
  StyledMainBottomWrapper,
  StyledMainSessDuration,
  StyledMainSessItemOffClick,
  StyledMainSessRig,
  StyledMainSessTab,
  StyledMainVerticalLine,
} from "./style";

function MainBottomContainer() {
  const [courseSelect, setcourseSelect] = useState(0);
  const [courseContainerArray, setcourseContainerArray] = useState([]);
  const [filterResults, setfilterResults] = useState([]);
  const [currentSemester, setcurrentSemester] = useState("");
  const [pastSemester, setpastSemester] = useState([]);
  const user = useSelector((state) => state.user);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const searchCategory = useSelector((state) => state.search.category);
  const history = useHistory();

  // regexp에 포함되는 특수문자를 사용할 경우 발생하는 에러 제거, ex) c++
  const escapeRegExp = (searchTerm) => {
    return searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

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
    let courseToggleResults = [...courseContainerArrayId];

    // 1. 검색에 의한 filter
    if (searchTerm) {
      const regex = new RegExp(escapeRegExp(searchTerm), "gi");
      searchTermResults = courseContainerArray.reduce((acc, course) => {
        if (
          // courseName 검색
          course.courseName.match(regex) ||
          // courseLeader 검색
          course.courseLeader.name.match(regex) ||
          // courseLanguage 검색
          course.language.find((element) => element.match(regex))
        ) {
          acc.push(course.id);
        }
        return acc;
      }, []);
    }
    // 2. Category에 의한 filter
    if (searchCategory) {
      searchCategoryResults = courseContainerArray.reduce((acc, course) => {
        switch (searchCategory) {
          case "Web":
            if (
              // 두 배열의 공통된 부분을 찾음
              ["Database", "Html", "Javascript", "Node", "React"].filter((x) =>
                course.language.includes(x)
              ).length > 0
            ) {
              acc.push(course.id);
            }
            break;
          case "App":
            if (
              ["Java", "Kotlin", "ReactNative", "Swift"].filter((x) =>
                course.language.includes(x)
              ).length > 0
            ) {
              acc.push(course.id);
            }
            break;
          case "알고리즘":
            if (course.language.includes("Algorithm")) {
              acc.push(course.id);
            }
            break;
          case "머신러닝":
            if (course.language.includes("MachineLearning")) {
              acc.push(course.id);
            }
            break;
          case "C":
            if (course.language.includes("C")) {
              acc.push(course.id);
            }
            break;
          case "Python":
            if (course.language.includes("Python")) {
              acc.push(course.id);
            }
            break;
          case "Javascript":
            if (course.language.includes("Javascript")) {
              acc.push(course.id);
            }
            break;
          case "Java":
            if (course.language.includes("Java")) {
              acc.push(course.id);
            }
            break;
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
        courseToggleResults.indexOf(course.id) > -1
      ) {
        acc.push(course);
      }
      return acc;
    }, []);
    // filterResult에 넣어줌.
    setfilterResults(filteredResults);
  }, [searchTerm, searchCategory, courseSelect, courseContainerArray]);

  // 학기 정보 불러오기
  useEffect(() => {
    async function loadSemesterData() {
      const semesterData = await firestoreService
        .collection("common")
        .doc("commonInfo")
        .get();
      setcurrentSemester(semesterData.data().currentSemester);
      // 배열을 역순으로 저장해줌
      setpastSemester(semesterData.data().pastSemester.reverse());
      // setcourseContainerArray(courseArray);
    }
    loadSemesterData();
  }, []);

  // 학기에 따라서 course 정보 불러오기
  useEffect(() => {
    async function loadCourseData() {
      let courseArray = [];
      const courseData = await firestoreService.collection("courses").get();
      courseData.forEach((doc) => {
        if (doc.data().semester === currentSemester) {
          const coursesData = {
            id: doc.id,
            ...doc.data(),
          };
          courseArray.push(coursesData);
        }
      });
      setcourseContainerArray(courseArray);
    }
    loadCourseData();
  }, [currentSemester]);

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
    if (searchTerm || courseSelect !== 0 || searchCategory) {
      if (filterResults.length === 0) {
        return <EmptyBox />;
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
        return <EmptyBox />;
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
      <StyledMainBottomWrapper>
        <StyledMainBottomBtnCont>
          <StyledMainSessDuration>
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
          </StyledMainSessDuration>
          <StyledMainSessTab>
            <StyledMainSessItemOffClick
              courseSelect={courseSelect}
              // selectedType for use in StyledComponent
              selectedType={0}
              onClick={() => setcourseSelect(0)}
            >
              전체
            </StyledMainSessItemOffClick>
            <StyledMainVerticalLine />
            <StyledMainSessItemOffClick
              courseSelect={courseSelect}
              selectedType={1}
              onClick={() => setcourseSelect(1)}
            >
              세션
            </StyledMainSessItemOffClick>
            <StyledMainVerticalLine />
            <StyledMainSessItemOffClick
              courseSelect={courseSelect}
              selectedType={2}
              onClick={() => setcourseSelect(2)}
            >
              스터디
            </StyledMainSessItemOffClick>
            <StyledMainVerticalLine />
            <StyledMainSessItemOffClick
              courseSelect={courseSelect}
              selectedType={3}
              onClick={() => setcourseSelect(3)}
            >
              프로젝트
            </StyledMainSessItemOffClick>
          </StyledMainSessTab>
          <StyledMainSessRig>
            {user.currentUser && (
              <WhiteShadowButton
                text="등록하기"
                onClick={() => history.push("/course-new")}
              />
            )}
          </StyledMainSessRig>
        </StyledMainBottomBtnCont>
        {renderCourse()}
      </StyledMainBottomWrapper>
    </>
  );
}
export default MainBottomContainer;
