import React, { useEffect, useState } from "react";
import { LeaderBox, SessionMainCont } from "../../components/SessionMain";
import { DetailApi } from "../../utils/feed";

function SessionMain({ match }) {
  const { category, id } = match.params;
  const [post, setPost] = useState({});
  const getDetail = async () => {
    try {
      const result = await DetailApi(category, id);
      if (result) {
        await setPost(result);
        console.log(result);
      }
    } catch (e) {
      console.log(e.response.data.error.msg);
      alert(e.response.data.error.msg);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <LeaderBox
        name={post.leader.name}
        intro={post.leader.intro}
        link={post.leader.intro}
        leaderId={post.leader.id}
      />
      {category === "sessions" ? (
        <SessionMainCont
          category={category}
          id={id}
          title={post.title}
          explain={post.explain}
          goal={post.goal}
          difficulty={post.difficulty}
          credit={post.credit}
          progress={post.progress}
          notice={post.notice}
        />
      ) : (
        <SessionMainCont
          category={category}
          id={id}
          title={post.title}
          explain={post.explain}
          difficulty={post.difficulty}
          credit={post.credit}
          progress={post.progress}
          notice={post.notice}
        />
      )}
    </>
  );
}
export default SessionMain;
