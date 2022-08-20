import { generateKeys, generateActions, GET_MAIN_COURSE } from './types';
import { firestoreService } from '@/firebase';

export const getMainCourseKeys = generateKeys(GET_MAIN_COURSE);
const getMainCourseActions = generateActions(getMainCourseKeys);

export function getMainCourseRequest(currentSemester) {
    return async (dispatch) => {
        dispatch(getMainCourseActions.request());
        return await firestoreService
            .collection('courses')
            .where('semester', '==', currentSemester)
            .get()
            .then(response => {
                let courseArray = [];
                console.log('course action')

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
    }
}