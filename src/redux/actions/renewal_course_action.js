import { firestoreService } from '@/firebase';

import { GET_MAIN_COURSE, generateKeys } from './types';

export const getMainCourseKeys = generateKeys(GET_MAIN_COURSE);

export async function getMainCourseRequest(currentSemester) {
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

        return courseArray;
      });
    })
    .catch(error => {
      console.error(error);

      return error;
    });
}
