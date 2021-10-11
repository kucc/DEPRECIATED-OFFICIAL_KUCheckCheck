import { Button, Modal, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestoreService } from "../../../../../firebase";

function UserMyPageTop() {
  //세션 불러오기
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setuserName] = useState("");
  const [userLink, setuserLink] = useState("");
  const [userComment, setuserComment] = useState("");
  const [userDetailComment, setuserDetailComment] = useState("");
  const [firebaseUser, setfirebaseUser] = useState("");

  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    if (user) {
      firestoreService
        .collection("users")
        .doc(user.uid)
        .get()
        .then((querySnapshot) => {
          setfirebaseUser(querySnapshot.data());
        });
    }
  }, [user]);

  const { TextArea } = Input;

  const showModal = () => {
    setIsModalVisible(true);
    console.log(firebaseUser);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    console.log(user.uid);
    let changedUserRef = firestoreService.collection("users").doc(user.uid);
    changedUserRef
      .update({
        name: userName,
        link: userLink,
        comment: userComment,
        detailComment: userDetailComment,
      })
      .then(() => {
        console.log("Document successfully updated!");
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
      <Modal
        title="Basic Modal "
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>이름 수정</p>
        <TextArea
          maxLength={50}
          onChange={onChangeName}
          placeholder="이름 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%" }}
          defaultValue={firebaseUser.name}
        />
        <p>링크 수정</p>
        <TextArea
          maxLength={50}
          onChange={onChangeLink}
          placeholder="링크 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%" }}
          defaultValue={firebaseUser.link}
        />
        <p>코멘트 수정</p>
        <TextArea
          maxLength={50}
          onChange={onChangeComment}
          placeholder="코멘트 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%" }}
          defaultValue={firebaseUser.comment}
        />
        <p>세부코멘트 수정</p>
        <TextArea
          maxLength={50}
          onChange={onChangeDetailComment}
          placeholder="세부코멘트 수정"
          autoSize={{ minRows: 1 }}
          style={{ width: "100%" }}
          defaultValue={firebaseUser.detailComment}
        />
      </Modal>
    </div>
  );
}

export default UserMyPageTop;
