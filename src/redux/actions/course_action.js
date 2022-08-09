import { GET_MAIN_COURSE } from './types';
import { firestoreService } from '@/firebase';

const generateKeys = (key) => ({
    request: key,
    success: `${key}_SUCCESS`,
    failure: `${key}_FAILURE`,
});

const generateActions = (generatedKeys) => ({
    request: () => ({ type: generatedKeys.request }),
    success: (data) => ({ type: generatedKeys.success, data }),
    failure: () => ({ type: generatedKeys.failure }),
});

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