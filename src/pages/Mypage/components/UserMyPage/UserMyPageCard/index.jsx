import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestoreService } from "../../../../../firebase";
import { FiPaperclip } from "react-icons/fi";
import {
  StyledCardContainer,
  StyledDetailCommentBox,
  StyledDetailContainer,
  StyledIconContainer,
  StyledPictureContainer,
} from "../../../style";

function UserMyPageCard() {
  const user = useSelector((state) => state.user.currentUser);
  const [firebaseUser, setfirebaseUser] = useState("");
  //유저 정보 불러오기
  useEffect(() => {
    if (user) {
      firestoreService
        .collection("users")
        .doc(user.uid)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot.data());
          setfirebaseUser(querySnapshot.data());
        });
    }
  }, [user]);

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
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>
          {user && user.displayName}
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
              href={`https://${firebaseUser.link}`}
              style={{ marginLeft: "10px", marginTop: "4px" }}
            >
              {firebaseUser.link}
            </a>
          </div>{" "}
          <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
            <StyledIconContainer>
              <FiPaperclip color="white" />
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

export default UserMyPageCard;
