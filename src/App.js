import React, { useEffect } from 'react';

import 'antd/dist/antd.less';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

import { clearUser, setUser } from '@redux/actions/user_action';

import { NavBar, Footer } from '@components';
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
  RenewalMainPage
} from '@pages';
import { RenewalHeader, RenewalTopHeader, RenewalFooter } from '@components';

import { authService } from '@/firebase';
import { CourseHoc, CourseRegisterHoc, UserPageHoc } from '@hoc';
import { SINGLE_PATHNAMES_LIST, StyledBody, StyledMainContainer, RENEWAL_PATH_LIST, StyledMain } from './utility';

import './App.less';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => { // Link로 이동 시 스크롤 top
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        if (pathname === '/login' || pathname === '/signup') {
          history.push('/');
        }
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  }, [dispatch, history]);

  const SinglePageRouter = () => {
    return (
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={JoinPage} />
      </Switch>
    )
  }

  const NavFooterPageRouter = () => {    // TODO
    // 자신의 정보를 볼 수 있는 페이지는 profile 혹은 mypage가 더 적절하므로 userpage 이름 변경 필요
    // firebase의 authService에서 currentUser의 정보를 불러올 수 있기 때문에 id 파라미터는 삭제해야함
    return (
      <Switch>
        <Route exact path='/' component={MainPage} />
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
    )
  }

  const RenewalPageRouter = () => {
    return (
      <Switch>
        <Route path='/main' component={RenewalMainPage} />
        <Route path='/test' component={RenewalMainPage} />
      </Switch>
    )
  }


  return (
    <>
      <GlobalStyle />
      {SINGLE_PATHNAMES_LIST.includes(pathname) ?
        (
          SinglePageRouter()
        ) : RENEWAL_PATH_LIST.includes(pathname) ? (
          <StyledBody>
            <RenewalTopHeader />
            <RenewalHeader pathname={pathname} />
            <StyledMainContainer>
              {/* <main> */}
              {RenewalPageRouter()}
              {/* </main> */}
              <RenewalFooter />
            </StyledMainContainer>
          </StyledBody>
        ) : (
          <>
            <NavBar />
            <StyledMain className='main-background-color'>
              {NavFooterPageRouter()}
            </StyledMain>
            <Footer />
          </>
        )}
    </>
  );
}

export default App;
