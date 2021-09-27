import React, { useEffect, useState } from "react";
// import { useRecoilValue } from "recoil";
// import { userState } from "../../../recoil/userState";
import { useSelector } from "react-redux";
import { mainTotalApi } from "../../../utils";
import PSessionContainer from "./PSessionContainer";

export default function SessionContainer() {
  const [sessions, setSessions] = useState([]);
  const search = useSelector((state) => state.user.category);
  const dummySession = [
    {
      title: "세션1",
      Leader: "홍길동",
      check: true,
      category: "sessions",
      level: "초급",
      credit: 1,
      id: 1,
    },
    {
      title: "세션2",
      Leader: "아무개",
      check: false,
      category: "sessions",
      level: "초급",
      credit: 1,
      id: 2,
    },
    {
      title: "세션3",
      Leader: "뭐시기",
      category: "sessions",
      check: true,
      level: "초급",
      credit: 1,
      id: 3,
    },
  ];
  useEffect(() => {
    getFeedList();
  }, []);
  const getFeedList = async () => {
    try {
      let result = "";
      if (search === "total") {
        result = await mainTotalApi("total");
      } else if (search === "session") {
        result = await mainTotalApi("session");
      } else if (search === "studies") {
        result = await mainTotalApi("studies");
      }
      if (result) {
        setSessions(result);
      }
    } catch (e) {
      console.log(e.response.data.error.msg);
      alert(e.response.data.error.msg);
    }
  };

  return (
    <>
      {dummySession.map((session) => (
        <PSessionContainer
          key={session.id + session.category}
          id={session.id}
          title={session.title}
          category={session.category}
          sessionLeader={session.Leader}
          check={session.check}
          level={session.level}
          credit={session.credit}
        />
      ))}
    </>
  );
}
