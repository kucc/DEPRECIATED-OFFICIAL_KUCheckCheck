/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import UserPage from '@pages/UserPage';

import { authService, firestoreService } from '@firebase';
import { NEED_TO_LOGIN } from '@utility/ALERT_MESSAGE';

export default function () {
  // userpage는 로그인이 필요한 페이지
  function UserPageCheck(props) {
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
  }
  return UserPageCheck;
}
