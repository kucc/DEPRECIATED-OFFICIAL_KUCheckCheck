import React, { useEffect, useState } from 'react';

import { Modal, message } from 'antd';
import PropTypes from 'prop-types';
import { AiFillLock, AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { firestoreService } from '@/firebase';
import {
  ALREADY_APPLIED_COURSE,
  NOT_ENROLLMENT_TERM,
  defaultUserAttendance,
} from '@utility';

import {
  StlyedHeadCountText,
  StyledCourseApplyCancel,
  StyledCourseApplyLock,
  StyledCourseApplyMy,
  StyledCourseApplyOff,
  StyledCourseApplyOn,
  StyledCourseLockText,
} from './style';

export const CourseApplication = ({
  course,
  courseId,
  isMainScreen,
  CourseApplicationState,
}) => {
  const { maxMemberNum, semester } = course;
  const currentUser = useSelector(state => state.user.currentUser);
  const [Loading, setLoading] = useState(false);
  const [courseMemberArr, setcourseMemberArr] = useState([]);
  const [courseAttendanceArr, setcourseAttendanceArr] = useState([]);
  const [currentSemester, setcurrentSemester] = useState('');
  const [enrollmentTerm, setenrollmentTerm] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const history = useHistory();
  const today = new Date();

  const showModal = () => {
    // 세션 취소하기 modal
    setIsModalVisible(true);
  };

  async function removeUserHistory(userId) {
    const userData = await firestoreService
      .collection('users')
      .doc(userId)
      .get();
    // 유저 데이터에서 courseHistory에 해당 course를 삭제
    const newCourseHistory = userData
      .data()
      .courseHistory.filter(course => course.id !== courseId);
    await firestoreService.collection('users').doc(userId).update({
      courseHistory: newCourseHistory,
    });
  }

  async function deleteCourse(courseMember) {
    await Promise.all(
      courseMember.map(userId => {
        return removeUserHistory(userId);
      }),
    );
  }

  const handleRemoveCourse = async () => {
    // courseData 가져오기
    const courseData = await firestoreService
      .collection('courses')
      .doc(courseId)
      .get();
    const courseMember = courseData.data().courseMember;
    // 만약 세션장일 경우
    if (currentUser.uid === course.courseLeader.id) {
      deleteCourse(courseMember);
      await firestoreService.collection('courses').doc(courseId).delete();
      alert('삭제했습니다!');
    }
    // 일반 유저
    else {
      // courseMember에서 해당 member를 제거
      const newcourseMember = courseMember.filter(
        element => element !== currentUser.uid,
      );
      // courseAttendance에서 해당 member를 제거
      const courseAttendance = courseData.data().courseAttendance;
      const newcourseAttendance = courseAttendance.filter(
        element => element.id !== currentUser.uid,
      );

      //userData 기져오기
      const useData = await firestoreService
        .collection('users')
        .doc(currentUser.uid)
        .get();
      // userHistory에서 해당 course를 제거
      const courseHistory = useData.data().courseHistory;
      const newcourseHistory = courseHistory.filter(
        element => element.id !== courseId,
      );

      // firebase update
      await firestoreService.collection('courses').doc(courseId).update({
        courseMember: newcourseMember,
        courseAttendance: newcourseAttendance,
      });
      await firestoreService.collection('users').doc(currentUser.uid).update({
        courseHistory: newcourseHistory,
      });

      setcourseMemberArr(newcourseMember);
      alert('취소했습니다!');
    }
    setIsModalVisible(false);
    // 취소 후 새로고침하기
    history.go(0);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setcourseMemberArr(course.courseMember);
    // 이벤트 리스너
    firestoreService
      .collection('courses')
      .doc(courseId)
      .onSnapshot(doc => {
        setcourseMemberArr(doc.data().courseMember);
        setcourseAttendanceArr(doc.data().courseAttendance);
      });

    // 수강 등록 기간
    firestoreService
      .collection('common')
      .doc('commonInfo')
      .get()
      .then(doc => {
        const newenrollmentTerm = [];
        // firebase timestamp => javascript date
        newenrollmentTerm.push(doc.data().enrollmentTerm.start.toDate());
        newenrollmentTerm.push(doc.data().enrollmentTerm.end.toDate());
        setenrollmentTerm(newenrollmentTerm);
        // 현재 학기 등록
        setcurrentSemester(doc.data().currentSemester);
      });
  }, [course.courseMember, courseId]);

  const applicationHandler = async () => {
    // loading이 false라면
    if (!Loading) {
      setLoading(true);
      const loadingMessage = message.loading('신청 중입니다.');
      // 신청 기간이 맞다면
      if (enrollmentTerm[0] <= today && today <= enrollmentTerm[1]) {
        // CourseMemver의 수가 Max보다 작을 때
        if (courseMemberArr.length < maxMemberNum) {
          // 현재 유저가 CourseMember에 없을 때
          if (courseMemberArr.indexOf(currentUser.uid) < 0) {
            try {
              // 새로운 course Member을 생성
              const newCourseMember = [...courseMemberArr, currentUser.uid];
              const newCourseAttendance = [
                ...courseAttendanceArr,
                {
                  id: currentUser.uid,
                  attendance: defaultUserAttendance,
                },
              ];
              // course에 유저 정보를 등록
              await firestoreService
                .collection('courses')
                .doc(courseId)
                .update({
                  courseMember: newCourseMember,
                  courseAttendance: newCourseAttendance,
                });

              // 새로운 course History 배열을 생성
              const userData = await firestoreService
                .collection('users')
                .doc(currentUser.uid)
                .get();
              const newCourseHistory = userData.data().courseHistory;

              // 유저 history에 course를 등록
              // memory 절약을 위해 userpage에서 render하는데 필요한 정보만 course에 담음
              await firestoreService
                .collection('users')
                .doc(currentUser.uid)
                .update({
                  courseHistory: [
                    ...newCourseHistory,
                    {
                      courseType: course.courseType,
                      language: course.language,
                      difficulty: course.difficulty,
                      requireTime: course.requireTime,
                      courseName: course.courseName,
                      courseInfo: course.courseInfo,
                      courseLeader: course.courseLeader,
                      semester: course.semester,
                      id: courseId,
                    },
                  ],
                });

              loadingMessage();
              message.success({
                content: '신청이 완료되었습니다!',
                style: {},
              });
              // alert(SUCCESS_APPLIED_COURSE);
            } catch (error) {
              alert('error', error);
            } finally {
              setLoading(false);
            }
          } else {
            alert(ALREADY_APPLIED_COURSE);
            setLoading(false);
          }
        }
      } else {
        alert(NOT_ENROLLMENT_TERM);
        setLoading(false);
      }
    }
  };

  const renderApplcationButton = () => {
    // 로그인된 유저가 아닐 경우
    if (!currentUser) {
      return (
        <StyledCourseApplyLock
          $isMobile={isMobile}
          $isMainScreen={isMainScreen}>
          <AiFillLock
            style={{
              fontSize: isMobile ? '18px' : '22px',
              marginBottom: isMobile && '7px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <div>로그인 후</div>
            <div>확인해주세요.</div>
          </div>
        </StyledCourseApplyLock>
      );
    }
    // 취소 상태인 경우
    else if (CourseApplicationState && CourseApplicationState === 'cancel') {
      return (
        <StyledCourseApplyCancel
          onClick={showModal}
          $isMainScreen={isMainScreen}
          $isMobile={isMobile}>
          수강 취소
        </StyledCourseApplyCancel>
      );
    }
    // 수강 신청 기간가 아닐경우 ( 등록 기간이 아니거나 현재 학기와 맞지 않을 경우 )
    else if (
      !(
        enrollmentTerm &&
        enrollmentTerm[0] <= today &&
        today <= enrollmentTerm[1]
      ) ||
      semester !== currentSemester
    ) {
      return (
        <StyledCourseApplyLock
          $isMobile={isMobile}
          $isMainScreen={isMainScreen}>
          <AiOutlineClose style={{ fontSize: isMobile ? '18px' : '20px' }} />
          <StyledCourseLockText>
            <div>수강 신청</div>
            <div>기간이 아닙니다.</div>
          </StyledCourseLockText>
        </StyledCourseApplyLock>
      );
    }
    // 수강 중
    else if (courseMemberArr && courseMemberArr.indexOf(currentUser.uid) >= 0) {
      return (
        <StyledCourseApplyMy $isMainScreen={isMainScreen} $isMobile={isMobile}>
          수강 중
          <StlyedHeadCountText>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </StlyedHeadCountText>
        </StyledCourseApplyMy>
      );
    }
    // 신청하기
    else if (!courseMemberArr || courseMemberArr.length < maxMemberNum) {
      return (
        <StyledCourseApplyOn
          onClick={applicationHandler}
          $isMainScreen={isMainScreen}
          $isMobile={isMobile}>
          신청하기
          <StlyedHeadCountText>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </StlyedHeadCountText>
        </StyledCourseApplyOn>
      );
    }
    // 가득 참
    else if (courseMemberArr.length >= maxMemberNum) {
      return (
        <StyledCourseApplyOff
          disabled
          $isMainScreen={isMainScreen}
          $isMobile={isMobile}>
          인원 마감
          <StlyedHeadCountText>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </StlyedHeadCountText>
        </StyledCourseApplyOff>
      );
    }
  };
  return (
    <>
      {renderApplcationButton()} {/* Enter로 Modal 확인버튼 클릭? */}
      <Modal
        title='취소하기'
        visible={isModalVisible}
        onOk={handleRemoveCourse}
        onCancel={handleCancel}>
        <p>
          정말로 신청한 과목을 취소할까요? 만약 세션장일 경우 과목이 삭제되게
          됩니다.
        </p>
      </Modal>
    </>
  );
};

CourseApplication.propTypes = {
  course: PropTypes.object,
  currentUser: PropTypes.object,
  courseId: PropTypes.string,
  isMainScreen: PropTypes.bool,
  CourseApplicationState: PropTypes.string,
};
