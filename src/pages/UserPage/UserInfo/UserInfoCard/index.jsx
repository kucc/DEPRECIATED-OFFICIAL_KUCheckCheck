import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { UserCard } from '@components';
import { StyledInfoCardContainer } from '@components/UserCard/style';

import { firestoreService } from '@/firebase';

function UserInfoCard({ userData }) {
  const [firebaseUser, setfirebaseUser] = useState();

  //유저 정보 불러오기
  useEffect(() => {
    async function fetchUserData() {
      if (userData) {
        // key 값이 변함에 따라 값을 업데이트 해와야 하므로 다시 firebase 호출
        // 다른 방법으로 Top 컴포넌트에서 변경된 값을 prop으로 가져와서 update 해주는 방법이 있음. 또는 이벤트 리스너 사용.
        try {
          const newUserData = await firestoreService
            .collection('users')
            .doc(userData.userId)
            .get();
          setfirebaseUser(newUserData.data());
        } catch (error) {
          alert('error', error);
        }
      }
    }
    fetchUserData();
  }, [userData]);

  return (
    <>
      {firebaseUser ? (
        <UserCard
          isDetail={true}
          emoji={firebaseUser.emoji}
          name={firebaseUser.name}
          comment={firebaseUser.comment}
          detailComment={firebaseUser.detailComment}
          link={firebaseUser.link}
          email={firebaseUser.email}
        />
      ) : (
        <StyledInfoCardContainer />
      )}
    </>
  );
}

export default UserInfoCard;

UserInfoCard.propTypes = {
  userData: PropTypes.object,
};
