import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/trackerApi";
import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  AUTH_ERROR,
  SET_TOKEN,
  CLEAR_AUTH_ERROR,
} from "../actionTypes";
import { navigate } from "../utils/navigationRef";


const clearAuthError = (dispatch) => () => {
  dispatch({ type: CLEAR_AUTH_ERROR });
};

const signupAction = (dispatch) => async (requestPayload) => {
  return trackerApi
    .post("/signup", requestPayload)
    .then(({ data: { data } }) =>
    AsyncStorage.setItem("token", String(data.token))
    .then(() => {
        dispatch({ type: SIGNUP, payload: data.token });
        navigate("TrackListScreen");
        return data;
      })
    )
    .catch((error) => {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
    });
};

const loginAction = (dispatch) => async (requestPayload) => {
  return trackerApi
    .post("/login", requestPayload)
    .then(({ data: { data } }) => {
      AsyncStorage.setItem("token", String(data.token))
      .then(() => {
        dispatch({ type: LOGIN, payload: data.token });
        navigate("TrackListScreen");
        return data;
      })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: AUTH_ERROR, payload: error?.response?.data?.message });
    });
};

const autoLoginUser = (dispatch) => async (pageLink) => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: SET_TOKEN, payload: token });
    navigate("TrackListScreen");
  } else {
    navigate(pageLink);
  }
};

export const logoutAction = (dispatch) => {
  AsyncStorage.removeItem('token').then(() => {
    dispatch({ type: LOGOUT });
    navigate("LoginScreen");
  })
};

export default {
  signupAction,
  loginAction,
  autoLoginUser,
  clearAuthError,
};
