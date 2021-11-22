import { Button, Modal, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RandomEmoji from "../../../../../components/RandomEmoji/RandomEmoji";
import { firestoreService } from "../../../../../firebase";

function UserPageTop({ onChangeFunc }) {
  //세션 불러오기
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setuserName] = useState("");
  const [userLink, setuserLink] = useState("");
  const [userComment, setuserComment] = useState("");
  const [userDetailComment, setuserDetailComment] = useState("");
  const [userEmoji, setuserEmoji] = useState("");
  const [firebaseUser, setfirebaseUser] = useState("");
  const userId = document.location.href.split("/")[4];
  const user = useSelector((state) => state.user);

  useEffect(() => {
    firestoreService
      .collection("users")
      .doc(userId)
      .get()
      .then((querySnapshot) => {
        setfirebaseUser(querySnapshot.data());
        setuserName(querySnapshot.data().name);
        setuserLink(querySnapshot.data().link);
        setuserComment(querySnapshot.data().comment);
        setuserDetailComment(querySnapshot.data().detailComment);
        setuserEmoji(querySnapshot.data().emoji);
      });
  }, []);

  const { TextArea } = Input;

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    const changedUserRef = firestoreService.collection("users").doc(userId);
    changedUserRef
      .update({
        name: userName,
        link: userLink,
        comment: userComment,
        detailComment: userDetailComment,
        emoji: userEmoji,
      })
      .then(() => {
        // 교체해야 함!
        onChangeFunc(Date());
      })
      .catch((error) => {
        alert("Error updating document: ", error);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const userEmojiHandler = () => {
    setuserEmoji(RandomEmoji());
  };

  const onChangeName = (event) => {
    setuserName(event.target.value);
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
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ fontSize: "20px", fontWeight: "700", marginLeft: "20px" }}>
        {user.currentUser && userId === user.currentUser.uid ? (
          <>마이 페이지</>
        ) : (
          <>{userName} 님의 정보</>
        )}
      </div>
      {/* 대상 유저와 현재 유저와 같으면, 수정하기 on */}
      {user.currentUser && userId === user.currentUser.uid && (
        <Button
          style={{
            width: "120px",
            height: "40px",
            borderRadius: "18px",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 1.5px",
          }}
          onClick={showModal}
        >
          수정하기
        </Button>
      )}
      <Modal
        title="수정하기"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>이모티콘 수정 (클릭시 랜덤으로 바뀝니다!)</div>
        <div
          style={{ fontSize: "80px", cursor: "pointer" }}
          onClick={userEmojiHandler}
        >
          {userEmoji}
        </div>
        <div>이름 수정</div>
        <TextArea
          maxLength={50}
          onChange={onChangeName}
          placeholder="이름 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%", marginBottom: "20px" }}
          defaultValue={firebaseUser.name}
        />
        <div>링크 수정 (https://까지 넣어주세요!)</div>
        <TextArea
          maxLength={50}
          onChange={onChangeLink}
          placeholder="링크 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%", marginBottom: "20px" }}
          defaultValue={firebaseUser.link}
        />
        <div>코멘트 수정</div>
        <TextArea
          maxLength={50}
          onChange={onChangeComment}
          placeholder="코멘트 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%", marginBottom: "20px" }}
          defaultValue={firebaseUser.comment}
        />
        <div>세부코멘트 수정</div>
        <TextArea
          maxLength={50}
          onChange={onChangeDetailComment}
          placeholder="세부코멘트 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%", marginBottom: "20px" }}
          defaultValue={firebaseUser.detailComment}
        />
      </Modal>
    </div>
  );
}

export default UserPageTop;
