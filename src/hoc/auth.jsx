/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { authService } from '@/firebase';
import { NEED_TO_LOGIN } from '@utility/ALERT_MESSAGE';

export const AuthHoc = SpecificComponent => {
  const AuthCheck = props => {
    useEffect(() => {
      authService.onAuthStateChanged(user => {
        if (!user) {
          alert(NEED_TO_LOGIN);
          props.history.push('/login');
        }
      });
    }, []);

    return <SpecificComponent {...props} />;
  };
  AuthCheck.propTypes = {
    props: PropTypes.object,
  };
  return AuthCheck;
};
AuthHoc.propTypes = {
  SpecificComponent: PropTypes.element,
};
