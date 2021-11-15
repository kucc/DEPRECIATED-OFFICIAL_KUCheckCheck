import { Button } from "antd";
import React from "react";

function UserMyPageTop() {
  //세션 불러오기
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "700",
          marginLeft: "20px",
          marginTop: "50px",
        }}
      >
        {/* 이름 수정.. */}지난 세션/스터디
      </div>
    </div>
  );
}

export default UserMyPageTop;
