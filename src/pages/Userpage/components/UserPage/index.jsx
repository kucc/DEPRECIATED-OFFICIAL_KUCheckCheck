import React, { useState } from "react";
import UserPageCard from "./UserPageCard";
import UserPageTop from "./UserPageTop";

function UserPage() {
  const [changeState, setchangeState] = useState("");
  const handleChange = (data) => {
    setchangeState(data);
  };
  return (
    <div style={{ display: "grid", gridTemplateRows: "100px auto" }}>
      <UserPageTop onChangeFunc={handleChange} />
      <UserPageCard key={changeState} />
    </div>
  );
}

export default UserPage;
