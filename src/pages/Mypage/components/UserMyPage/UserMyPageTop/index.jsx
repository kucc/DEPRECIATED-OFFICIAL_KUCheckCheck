import { Button } from "antd";
import React from "react";

function UserMyPageTop() {
  //세션 불러오기
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
      >
        수정하기
      </Button>
    </div>
  );
}

export default UserMyPageTop;
