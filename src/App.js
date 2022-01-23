import React, { useEffect } from 'react';

import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import './App.css';
import Footer from './components/Footer';
import { authService } from './firebase';
import AuthHoc from './hoc/auth';
import CourseHoc from './hoc/course';
import UserPageHoc from './hoc/userPage';
import AttendacePage from './pages/AttendancePage';
import CoursePage from './pages/CoursePage';
import CourseRegisterPage from './pages/CourseRegisterPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NoticePage from './pages/NoticePage';
import TimeTablePage from './pages/TimeTablePage';
import { clearUser, setUser } from './redux/actions/user_action';
import { ALREADY_LOGGED_IN } from './utility/ALERT_MESSAGE';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const path = document.location.pathname;
    authService.onAuthStateChanged(user => {
      if (user) {
        if (path === '/login' || path === '/signup') {
          alert(ALREADY_LOGGED_IN);
          history.push('/');
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
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={JoinPage} />
        <Route path='/userpage/:id' component={UserPageHoc()} />
        <Route path='/rules' component={NoticePage} />
        <Route path='/timetable' component={TimeTablePage} />
        {/* 
          option : 0 => 모든 사람이 출입할 수 있음
          option : 1 => 로그인된 사람만이 출입할 수 있음
        */}
        <Route
          exact
          path='/course/session/:id'
          component={CourseHoc(CoursePage, 0)}
        />
        <Route
          exact
          path='/course/session/:id/attendance'
          component={CourseHoc(AttendacePage, 1)}
        />
        <Route
          exact
          path='/course/register'
          component={AuthHoc(CourseRegisterPage)}
        />
        <Route path='/' exact component={MainPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    font-family: "NexonRe", "Apple SD Gothic Neo", "Malgun Gothic", "arial sans-serif";
  }
  .out-shadow-strong{
    box-shadow: 0 11px 10px 2px lightgrey !important;
    transition: all 0.15s;
  }
  .out-shadow-middle{
    box-shadow: 0 6px 5px 2px lightgrey !important; 
    transition: all 0.15s;
  }
  .out-shadow-weak{
    box-shadow: 0px 3px 1.5px lightgrey !important;
  }
  .in-shadow-weak{
    box-shadow: inset 0px 3px 1.5px lightgrey !important;
    background-color: white;
    transition: all 0.1s;
  }
  // bottom에만 border radius
  .border-radius-bottom-strong{
    border-bottom-right-radius: 67px;
  border-bottom-left-radius: 67px;
  }
  .border-radius-bottom{
    border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  }
  // 각 모서리 전부 border radius
  .border-radius-all-half{
    border-radius : 50%
  }
  .border-radius-all{
    border-radius : 30px
  }
`;
