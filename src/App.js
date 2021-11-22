import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Rules from "./pages/Rules";
import SessionNew from "./pages/SessionNew";
import { authService } from "./firebase";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "./redux/actions/user_action";
import "antd/dist/antd.css";
import "./App.css";
import Userpage from "./pages/Userpage";
import { ALREADY_LOGGED_IN } from "./constants/ERROR_MESSAGE";
import CourseAttendace from "./pages/Course/CourseAttendance";
import CoursePage from "./pages/Course";
import Footer from "./components/Footer";

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
        <Route path="/userpage/:id" component={Userpage} />
        <Route path="/rules" component={Rules} />
        <Route exact path="/course/session/:id" component={CoursePage} />
        <Route
          path="/course/session/:id/attendance"
          component={CourseAttendace}
        />
        <Route path="/session-new" exact component={SessionNew} />
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
