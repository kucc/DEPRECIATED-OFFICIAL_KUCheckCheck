import React from "react";
import { useHistory } from "react-router-dom";
import PLoginBox from "./PLoginBox";
import { authService } from "../../../firebase";

export default function LoginBox() {
  const history = useHistory();
  const loginHandler = async (email, password) => {
    try {
      await authService.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  return (
    <>
      <PLoginBox loginHandler={loginHandler} />
    </>
  );
}
