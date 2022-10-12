import { useEffect } from 'react';

import 'antd/dist/antd.less';
import 'moment/locale/ko';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import {
  Footer,
  LeftBackButton,
  NavBar,
  RenewalFooter,
  RenewalHeader,
  RenewalTopHeader,
} from '@components';
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
  RenewalAdminPage,
  RenewalAttendancePage,
  RenewalCourseCreatePage,
  RenewalCourseDetailPage,
  RenewalJoinPage,
  RenewalLoginPage,
  RenewalMainPage,
  RenewalNoticePage,
  RenewalProfilePage,
  RenewalTimeTablePage,
  TimeTablePage,
} from '@pages';

import './App.less';
import GlobalStyle from './GlobalStyle';
import { getMember } from './api';
import { CourseHoc, CourseRegisterHoc, UserPageHoc } from './hoc';
import { isLoggedInState, userState } from './recoilState';
import {
  INCLUDE_HEADER_PATH_LIST,
  RENEWAL_PATH,
  SINGLE_PATHNAMES_LIST,
  StyledIncludeHeaderMain,
  StyledMainContainer,
  StyledOldMain,
  StyledUnIncludeHeaderMain,
} from './utility';

export const AppAuth = () => {
  const [member, setMember] = useRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  useEffect(() => {
    // Link로 이동 시 스크롤 top
    window.scrollTo(0, 0);

    const getMemberInfo = getMember() as User & { isLoggedIn: boolean };

    if (getMemberInfo.isLoggedIn) {
      setMember(getMemberInfo);
      setIsLoggedIn(true);
    } else {
      setMember(undefined);
      setIsLoggedIn(false);
    }
  }, []);

  // 기존 페이지들
  const NavFooterPageRouter = () => {
    // TODO
    // 자신의 정보를 볼 수 있는 페이지는 profile 혹은 mypage가 더 적절하므로 userpage 이름 변경 필요
    // firebase의 authService에서 currentUser의 정보를 불러올 수 있기 때문에 id 파라미터는 삭제해야함
    return (
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
        <Route exact path='/course/register' component={CourseRegisterHoc(CourseRegisterPage)} />
        {/* 
          option : 0 => 모든 사람이 출입할 수 있음
          option : 1 => 로그인된 사람만이 출입할 수 있음
        */}
        <Route exact path='/course/:id' component={CourseHoc(CoursePage, 0)} />
        <Route exact path='/course/:id/attendance' component={CourseHoc(AttendacePage, 1)} />
        <Route exact path='/getCSV' component={GetCSVPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  };

  // 리뉴얼 페이지들
  const RenewalPageRouter = () => {
    return (
      <Switch>
        <NotForMemberRoute path={RENEWAL_PATH.login} component={RenewalLoginPage} />
        <NotForMemberRoute path={RENEWAL_PATH.signUp} component={RenewalJoinPage} />
        <Route exact path={RENEWAL_PATH.main} component={RenewalMainPage} />
        <Route path={RENEWAL_PATH.courseCreate} component={RenewalCourseCreatePage} />
        <Route path={RENEWAL_PATH.courseDetail} component={RenewalCourseDetailPage} />
        <Route path={RENEWAL_PATH.attendance} component={RenewalAttendancePage} />
        <Route path={RENEWAL_PATH.timeTable} component={RenewalTimeTablePage} />
        <Route path={RENEWAL_PATH.profile} component={RenewalProfilePage} />
        <Route path={RENEWAL_PATH.notice} component={RenewalNoticePage} />
        <Route path={RENEWAL_PATH.admin} component={RenewalAdminPage} />
      </Switch>
    );
  };

  const { pathname } = useLocation();

  const pathSliced = pathname.split('/');
  const path = pathSliced.length > 3 ? '/course/detail/:id' : pathname; // 세션 소개 url 구분

  const NotForMemberRoute = ({ component: Component, ...res }: any) => {
    return (
      <Route
        {...res}
        render={props => (member ? <Redirect to={RENEWAL_PATH.main} /> : <Component {...props} />)}
      />
    );
  };

  return (
    <>
      <GlobalStyle />
      {SINGLE_PATHNAMES_LIST.includes(pathname) ? ( // 로그인, 회원가입 처럼 헤더, 푸터 없는 경우
        RenewalPageRouter()
      ) : Object.values(RENEWAL_PATH).includes(path) ? ( // 리뉴얼 페이지
        <>
          <RenewalTopHeader />
          <StyledMainContainer>
            {INCLUDE_HEADER_PATH_LIST.includes(path) ? (
              <>
                <RenewalHeader pathname={pathname} />
                <StyledIncludeHeaderMain>{RenewalPageRouter()}</StyledIncludeHeaderMain>
              </>
            ) : (
              <>
                <LeftBackButton />
                <StyledUnIncludeHeaderMain>{RenewalPageRouter()}</StyledUnIncludeHeaderMain>
              </>
            )}
          </StyledMainContainer>
          <RenewalFooter />
        </>
      ) : (
        // 기존 페이지
        <>
          <NavBar />
          <StyledOldMain className='main-background-color'>{NavFooterPageRouter()}</StyledOldMain>
          <Footer />
        </>
      )}
    </>
  );
};
