import { Button, Modal, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestoreService } from "../../../../../firebase";

function UserPageTop({ onChangeFunc }) {
  //세션 불러오기
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setuserName] = useState("");
  const [userLink, setuserLink] = useState("");
  const [userComment, setuserComment] = useState("");
  const [userDetailComment, setuserDetailComment] = useState("");
  const [firebaseUser, setfirebaseUser] = useState("");
  const userId = document.location.href.split("/")[4];
  const user = useSelector((state) => state.user);

  useEffect(() => {
    firestoreService
      .collection("users")
      .doc(userId)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.data());

        setfirebaseUser(querySnapshot.data());
        setuserName(querySnapshot.data().name);
        setuserLink(querySnapshot.data().link);
        setuserComment(querySnapshot.data().comment);
        setuserDetailComment(querySnapshot.data().detailComment);
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
      })
      .then(() => {
        console.log("Document successfully updated!");
        onChangeFunc(Date());
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        {/* 이름 수정.. */}
        유저 페이지
      </div>
      {/* 대상 유저와 현재 유저와 같으면, 수정하기 on */}
      {user.currentUser && userId == user.currentUser.uid && (
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