import { firestoreService } from '@/firebase';

import { GET_MAIN_COURSE, generateActions, generateKeys } from './types';

export const getMainCourseKeys = generateKeys(GET_MAIN_COURSE);
const getMainCourseActions = generateActions(getMainCourseKeys);

export function getMainCourseRequest(currentSemester) {
  return async dispatch => {
    dispatch(getMainCourseActions.request());
    return await firestoreService
      .collection('courses')
      .where('semester', '==', currentSemester)
      .get()
      .then(response => {
        let courseArray = [];

        response.forEach(doc => {
          const courseData = {
            id: doc.id,
            ...doc.data(),
          };

          courseArray.push(courseData);
        });
        dispatch(getMainCourseActions.success(courseArray));
      })
      .catch(error => {
        dispatch(getMainCourseActions.failure());
        console.error(error);
      });
  };
}
