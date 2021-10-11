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
      <StyledPictureContainer>사진</StyledPictureContainer>
      <StyledDetailContainer>
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>
          {user && user.displayName}
        </div>
        <div>{firebaseUser.comment}</div>
        <StyledDetailCommentBox>
          {firebaseUser.detailComment}
        </StyledDetailCommentBox>
        <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
          <StyledIconContainer>
            <FiPaperclip color="white" />
          </StyledIconContainer>
          <div>{firebaseUser.link}</div>
        </div>
      </StyledDetailContainer>
    </StyledCardContainer>
  );
}

export default UserMyPageCard;
