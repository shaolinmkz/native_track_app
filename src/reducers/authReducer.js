import { LOGIN, SIGNUP, LOGOUT, AUTH_ERROR } from "../actionTypes";

export const initialState = {
  isAuthenticated: false,
  userData: null,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userData: payload,
      };
    case SIGNUP:
      return {
        ...state,
        isAuthenticated: true,
        userData: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userData: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
