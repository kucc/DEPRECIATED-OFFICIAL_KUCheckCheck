import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import { authService } from "./firebase";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "./redux/actions/user_action";
import "antd/dist/antd.css";
import "./App.css";
import { ALREADY_LOGGED_IN } from "./constants/ERROR_MESSAGE";
import CourseAttendace from "./pages/Course/CourseAttendance";
import CourseAttendaceEdit from "./pages/Course/CourseAttendanceEdit";
import CoursePage from "./pages/Course";
import Footer from "./components/Footer";
import Rules from "./pages/Rules";
import CourseNew from "./pages/CourseNew";
import TimeTablePage from "./pages/TimeTablePage";
import CourseChange from "./pages/Course/CourseChange";
import course from "./hoc/course";
import userPage from "./hoc/userPage";
import auth from "./hoc/auth";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const path = document.location.pathname;
    authService.onAuthStateChanged((user) => {
      if (user) {
        if (path === "/login" || path === "/signup") {
          alert(ALREADY_LOGGED_IN);
          history.push("/");
        }
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    // TODO
    // 자신의 정보를 볼 수 있는 페이지는 profile 혹은 mypage가 더 적절하므로 userpage 이름 변경 필요
    // firebase의 authService에서 currentUser의 정보를 불러올 수 있기 때문에 id 파라미터는 삭제해야함
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/userpage/:id" component={userPage()} />
        <Route path="/rules" component={Rules} />
        <Route path="/timetable" component={TimeTablePage} />
        {/* 
          option : 0 => 모든 사람이 출입할 수 있음
          option : 1 => 로그인된 사람만이 출입할 수 있음
          option : 2 => 세션장만이 출입할 수 있음
          option : 3 => 출석관리자만이 출입할 수 있음 
        */}
        <Route
          exact
          path="/course/session/:id"
          component={course(CoursePage, 0)}
        />
        <Route
          exact
          path="/course/session/:id/attendance"
          component={course(CourseAttendace, 1)}
        />
        <Route
          exact
          path="/course/session/:id/attendance/edit"
          component={course(CourseAttendaceEdit, 3)}
        />
        <Route
          path="/course/session/:id/change"
          component={course(CourseChange, 2)}
        />
        <Route path="/course-new" exact component={auth(CourseNew)} />
        <Route path="/" exact component={Main} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    /* background-color: rgb(245, 245, 245); */
    padding: 0px;
    margin: 0px;
    /* box-sizing: border-box; */
    font-family: "NexonRe", "Apple SD Gothic Neo", "Malgun Gothic", "arial sans-serif";
  }
`;
