import { useDispatch, useSelector } from "react-redux";
import { setLogin, setPassword, setRole } from "../../state/slices/auth";
import {
  clearUserData,
  saveUserData,
  useLoginUserMutation,
} from "../../../transport/auth";
import { api } from "../../../transport/api";

const useAuth = () => {
  const dispatch = useDispatch();
  const { login, password, role } = useSelector((state) => state.auth);
  const [loginUser] = useLoginUserMutation();

  const handleLoginChange = (login) => {
    dispatch(setLogin(login));
  };

  const handlePasswordChange = (password) => {
    dispatch(setPassword(password));
  };

  const handleUserLogin = async () => {
    try {
      const data = await loginUser({
        login: login,
        password: password,
      }).unwrap();

      if (!data) {
        return false;
      }

      dispatch(setRole(data.role));
      saveUserData({ role: data.role, token: data.token });
      return { isSuccess: true, role: data.role };
    } catch (e) {
      console.log(e);
      return { isSuccess: false, role: "" };
    }
  };

  const handleUserLogout = () => {
    clearUserData();
    dispatch(setLogin(""));
    dispatch(setPassword(""));
    dispatch(api.util.resetApiState());
  };

  return {
    login,
    password,
    role,
    handleLoginChange,
    handlePasswordChange,
    handleUserLogin,
    handleUserLogout,
  };
};

export default useAuth;
