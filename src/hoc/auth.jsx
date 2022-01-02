/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { NEED_TO_LOGIN } from "../constants/ERROR_MESSAGE";
import { authService } from "../firebase";

export default function (SpecificComponent) {
  // userpage는 로그인이 필요한 페이지
  function AuthCheck(props) {
    useEffect(() => {
      // need to login
      if (!authService.currentUser) {
        alert(NEED_TO_LOGIN);
        props.history.push("/login");
      }
    }, []);

    return <SpecificComponent {...props} />;
  }
  return AuthCheck;
}
