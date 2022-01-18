/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

// TODO: hoc의 prop-types는 어떻게 설정해줘야될까 생각해보기
import UserPage from '@pages/UserPage';

import { authService, firestoreService } from '@/firebase';
import { NEED_TO_LOGIN } from '@utility/ALERT_MESSAGE';

function UserPageHoc() {
  // userpage는 로그인이 필요한 페이지
  const UserPageCheck = props => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      async function fetchUserData() {
        // load course Data
        const userId = props.match.params.id;
        // get course Data from firebase
        const data = await firestoreService
          .collection('users')
          .doc(userId)
          .get();
        // attach courseId to data
        setUserData({ ...data.data(), userId });

        // need to login
        if (!authService.currentUser) {
          alert(NEED_TO_LOGIN);
          props.history.push('/login');
        }
      }
      fetchUserData();
    }, []);

    return <UserPage {...props} userData={userData} />;
  };
  UserPageHoc.propTypes = {
    props: PropTypes.object.isRequired,
  };
  return UserPageCheck;
}
export default UserPageHoc;
