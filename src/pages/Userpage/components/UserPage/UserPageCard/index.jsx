import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestoreService } from "../../../../../firebase";
import { FiPaperclip } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {
  StyledCardContainer,
  StyledDetailCommentBox,
  StyledDetailContainer,
  StyledIconContainer,
  StyledPictureContainer,
} from "../../../style";

function UserPageCard() {
  const userId = document.location.href.split("/")[4];
  const [firebaseUser, setfirebaseUser] = useState("");
  //유저 정보 불러오기
  useEffect(() => {
    firestoreService
      .collection("users")
      .doc(userId)
      .get()
      .then((querySnapshot) => {
        setfirebaseUser(querySnapshot.data());
      });
  }, []);

  // 링크 특수문자 사라짐 현상 해결 함수
  function replace(url) {
    url = url.replace(/&/g, "%26").replace(/\+/g, "%2B");
    console.log(url);
    return url;
  }

  return (
    <StyledCardContainer>
      <StyledPictureContainer>{firebaseUser.emoji}</StyledPictureContainer>
      <div
        style={{
          borderRight: "1.5px solid #b6b6b6a4",
          height: "50px",
          marginTop: "30px",
        }}
      ></div>
      <StyledDetailContainer>
        <div style={{ fontSize: "32px", fontFamily: "NexonBo" }}>
          {firebaseUser.name}
        </div>
        <div>{firebaseUser.comment}</div>
        <StyledDetailCommentBox>
          {firebaseUser.detailComment}
        </StyledDetailCommentBox>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
            <StyledIconContainer>
              <FiPaperclip color="white" />
            </StyledIconContainer>
            <a
              href={firebaseUser.link}
              style={{ marginLeft: "10px", marginTop: "4px" }}
            >
              {firebaseUser.link}
            </a>
          </div>{" "}
          <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
            <StyledIconContainer>
              <HiOutlineMail color="white" />
            </StyledIconContainer>
            <div style={{ marginLeft: "10px", marginTop: "4px" }}>
              {firebaseUser.email}
            </div>
          </div>
        </div>
      </StyledDetailContainer>
    </StyledCardContainer>
  );
}

export default UserPageCard;
