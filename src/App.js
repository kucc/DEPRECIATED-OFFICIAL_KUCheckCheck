import React, { useEffect } from 'react';

import 'antd/dist/antd.less';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { clearUser, setUser } from '@redux/actions/user_action';

import { Footer } from '@components';
import {
  AttendacePage,
  CoursePage,
  CourseRegisterPage,
  GetCSVPage,
  JoinPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  NoticePage,
  TimeTablePage,
} from '@pages';

import { authService } from '@/firebase';
import { CourseHoc, CourseRegisterHoc, UserPageHoc } from '@hoc';

import './App.less';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const path = document.location.pathname;
    authService.onAuthStateChanged(user => {
      if (user) {
        if (path === '/login' || path === '/signup') {
          history.push('/');
        }
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  }, [dispatch, history]);

  return (
    // TODO
    // 자신의 정보를 볼 수 있는 페이지는 profile 혹은 mypage가 더 적절하므로 userpage 이름 변경 필요
    // firebase의 authService에서 currentUser의 정보를 불러올 수 있기 때문에 id 파라미터는 삭제해야함
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={JoinPage} />
        <Route path='/rules' component={NoticePage} />
        <Route path='/timetable' component={TimeTablePage} />
        {/* userPage */}
        <Route exact path='/userpage/not-found' component={NotFoundPage} />
        <Route path='/userpage/:id' component={UserPageHoc()} />
        {/* coursePage */}
        <Route exact path='/course/not-found' component={NotFoundPage} />
        <Route
          exact
          path='/course/register'
          component={CourseRegisterHoc(CourseRegisterPage)}
        />
        {/* 
          option : 0 => 모든 사람이 출입할 수 있음
          option : 1 => 로그인된 사람만이 출입할 수 있음
        */}
        <Route exact path='/course/:id' component={CourseHoc(CoursePage, 0)} />
        <Route
          exact
          path='/course/:id/attendance'
          component={CourseHoc(AttendacePage, 1)}
        />
        <Route exact path='/getCSV' component={GetCSVPage} />
        <Route component={NotFoundPage} />
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
  .out-shadow-extra-strong{
    box-shadow: 0 15px 14px 3px lightgrey !important;
    transition: all 0.15s;
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
  .in-shadow-middle{
    box-shadow: inset 0 6px 5px 2px lightgrey !important; 
    background-color: white;
    transition: all 0.1s;
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
