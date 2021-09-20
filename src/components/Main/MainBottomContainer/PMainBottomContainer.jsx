import React, { useState } from "react";
// import { useRecoilState } from "recoil";
// import { userState } from "../../../recoil/userState";
import SessionContainer from "../SessionContainer";
import * as S from "../style";

function PMainBottomContainer() {
  // Search를 redux에서 사용?? Database에서 사용??
  // const [search, setSearch] = useState(useRecoilState(userState).category);
  return (
    <>
      <S.MainBottomWrapper>
        <S.MainBottomBtnCont>
          <S.MainSessDuration>
            <p>21-2학기</p>
          </S.MainSessDuration>
          <S.MainSessTab>
            <S.MainSessItem>
              <p
              // onClick={() => setSearch("total")}
              >
                전체
              </p>
            </S.MainSessItem>
            <S.MainSessItem>
              <p
              // onClick={() => setSearch("session")}
              >
                {" "}
                세션
              </p>
            </S.MainSessItem>
            <S.MainSessItem>
              <p
              // onClick={() => setSearch("studies")}
              >
                스터디
              </p>
            </S.MainSessItem>
          </S.MainSessTab>
          <S.MainSessRig>
            <p>등록</p>
          </S.MainSessRig>
        </S.MainBottomBtnCont>
        <SessionContainer />
      </S.MainBottomWrapper>
    </>
  );
}
export default PMainBottomContainer;
