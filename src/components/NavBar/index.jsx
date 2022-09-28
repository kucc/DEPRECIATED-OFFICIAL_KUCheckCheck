import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { authService } from '@/firebase';

import MNavBar from './MNavBar';
import PNavBar from './PNavBar';
import { NavBarContainer } from './style';

export const NavBar = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const logout = async () => {
    try {
      await authService.signOut();
      window.alert('로그아웃이 되었습니다!');
      window.location.replace('/');
    } catch (e) {
      alert(e.response.data.error.msg);
    }
  };

  const myPage = async () => {
    try {
      history.push(`/userpage/${user.currentUser.uid}`);
    } catch (e) {
      alert(e.response.data.error.msg);
    }
  };

  const renderNavBar = () => {
    if (isMobile) {
      return <MNavBar user={user} logout={logout} myPage={myPage} />;
    } else {
      return <PNavBar user={user} logout={logout} myPage={myPage} />;
    }
  };

  return (
    <NavBarContainer className='border-radius-bottom'>
      {renderNavBar()}
    </NavBarContainer>
  );
};
