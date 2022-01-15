import { Button, Modal, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WhiteShadowButton from "../../../../../components/Buttons/WhiteShadowButton";
import { firestoreService } from "../../../../../firebase";
import { RandomEmoji } from "../../../../../utility/COMMON_FUNCTION";
import {
  StyledUserInfoModalEmoji,
  StyledUserInfoModalText,
  StyledUserInfoTopContainer,
  StyledUserInfoTopTitle,
} from "./style";

function UserInfoTop({ onChangeFunc, userData }) {
  //세션 불러오기
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setuserName] = useState("");
  const [userLink, setuserLink] = useState("");
  const [userComment, setuserComment] = useState("");
  const [userDetailComment, setuserDetailComment] = useState("");
  const [userEmoji, setuserEmoji] = useState("");
  const user = useSelector((state) => state.user);
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
      await firestoreService.collection("users").doc(userId).update({
        name: userName,
        link: userLink,
        comment: userComment,
        detailComment: userDetailComment,
        emoji: userEmoji,
      });
    } catch (error) {
      alert("Error updating document: ", error);
    }
    // 상위 컴포넌트를 리렌더링 하기 위해 key 값에 Data() 값을 보냄.
    onChangeFunc(Date());
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const userEmojiHandler = () => {
    setuserEmoji(RandomEmoji());
  };

  const onChangeLink = (event) => {
    setuserLink(event.target.value);
  };
  const onChangeComment = (event) => {
    setuserComment(event.target.value);
  };
  const onChangeDetailComment = (event) => {
    setuserDetailComment(event.target.value);
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
        <div style={{ width: "120px" }}>
          <WhiteShadowButton onClick={showModal} text="수정하기" />
        </div>
      )}
      <Modal
        title="수정하기"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <StyledUserInfoModalText>
          이모티콘 수정 (클릭시 랜덤으로 바뀝니다!)
        </StyledUserInfoModalText>
        <StyledUserInfoModalEmoji onClick={userEmojiHandler}>
          {userEmoji}
        </StyledUserInfoModalEmoji>
        <StyledUserInfoModalText>
          링크 수정 (https://까지 넣어주세요!)
        </StyledUserInfoModalText>
        <TextArea
          maxLength={200}
          onChange={onChangeLink}
          placeholder="링크 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%", marginBottom: "20px" }}
          defaultValue={userLink}
        />
        <StyledUserInfoModalText>코멘트 수정</StyledUserInfoModalText>
        <TextArea
          maxLength={100}
          onChange={onChangeComment}
          placeholder="코멘트 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%", marginBottom: "20px" }}
          defaultValue={userComment}
        />
        <StyledUserInfoModalText>세부코멘트 수정</StyledUserInfoModalText>
        <TextArea
          maxLength={200}
          onChange={onChangeDetailComment}
          placeholder="세부코멘트 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%", marginBottom: "20px" }}
          defaultValue={userDetailComment}
        />
      </Modal>
    </StyledUserInfoTopContainer>
  );
}

export default UserInfoTop;
