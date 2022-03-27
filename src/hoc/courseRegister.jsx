/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { authService, firestoreService } from '@/firebase';
import { NEED_TO_LOGIN } from '@utility';

export const CourseRegisterHoc = SpecificComponent => {
  const CourseCheck = props => {
    useEffect(() => {
      // check courseRegister Term
      async function checkRegisterTerm() {
        const today = new Date();
        const commonInfoData = await firestoreService
          .collection('common')
          .doc('commonInfo')
          .get();
        if (
          commonInfoData.data().registerTerm.start.toDate() > today ||
          today > commonInfoData.data().registerTerm.end.toDate()
        )
          props.history.push('/');
      }
      checkRegisterTerm();

      authService.onAuthStateChanged(user => {
        if (!user) {
          alert(NEED_TO_LOGIN);
          props.history.push('/login');
        }
      });
    }, [props.history]);

    return <SpecificComponent {...props} />;
  };
  CourseCheck.propTypes = {
    props: PropTypes.object,
  };
  return CourseCheck;
};
CourseRegisterHoc.propTypes = {
  SpecificComponent: PropTypes.element,
};
