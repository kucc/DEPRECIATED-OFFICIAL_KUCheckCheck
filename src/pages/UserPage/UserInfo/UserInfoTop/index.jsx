import React, { useEffect, useState } from 'react';

import { Button, Input, Modal } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { WhiteShadowButton } from '@components';

import { authService, firestoreService } from '@/firebase';
import { MAIN_COLOR, RandomEmoji } from '@utility';

import {
  StyledUserInfoModalEmoji,
  StyledUserInfoModalText,
  StyledUserInfoTopContainer,
  StyledUserInfoTopTitle,
} from './style';

function UserInfoTop({ onChangeFunc, userData }) {
  //세션 불러오기
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setuserName] = useState('');
  const [userLink, setuserLink] = useState('');
  const [userComment, setuserComment] = useState('');
  const [userDetailComment, setuserDetailComment] = useState('');
  const [userEmoji, setuserEmoji] = useState('');
  const user = useSelector(state => state.user);
  const userId = userData.userId;

  useEffect(() => {
    setuserName(userData.name);
    setuserLink(userData.link);
    setuserComment(userData.comment);
    setuserDetailComment(userData.detailComment);
    setuserEmoji(userData.emoji);
  }, [userData]);

  const { TextArea } = Input;

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = async () => {
    setIsModalVisible(false);
    try {
      await firestoreService.collection('users').doc(userId).update({
        name: userName,
        link: userLink,
        comment: userComment,
        detailComment: userDetailComment,
        emoji: userEmoji,
      });
    } catch (error) {
      alert('Error updating document: ', error);
    }
    // 상위 컴포넌트를 리렌더링 하기 위해 key 값에 Date() 값을 보냄.
    onChangeFunc(Date());
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const userEmojiHandler = () => {
    setuserEmoji(RandomEmoji());
  };

  const onChangeLink = event => {
    setuserLink(event.target.value);
  };
  const onChangeComment = event => {
    setuserComment(event.target.value);
  };
  const onChangeDetailComment = event => {
    setuserDetailComment(event.target.value);
  };

  const userQuitHandler = async () => {
    if (
      !confirm(
        '정말 탈퇴하시겠습니까? 회원 정보는 즉시 삭제되고, 현재 등록 중인 세션/스터디/프로젝트에사는 자동으로 등록 취소됩니다. 만약 세션장일 경우에는 세션이 삭제되게 됩니다. 삭제된 회원 정보는 복구할 수 없습니다.',
      )
    ) {
      // alert('취소(아니오)를 누르셨습니다.');
    } else {
      const user = authService.currentUser;
      // 코스에서 해당 유저 관련 모두 삭제
      const coursesResult = await firestoreService.collection('courses').get();
      coursesResult.forEach(doc => {
        // 만약 세션장일 경우
        if (doc.data().courseLeader.id === user.uid) {
          firestoreService.collection('courses').doc(doc.id).delete();
        }
        // 해당 세션에 현재 유저가 들어가 있으면
        else if (doc.data().courseMember.includes(user.uid)) {
          // courseMember에서 해당 member를 제거
          const courseMember = doc.data().courseMember;
          const newcourseMember = courseMember.filter(
            element => element !== user.uid,
          );
          // courseAttendance에서 해당 member를 제거
          const courseAttendance = doc.data().courseAttendance;
          const newcourseAttendance = courseAttendance.filter(
            element => element.id !== user.uid,
          );
          // firestore 압데이트
          firestoreService.collection('courses').doc(doc.id).update({
            courseMember: newcourseMember,
            courseAttendance: newcourseAttendance,
          });
        }
      });

      // 데이터베이스에서 유저 삭제
      await firestoreService.collection('users').doc(user.uid).delete();

      // 유저 삭제
      await user.delete();

      // 유저 로그아웃
      await authService.signOut();

      alert('이용해주셔서 감사합니다.');
    }
  };

  return (
    <StyledUserInfoTopContainer>
      <StyledUserInfoTopTitle>
        {user.currentUser && userId === user.currentUser.uid ? (
          <>마이 페이지</>
        ) : (
          <>{userName} 님의 정보</>
        )}
      </StyledUserInfoTopTitle>
      {/* 대상 유저와 현재 유저와 같으면, 수정하기 on */}
      {user.currentUser && userId === user.currentUser.uid && (
        <div style={{ width: '120px' }}>
          <WhiteShadowButton
            bgColor='white'
            onClick={showModal}
            text='수정하기'
          />
        </div>
      )}
      <Modal
        title='수정하기'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <StyledUserInfoModalText>
          이모티콘 수정 (클릭시 랜덤으로 바뀝니다!)
        </StyledUserInfoModalText>
        <StyledUserInfoModalEmoji onClick={userEmojiHandler}>
          {userEmoji}
        </StyledUserInfoModalEmoji>
        <StyledUserInfoModalText>코멘트 수정</StyledUserInfoModalText>
        <TextArea
          maxLength={100}
          onChange={onChangeComment}
          placeholder='코멘트 수정'
          autoSize={{ minRows: 1 }}
          style={{ width: '100%', marginBottom: '20px' }}
          defaultValue={userComment}
        />
        <StyledUserInfoModalText>세부코멘트 수정</StyledUserInfoModalText>
        <TextArea
          maxLength={200}
          onChange={onChangeDetailComment}
          placeholder='세부코멘트 수정'
          autoSize={{ minRows: 1 }}
          style={{ width: '100%', marginBottom: '20px' }}
          defaultValue={userDetailComment}
        />
        <StyledUserInfoModalText>
          링크 수정 (https://까지 넣어주세요!)
        </StyledUserInfoModalText>
        <TextArea
          maxLength={200}
          onChange={onChangeLink}
          placeholder='링크 수정'
          autoSize={{ minRows: 1 }}
          style={{ width: '100%', marginBottom: '20px' }}
          defaultValue={userLink}
        />
        <Button
          danger
          style={{
            color: 'white',
            borderColor: MAIN_COLOR,
            backgroundColor: MAIN_COLOR,
          }}
          onClick={userQuitHandler}>
          탈퇴하기
        </Button>
      </Modal>
    </StyledUserInfoTopContainer>
  );
}

export default UserInfoTop;

UserInfoTop.propTypes = {
  onChangeFunc: PropTypes.func.isRequired,
  userData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
