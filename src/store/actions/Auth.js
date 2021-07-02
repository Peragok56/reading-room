import axios from "../../Axios/axios";
import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from "./actionTypes";

export function auth(login, password) {
  return async (dispatch) => {
    const respons = await axios.get(
      "auth?login=" + login + "&password=" + password
    );

    const data = respons.data.data;

    switch (respons.data.type) {
      case "error":
        return dispatch(authError(respons.data.data[0]));
      case "success":
        const expirationDate = new Date(
          new Date().getTime() + data.session_time * 1000
        );

        localStorage.setItem("session_key", data.session_key);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("typeAccount", data.account.typeAccount);

        dispatch(authSuccess(data.session_key, data.account.typeAccount));
        dispatch(authLogout(data.session_time));
      // default:
      //   return null
    }
  };
}

export function authLogout(time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
}

export function logout() {
  localStorage.removeItem("session_key");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("typeAccount");
  return {
    type: AUTH_LOGOUT,
  };
}

export function autoLogin() {
  return (dispatch) => {
    const session_key = localStorage.getItem("session_key");
    const typeAccount = localStorage.getItem("typeAccount");
    if (!session_key) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date().toString()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(session_key, typeAccount));
        dispatch(
          authLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
}

export function authSuccess(session_key, typeAccount) {
  return {
    type: AUTH_SUCCESS,
    session_key,
    typeAccount,
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    error,
  };
}
