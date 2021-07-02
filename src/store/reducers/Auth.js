import { AUTH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  session_key: null,
  error: null,
  typeAccount: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        session_key: action.session_key,
        typeAccount: action.typeAccount
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        session_key: null,
        typeAccount: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
