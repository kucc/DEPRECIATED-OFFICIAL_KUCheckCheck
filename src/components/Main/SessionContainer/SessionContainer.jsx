import React from "react";
import { useHistory } from "react-router";
import * as S from "../style";

function SessionContainer({ session }) {
  const history = useHistory();
  console.log(session);
  const imageRender = () => {
    console.log(session.language);
    if (session.language === "javascript") {
      return (
        <img
          style={{ borderRadius: "50%", width: "60px" }}
          src="./img/icon/Javascript.png"
        />
      );
    } else if (session.language === "python") {
      return (
        <img
          style={{ borderRadius: "50%", width: "60px" }}
          src="./img/icon/Python.png"
        />
      );
    } else if (session.language === "react") {
      return (
        <img
          style={{ borderRadius: "50%", width: "60px" }}
          src="./img/icon/React.png"
        />
      );
    } else if (session.language === "c") {
      return (
        <img
          style={{ borderRadius: "50%", width: "60px" }}
          src="./img/icon/C.png"
        />
      );
    }
  };

  return (
    <>
      <S.SessionContainer
      //onClick={() => history.push(`/detail/${category}/${id}`)}
      >
        <S.SessionImg>{imageRender()}</S.SessionImg>
        <S.SessionExplainWrapper>
          <S.SessionText>
            <S.SessionTitle>
              <p>{session.courseName}</p>
            </S.SessionTitle>
            <S.SessionExplain>
              <p>{session.courseLeader} 세션장</p>
            </S.SessionExplain>
          </S.SessionText>
          <S.SessionLevel>
            <div>난이도:{session.difficulty} /</div>
            <span>{session.requireTime}학점</span>
          </S.SessionLevel>
          {/* {props.check ? (
            <S.SessionFavorite>수강중</S.SessionFavorite>
          ) : (
            <S.SessionFavorite>신청하기</S.SessionFavorite>
          )} */}
        </S.SessionExplainWrapper>
      </S.SessionContainer>
    </>
  );
}

export default SessionContainer;
