/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { NEED_TO_LOGIN } from "../constants/ERROR_MESSAGE";
import { authService } from "../firebase";

export default function (SpecificComponent) {
  function AuthCheck(props) {
    useEffect(() => {
      authService.onAuthStateChanged((user) => {
        if (!user) {
          alert(NEED_TO_LOGIN);
          props.history.push("/login");
        }
      });
    }, []);

    return <SpecificComponent {...props} />;
  }
  return AuthCheck;
}
