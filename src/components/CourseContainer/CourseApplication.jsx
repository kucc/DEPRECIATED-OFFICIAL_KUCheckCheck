import React, { useEffect, useState } from 'react';

import { firestoreService } from '@/firebase';
import { message } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { AiFillLock, AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import {
  ALREADY_APPLIED_COURSE,
  NOT_ENROLLMENT_TERM,
  SUCCESS_APPLIED_COURSE,
} from '@utility/ALERT_MESSAGE';

import {
  StyledCourseApplyLock,
  StyledCourseApplyMy,
  StyledCourseApplyOff,
  StyledCourseApplyOn,
} from './style';

function CourseApplication({ course, courseId }) {
  const { maxMemberNum, semester } = course;
  const currentUser = useSelector(state => state.user.currentUser);
  const [Loading, setLoading] = useState(false);
  const [courseMemberArr, setcourseMemberArr] = useState([]);
  const [courseAttendanceArr, setcourseAttendanceArr] = useState([]);
  const [currentSemester, setcurrentSemester] = useState('');
  const [enrollmentTerm, setenrollmentTerm] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hoverState, sethoverState] = useState(false);
  const [today, settoday] = useState('');

  const showModal = () => {
    // 세션 취소하기 modal
    if (currentUser.uid === course.courseLeader.id) {
      alert('세션장은 취소할 수 없습니다!');
    } else {
      setIsModalVisible(true);
    }
  };

  const handleOk = async () => {
    // courseMember에서 해당 member를 제거
    let courseMember = [];
    await firestoreService
      .collection('courses')
      .doc(courseId)
      .get()
      .then(querySnapshot => {
        courseMember = querySnapshot.data().courseMember;
      });
    const newcourseMember = courseMember.filter(
      element => element !== currentUser.uid,
    );

    // courseAttendance에서 해당 member를 제거
    let courseAttendance = [];
    await firestoreService
      .collection('courses')
      .doc(courseId)
      .get()
      .then(querySnapshot => {
        courseAttendance = querySnapshot.data().courseAttendance;
      });
    const newcourseAttendance = courseAttendance.filter(
      element => element.id !== currentUser.uid,
    );

    // userHistory에서 해당 course를 제거
    let courseHistory = [];
    await firestoreService
      .collection('users')
      .doc(currentUser.uid)
      .get()
      .then(querySnapshot => {
        courseHistory = querySnapshot.data().courseHistory;
      });
    const newcourseHistory = courseHistory.filter(
      element => element.id !== courseId,
    );

    setcourseMemberArr(newcourseMember);
    // firebase update

    await firestoreService.collection('courses').doc(courseId).update({
      courseMember: newcourseMember,
      courseAttendance: newcourseAttendance,
    });

    await firestoreService.collection('users').doc(currentUser.uid).update({
      courseHistory: newcourseHistory,
    });

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleMouseHover = () => {
    // hover하면 수강 취소로 text 바꾸기
    setTimeout(() => {
      sethoverState(!hoverState);
    }, 100);
  };

  useEffect(() => {
    setcourseMemberArr(course.courseMember);
    settoday(new Date());
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
  }, []);

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
                  attendance: [0, 0, 0, 0, 0, 0, 0, 0],
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
              let newCourseHistory = [];
              await firestoreService
                .collection('users')
                .doc(currentUser.uid)
                .get()
                .then(querySnapshot => {
                  newCourseHistory = querySnapshot.data().courseHistory;
                });

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
              alert(SUCCESS_APPLIED_COURSE);
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
        <StyledCourseApplyLock>
          <AiFillLock style={{ fontSize: '22px' }} />
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
        <StyledCourseApplyLock>
          <AiOutlineClose style={{ fontSize: '22px' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <div>수강 신청</div>
            <div>기간이 아닙니다.</div>
          </div>
        </StyledCourseApplyLock>
      );
    }
    // 수강 중
    else if (courseMemberArr && courseMemberArr.indexOf(currentUser.uid) >= 0) {
      return (
        <StyledCourseApplyMy
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseHover}
          onClick={showModal}>
          {hoverState ? '수강 취소' : '수강 중'}
          <div style={{ fontSize: '14px' }}>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </div>
        </StyledCourseApplyMy>
      );
    }
    // 신청하기
    else if (!courseMemberArr || courseMemberArr.length < maxMemberNum) {
      return (
        <StyledCourseApplyOn
          type='danger'
          onClick={applicationHandler}
          loading={Loading}>
          신청하기
          <div style={{ fontSize: '14px' }}>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </div>
        </StyledCourseApplyOn>
      );
    }
    // 가득 참
    else if (courseMemberArr.length >= maxMemberNum) {
      return (
        <StyledCourseApplyOff>
          인원 마감{' '}
          <div style={{ fontSize: '14px' }}>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </div>
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
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>정말로 신청한 과목을 취소할까요?</p>
      </Modal>
    </>
  );
}

export default CourseApplication;
