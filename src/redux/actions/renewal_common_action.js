import { firestoreService } from '@/firebase';

import { GET_COMMON_INFO, generateActions, generateKeys } from './types';

export const getCommonInfoKeys = generateKeys(GET_COMMON_INFO);
const getCommonInfoActions = generateActions(getCommonInfoKeys);

export function getCommonInfoRequest() {
  return async dispatch => {
    dispatch(getCommonInfoActions.request());
    return await firestoreService
      .collection('common')
      .doc('commonInfo')
      .get()
      .then(response => {
        const responseData = response.data();

        let commonInfoData = {
          currentSemester: responseData.currentSemester,
          pastSemester: responseData.pastSemester.reverse(),
        };

        let registerTermArray = [];
        registerTermArray.push(responseData.registerTerm.start.toDate());
        registerTermArray.push(responseData.registerTerm.end.toDate());

        commonInfoData.registerTerm = registerTermArray;

        dispatch(getCommonInfoActions.success(commonInfoData));
      })
      .catch(error => {
        dispatch(getCommonInfoActions.failure());
        console.error(error);
      });
  };
}
