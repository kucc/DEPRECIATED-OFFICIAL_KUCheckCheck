import React from "react";
import { loginApi, signupApi } from "../../../utils/auth";
import { useDispatch } from "react-redux";
import PSignupBox from "./PSignupBox";
import { useHistory } from "react-router";
import { authService, databaseService } from "../../../firebase";
import { setUser } from "../../../redux/actions/user_action";

export default function SignupBox() {
  const dispatch = useDispatch();
  const history = useHistory();
  const signupHandler = async (email, password, name, link, comment) => {
    try {
      // 유효성 검사??
      let createdUser = await authService.createUserWithEmailAndPassword(
        email,
        password
      );

      await createdUser.user.updateProfile({
        displayName: name,
      });

      await databaseService.ref("users").child(createdUser.user.uid).set({
        name: name,
        email: email,
        link: link,
        comment: comment,
      });

      await authService.onAuthStateChanged((user) => {
        if (user) {
          dispatch(setUser(user));
        }
      });
      window.alert("회원 가입을 완료하였습니다!");
      history.push("/");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  return (
    <>
      <PSignupBox signupHandler={signupHandler} />
    </>
  );
}
