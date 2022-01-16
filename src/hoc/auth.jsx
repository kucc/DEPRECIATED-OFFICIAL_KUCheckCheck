/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

// import PropTypes from 'prop-types';
// TODO: hoc의 prop-types는 어떻게 설정해줘야될까 생각해보기
import { authService } from '@/firebase';
import { NEED_TO_LOGIN } from '@utility/ALERT_MESSAGE';

export default function (SpecificComponent) {
  function AuthCheck(props) {
    useEffect(() => {
      authService.onAuthStateChanged(user => {
        if (!user) {
          alert(NEED_TO_LOGIN);
          props.history.push('/login');
        }
      });
    }, []);

    return <SpecificComponent {...props} />;
  }
  return AuthCheck;
}
// AuthCheck.propTypes = {
//   history: PropTypes.object.isRequired,
// };
