import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Mypage from "./pages/Userpage";
import MypageEdit from "./pages/MypageEdit";
import Rules from "./pages/Rules";
import SessionAttendEdit from "./pages/SessionAttendEdit";
import SessionAttend from "./pages/SessionAttend";
import SessionMain from "./pages/SessionMain";
import SessionNew from "./pages/SessionNew";
import { authService } from "./firebase";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "./redux/actions/user_action";
import "antd/dist/antd.css";
import "./App.css";
import Userpage from "./pages/Userpage";

function App() {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    var link = document.location.pathname;
    authService.onAuthStateChanged((user) => {
      if (user) {
        if (link === "/login" || link === "/signup") {
          history.push("/");
        }
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/mypage/edit" component={MypageEdit} />
        <Route path="/userpage/:id" component={Userpage} />
        <Route
          path="/detail/:category/:id/attendance/edit"
          component={SessionAttendEdit}
        />
        <Route
          path="/detail/:category/:id/attendance"
          exact
          component={SessionAttend}
        />
        <Route path="/detail/:category/:id/" exact component={SessionMain} />
        <Route path="/rules" component={Rules} />
        <Route path="/" exact component={Main} />
        <Route path="/session-new" exact component={SessionNew} />
      </Switch>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    /* box-sizing: border-box; */
    font-family: "NexonRe", "Apple SD Gothic Neo", "Malgun Gothic", "arial sans-serif";
  }
`;
