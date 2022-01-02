import React, { useEffect, useState } from "react";
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

function UserInfoCard({ userData }) {
  const [firebaseUser, setfirebaseUser] = useState("");
  //유저 정보 불러오기
  useEffect(() => {
    async function loadUserData() {
      if (userData) {
        const data = await firestoreService
          .collection("users")
          .doc(userData.userId)
          .get();
        setfirebaseUser(data.data());
      }
    }
    loadUserData();
  }, [userData]);

  return (
    <StyledCardContainer>
      <StyledPictureContainer>
        {firebaseUser && firebaseUser.emoji}
      </StyledPictureContainer>
      <div
        style={{
          borderRight: "1.5px solid #b6b6b6a4",
          height: "50px",
          marginTop: "30px",
        }}
      ></div>
      <StyledDetailContainer>
        <div style={{ fontSize: "32px", fontFamily: "NexonBo" }}>
          {firebaseUser && firebaseUser.name}
        </div>
        <div>{firebaseUser && firebaseUser.comment}</div>
        <StyledDetailCommentBox>
          {firebaseUser && firebaseUser.detailComment}
        </StyledDetailCommentBox>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
            <StyledIconContainer>
              <FiPaperclip color="white" />
            </StyledIconContainer>
            <a
              href={firebaseUser && firebaseUser.link}
              style={{ marginLeft: "10px", marginTop: "4px" }}
            >
              {firebaseUser && firebaseUser.link}
            </a>
          </div>
          <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
            <StyledIconContainer>
              <HiOutlineMail color="white" />
            </StyledIconContainer>
            <div style={{ marginLeft: "10px", marginTop: "4px" }}>
              {firebaseUser && firebaseUser.email}
            </div>
          </div>
        </div>
      </StyledDetailContainer>
    </StyledCardContainer>
  );
}

export default UserInfoCard;
