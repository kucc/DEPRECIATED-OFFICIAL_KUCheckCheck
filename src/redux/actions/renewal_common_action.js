import { firestoreService } from '@/firebase';

import { GET_COMMON_INFO, generateKeys } from './types';

export const getCommonInfoKeys = generateKeys(GET_COMMON_INFO);

export async function getCommonInfoRequest() {
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

      return commonInfoData;
    })
    .catch(error => {
      console.error(error);
    });
}
