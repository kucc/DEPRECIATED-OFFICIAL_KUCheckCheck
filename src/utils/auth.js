import axios from "axios";
import { API_URLS } from "../constants";
import { authService, databaseService } from "../firebase";

const { LOGIN, LOGOUT, SIGNUP } = API_URLS;

// export const loginApi = async (email, password) => {
//   const data = {
//     email: email,
//     password: password,
//   };
//   const result = await axios
//     .post(LOGIN, data)
//     .then((res) => {
//       localStorage.setItem("accessToken", res.data.token);
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });
//   return result;
// };
