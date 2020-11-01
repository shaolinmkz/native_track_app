import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  AUTH_ERROR,
  SET_TOKEN,
  CLEAR_AUTH_ERROR,
} from "../actionTypes";

export const initialState = {
  isAuthenticated: false,
  token: "",
  errorMessage: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
    case SIGNUP:
    case SET_TOKEN:
    case LOGOUT: {
      const data = {};
      if ([LOGIN, SIGNUP, SET_TOKEN].includes(type)) {
        data.token = payload;
      }
      return {
        ...state,
        ...data,
        isAuthenticated: Boolean(payload),
      };
    }
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        errorMessage: "",
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
