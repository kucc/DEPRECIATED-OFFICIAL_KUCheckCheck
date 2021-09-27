import React from "react";
import * as S from "../style";

function PSAItem({ name, userId, userAttend }) {
  return (
    <>
      <S.ATprofileWrapper>
        {/* 이미지 */}
        <S.ATname>
          <p>{name}</p>
        </S.ATname>
      </S.ATprofileWrapper>
      <S.ATattendWrapper>
        {userAttend.map((item) => (
          <S.ATattenditem>{item}</S.ATattenditem>
        ))}
      </S.ATattendWrapper>
    </>
  );
}
export default PSAItem;
