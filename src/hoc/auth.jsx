/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { authService } from "../firebase";
import { NEED_TO_LOGIN } from "../utility/ALERT_MESSAGE";

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
