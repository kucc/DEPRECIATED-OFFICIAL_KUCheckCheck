import React, { useState } from 'react';

import PropTypes from 'prop-types';

import UserInfoCard from './UserInfoCard';
import UserInfoTop from './UserInfoTop';
import { StyledUserInfoContainer } from './style';

function UserInfo({ userData }) {
  const [changeListener, setChangeListener] = useState('');

  const handleChange = data => {
    setChangeListener(data);
  };

  return (
    <StyledUserInfoContainer>
      <UserInfoTop userData={userData} onChangeFunc={handleChange} />
      <UserInfoCard userData={userData} key={changeListener} />
    </StyledUserInfoContainer>
  );
}

export default UserInfo;

UserInfo.propTypes = {
  userData: PropTypes.object,
};
