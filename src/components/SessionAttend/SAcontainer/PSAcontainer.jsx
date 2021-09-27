import React, { useEffect, useState } from "react";
import { AttendApi } from "../../../utils";
import SAItem from "../SAItem";
import * as S from "../style";

function PSAcontainer({ category, id }) {
  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    try {
      const result = await AttendApi(category, id);
      if (result) {
        setMembers(result);
      }
    } catch (e) {
      console.log(e.response.data.error.msg);
      alert(e.response.data.error.msg);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);
  return (
    <>
      <S.SAtopCont>
        <S.SAtext>
          <p>출결 관리</p>
        </S.SAtext>
        <S.SAbtn>
          <p>수정하기</p>
        </S.SAbtn>
      </S.SAtopCont>
      {members.map((member) => (
        <SAItem
          name={member.name}
          userId={member.id}
          userAttend={member.attend}
        />
      ))}
    </>
  );
}
export default PSAcontainer;
