import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestoreService } from "../../../firebase";
import * as S from "../style";
import { AiFillLock, AiOutlineClose } from "react-icons/ai";
import Modal from "antd/lib/modal/Modal";

function CourseApplication({ maxMemberNum, courseMember, courseId }) {
  const user = useSelector((state) => state.user);
  const [Loading, setLoading] = useState(false);
  const [courseMemberArr, setcourseMemberArr] = useState([]);
  const [courseAttendanceArr, setcourseAttendanceArr] = useState([]);
  const [enrollmentTerm, setenrollmentTerm] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [today, settoday] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // courseMember에서 해당 member를 제거, courseAttendance에서 해당 member를 제거
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setcourseMemberArr(courseMember);
    settoday(new Date());
    // 이벤트 리스너
    firestoreService
      .collection("courses")
      .doc(courseId)
      .onSnapshot((doc) => {
        setcourseMemberArr(doc.data().courseMember);
        setcourseAttendanceArr(doc.data().courseAttendance);
      });

    // 수강 등록 기간
    firestoreService
      .collection("common")
      .doc("commonInfo")
      .get()
      .then((doc) => {
        const newenrollmentTerm = [];
        // firebase timestamp => javascript date
        newenrollmentTerm.push(doc.data().enrollmentTerm[0].toDate());
        newenrollmentTerm.push(doc.data().enrollmentTerm[1].toDate());
        setenrollmentTerm(newenrollmentTerm);
      });
  }, []);

  const applicationHandler = () => {
    // loading이 false라면
    if (!Loading) {
      setLoading(true);
      // 신청 기간이 맞다면
      if (enrollmentTerm[0] <= today && today <= enrollmentTerm[1]) {
        // CourseMemver의 수가 Max보다 작을 때
        if (courseMember.length < maxMemberNum) {
          // 현재 유저가 CourseMember에 없을 때
          if (courseMember.indexOf(user.currentUser.uid) < 0) {
            // 새로운 배열을 생성
            const newCourseMember = [...courseMember, user.currentUser.uid];
            const newCourseAttendance = [
              ...courseAttendanceArr,
              {
                id: user.currentUser.uid,
                attendance: [
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                ],
              },
            ];
            firestoreService
              .collection("courses")
              .doc(courseId)
              .update({
                courseMember: newCourseMember,
                courseAttendance: newCourseAttendance,
              })
              .then(() => {
                // UI 변경
                alert("신청이 완료되었습니다.");
              })
              .catch((error) => {
                alert("error", error);
              });
          } else {
            alert("이미 신청한 과목입니다.");
          }
        }
      } else {
        alert("신청 기간이 아닙니다.");
      }
      setLoading(false);
    }
  };

  const renderApplcationButton = () => {
    // Please Log In
    if (!user.currentUser) {
      return (
        <S.SessionApplicationLock>
          <AiFillLock style={{ fontSize: "22px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div>로그인 후</div>
            <div>확인해주세요.</div>
          </div>
        </S.SessionApplicationLock>
      );
    }
    // 수강 신청 기간가 아닐경우
    else if (
      !(
        enrollmentTerm &&
        enrollmentTerm[0] <= today &&
        today <= enrollmentTerm[1]
      )
    ) {
      return (
        <S.SessionApplicationLock>
          <AiOutlineClose style={{ fontSize: "22px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div>수강 신청</div>
            <div>기간이 아닙니다.</div>
          </div>
        </S.SessionApplicationLock>
      );
    }
    // 수강 중
    else if (
      courseMemberArr &&
      courseMemberArr.indexOf(user.currentUser.uid) >= 0
    ) {
      return (
        <S.SessionApplicationMy onClick={showModal}>
          수강 중{" "}
          <div style={{ fontSize: "14px" }}>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </div>
        </S.SessionApplicationMy>
      );
    }
    // 신청하기
    else if (!courseMemberArr || courseMemberArr.length < maxMemberNum) {
      return (
        <S.SessionApplicationOn type="danger" onClick={applicationHandler}>
          신청하기
          <div style={{ fontSize: "14px" }}>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </div>
        </S.SessionApplicationOn>
      );
    }
    // 가득 참
    else if (courseMemberArr.length >= maxMemberNum) {
      return (
        <S.SessionApplicationOff>
          인원 마감{" "}
          <div style={{ fontSize: "14px" }}>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </div>
        </S.SessionApplicationOff>
      );
    }
  };
  return (
    <>
      {renderApplcationButton()}{" "}
      <Modal
        title="취소하기"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>정말로 신청한 과목을 취소할까요?</p>
      </Modal>
    </>
  );
}

export default CourseApplication;
