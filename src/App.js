import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Rules from "./pages/Rules";
import { authService } from "./firebase";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "./redux/actions/user_action";
import "antd/dist/antd.css";
import "./App.css";
import Userpage from "./pages/Userpage";
import { ALREADY_LOGGED_IN } from "./constants/ERROR_MESSAGE";

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
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/userpage/:id" component={Userpage} />
        <Route path="/rules" component={Rules} />
        <Route path="/" exact component={Main} />
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
